// Raster-based interaction: the authored painting stays the source of every visible pixel.
// Water displacement and a restrained camera offset give it response without a 3D dependency.
export type InkScene = { setActive: (active: boolean) => void; setPointer: (x: number, y: number) => void; dispose: () => void }

const VERTEX = `attribute vec2 a_position;
varying vec2 v_uv;
void main(){v_uv=a_position*0.5+0.5;gl_Position=vec4(a_position,0.,1.);}`
const FRAGMENT = `precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_image;
uniform vec2 u_view;
uniform vec2 u_size;
uniform vec2 u_pointer;
uniform float u_time;
uniform float u_water;
void main(){
  float viewAspect=u_view.x/u_view.y;
  float imageAspect=u_size.x/u_size.y;
  vec2 cover=vec2(1.);
  if(viewAspect>imageAspect)cover.y=imageAspect/viewAspect;
  else cover.x=viewAspect/imageAspect;
  vec2 uv=(v_uv-.5)*cover+.5;
  vec2 pointer=(u_pointer-.5)*cover+.5;
  float water=1.-smoothstep(u_water-.04,u_water+.015,uv.y);
  float dist=length((uv-pointer)*vec2(1.,.75));
  float ripple=sin(dist*85.-u_time*2.1)*exp(-dist*7.)*.0018;
  uv.x+=(sin(uv.y*170.+u_time*.8)*.0014+ripple)*water;
  uv.y+=cos(uv.x*45.+u_time*.65)*.0007*water;
  uv+=(u_pointer-.5)*vec2(.006,.003);
  gl_FragColor=texture2D(u_image,clamp(uv,vec2(.001),vec2(.999)));
}`

export function createInkScene(canvas: HTMLCanvasElement, src: string, waterline: number): InkScene | null {
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' })
  if (!gl) return null
  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type)
    if (!shader) return null
    gl.shaderSource(shader, source); gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null }
    return shader
  }
  const vertex = compile(gl.VERTEX_SHADER, VERTEX), fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT)
  if (!vertex || !fragment) { if (vertex) gl.deleteShader(vertex); if (fragment) gl.deleteShader(fragment); return null }
  const program = gl.createProgram(), buffer = gl.createBuffer(), texture = gl.createTexture()
  if (!program || !buffer || !texture) { gl.deleteShader(vertex); gl.deleteShader(fragment); if (program) gl.deleteProgram(program); if (buffer) gl.deleteBuffer(buffer); if (texture) gl.deleteTexture(texture); return null }
  gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteShader(vertex); gl.deleteShader(fragment); gl.deleteProgram(program); gl.deleteBuffer(buffer); gl.deleteTexture(texture); return null
  }
  gl.useProgram(program)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
  const position = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  const view = gl.getUniformLocation(program, 'u_view'), size = gl.getUniformLocation(program, 'u_size')
  const pointer = gl.getUniformLocation(program, 'u_pointer'), time = gl.getUniformLocation(program, 'u_time')
  gl.uniform1f(gl.getUniformLocation(program, 'u_water'), waterline)
  gl.uniform1i(gl.getUniformLocation(program, 'u_image'), 0)
  let alive = true, loaded = false, active = false, frame = 0, last = 0, elapsed = 0
  let x = .5, y = .5, targetX = .5, targetY = .5
  const draw = () => {
    if (!alive || !loaded) return
    gl.uniform2f(view, canvas.width, canvas.height); gl.uniform2f(pointer, x, y); gl.uniform1f(time, elapsed)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
  }
  const tick = (now: number) => {
    frame = 0
    if (!alive || !active || !loaded) return
    // Keep the decorative scene at 30fps; input and DOM controls remain unconstrained.
    if (last && now - last < 1000 / 30) { frame = requestAnimationFrame(tick); return }
    const dt = last ? Math.min((now - last) / 1000, .066) : .033
    last = now; elapsed += dt
    const decay = 1 - Math.exp(-dt * 9)
    x += (targetX - x) * decay; y += (targetY - y) * decay
    draw(); frame = requestAnimationFrame(tick)
  }
  const schedule = () => { if (alive && loaded && active && !frame) { last = 0; frame = requestAnimationFrame(tick) } }
  const resize = () => {
    const box = canvas.getBoundingClientRect()
    const density = Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(1600000 / Math.max(1, box.width * box.height)))
    canvas.width = Math.max(1, Math.round(box.width * density)); canvas.height = Math.max(1, Math.round(box.height * density))
    gl.viewport(0, 0, canvas.width, canvas.height); draw()
  }
  const observer = new ResizeObserver(resize); observer.observe(canvas)
  const image = new Image()
  image.onload = () => {
    if (!alive) return
    gl.bindTexture(gl.TEXTURE_2D, texture); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    gl.uniform2f(size, image.naturalWidth, image.naturalHeight)
    loaded = true; resize(); canvas.dataset.renderer = 'webgl'; canvas.style.opacity = '1'; schedule()
  }
  image.onerror = () => { canvas.dataset.renderer = 'fallback' }
  image.src = src
  const onLost = (event: Event) => {
    event.preventDefault(); active = false; cancelAnimationFrame(frame); frame = 0
    canvas.style.opacity = '0'; canvas.dataset.renderer = 'fallback'; canvas.dataset.active = 'false'
  }
  canvas.addEventListener('webglcontextlost', onLost)
  return {
    setActive(value) {
      canvas.dataset.active = String(value)
      if (active === value) return
      active = value
      if (active) schedule()
      else { cancelAnimationFrame(frame); frame = 0; last = 0; draw() }
    },
    setPointer(px, py) { targetX = Math.max(0, Math.min(1, px)); targetY = Math.max(0, Math.min(1, py)) },
    dispose() {
      alive = false; active = false; cancelAnimationFrame(frame); observer.disconnect()
      image.onload = null; image.onerror = null; canvas.removeEventListener('webglcontextlost', onLost)
      gl.deleteTexture(texture); gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment)
      canvas.style.opacity = '0'
    },
  }
}
