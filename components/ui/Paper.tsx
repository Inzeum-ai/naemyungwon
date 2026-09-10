import type { ReactNode } from 'react'

// The reading body: the same roles remapped onto 한지 (tokens.css .ground-hanji). It begins where
// the ink band ends and hands back to ink at the footer, so every page starts and closes in ink
// and reads on paper. Long documents (legal) skip the band and set the whole page on 한지.
export default function Paper({ children }: { children: ReactNode }) {
  return (
    <div data-paper="" className="ground-hanji" data-ground="hanji">
      {children}
    </div>
  )
}
