'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { COMMUNITY_GALLERY as photos } from '@/lib/community-gallery'
import Icon from './Icon'

export default function CommunityWall({ compact = false }: { compact?: boolean }) {
  const root=useRef<HTMLElement>(null), dialog=useRef<HTMLDialogElement>(null), opener=useRef<HTMLElement|null>(null)
  const [ready,setReady]=useState(false),[still,setStill]=useState(false),[grid,setGrid]=useState(false),[paused,setPaused]=useState(false),[visible,setVisible]=useState(false),[tabVisible,setTabVisible]=useState(true)
  const [selected,setSelected]=useState<number|null>(null)
  const isOpen=selected!==null, galleryMode=!ready||still||grid
  useEffect(()=>{
    const media=matchMedia('(prefers-reduced-motion: reduce)')
    const sync=()=>setStill(media.matches||document.documentElement.dataset.static==='true')
    sync();setReady(true)
    try{setPaused(localStorage.getItem('inzeum:community-paused')==='true')}catch{}
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting));if(root.current)observer.observe(root.current)
    const visibility=()=>setTabVisible(!document.hidden)
    document.addEventListener('visibilitychange',visibility);media.addEventListener('change',sync)
    return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility);media.removeEventListener('change',sync)}
  },[])
  useEffect(()=>{
    const el=dialog.current
    if(!el)return
    if(isOpen&&!el.open)el.showModal()
    if(!isOpen&&el.open)el.close()
    if(!isOpen)return
    const overflow=document.body.style.overflow;document.body.style.overflow='hidden'
    return()=>{document.body.style.overflow=overflow}
  },[isOpen])
  const toggle=()=>setPaused(value=>{try{localStorage.setItem('inzeum:community-paused',String(!value))}catch{}return !value})
  const open=(index:number,element:HTMLElement)=>{opener.current=galleryMode?element:(root.current?.querySelector<HTMLElement>('.community-wall-controls button')??element);setSelected(index)}
  const close=()=>{setSelected(null)}
  const step=(delta:number)=>setSelected(value=>value===null?null:(value+delta+photos.length)%photos.length)
  const cell=(index:number,duplicate=false)=>{
    const item=photos[index]
    return <a key={`${item.src}-${duplicate}`} href={`/images/community/${item.src}.webp`} className={`community-frame community-frame-${item.shape}`} tabIndex={galleryMode?0:-1}
      onClick={event=>{event.preventDefault();open(index,event.currentTarget)}} aria-label={`${item.caption} — 사진 크게 보기`}>
      <Image src={`/images/community/${item.src}.webp`} alt={item.alt} width={1600} height={1200} sizes="(max-width:767px) 300px, 460px" />
      <span>{item.caption}<Icon name="arrow-up-right" size={16}/></span>
    </a>
  }
  return <section id="community-wall" ref={root} className={`community-wall ${compact ? 'community-wall-compact' : ''}`} data-grid={galleryMode} data-playing={!paused&&visible&&tabVisible&&!isOpen} aria-label="수행공동체 사진 모음">
    <div className="community-wall-heading studio-shell"><div><p className="eyebrow">수행공동체</p><h2>{compact ? '수련은, 사람들 사이에서 이어집니다.' : <>고요한 순간들,<br />함께한 사람들.</>}</h2><p>콘서트와 리트릿, 일상의 수련에서 나눈 참가자들의 기록입니다.</p></div>
      <div className="community-wall-controls">{ready&&!still&&<button type="button" onClick={()=>setGrid(value=>!value)} aria-pressed={grid}>{grid?'흐르는 사진으로 보기':`사진 ${photos.length}장 모아보기`}</button>}{!galleryMode&&<button type="button" onClick={toggle} aria-pressed={paused} aria-label={paused?'사진 흐름 재생':'사진 흐름 멈추기'}><Icon name={paused?'play':'pause'} size={20}/><span>{paused?'재생':'멈춤'}</span></button>}</div>
    </div>
    {galleryMode?<div className="community-wall-grid studio-shell">{photos.map((_,index)=>cell(index))}</div>:<div className="community-ribbons" aria-hidden="true" onPointerDown={event=>{if(event.pointerType==='touch')setPaused(true)}}>
      {[0,1].map(row=><div key={row} className={`community-ribbon community-ribbon-${row}`}><div className="community-track">{[false,true].map(duplicate=><div className="community-group" key={String(duplicate)}>{photos.slice(row*7,row*7+7).map((_,i)=>cell(row*7+i,duplicate))}</div>)}</div></div>)}
    </div>}
    <p className="community-wall-note studio-shell">사진을 누르면 전체 모습과 원문 기록을 볼 수 있습니다.</p>
    <dialog ref={dialog} className="community-lightbox" aria-label="수행공동체 사진 보기" onCancel={close} onClose={()=>{close();opener.current?.focus({preventScroll:true})}}
      onClick={event=>{if(event.target===event.currentTarget)close()}}
      onKeyDown={event=>{
        if(event.key==='ArrowRight'){event.preventDefault();step(1)}
        if(event.key==='ArrowLeft'){event.preventDefault();step(-1)}
        if(event.key==='Tab'){
          const items=Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href],button'))
          const index=items.indexOf(document.activeElement as HTMLElement);event.preventDefault();items[(index+(event.shiftKey?-1:1)+items.length)%items.length]?.focus()
        }
      }}>
      {selected!==null&&<div className="community-lightbox-inner"><div className="community-lightbox-top"><span>{selected+1} / {photos.length}</span><button type="button" autoFocus onClick={close} aria-label="사진 닫기"><Icon name="close" size={24}/></button></div>
        {/* Native image preserves full framing at any aspect ratio. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/community/${photos[selected].src}.webp`} alt={photos[selected].alt}/>
        <div className="community-lightbox-bottom"><div aria-live="polite"><h3>{photos[selected].caption}</h3><a href={`https://cafe.naver.com/joohankimlab/${photos[selected].source}`} target="_blank" rel="noopener noreferrer">커뮤니티 원문 기록 <Icon name="arrow-up-right" size={16}/></a></div><div className="community-lightbox-arrows"><button type="button" onClick={()=>step(-1)} aria-label="이전 사진"><Icon name="arrow-right" className="rotate-180" size={24}/></button><button type="button" onClick={()=>step(1)} aria-label="다음 사진"><Icon name="arrow-right" size={24}/></button></div></div>
      </div>}
    </dialog>
  </section>
}
