import Link from 'next/link'
import type { ReactNode } from 'react'
import Icon from './Icon'
export default function TextLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={`text-link ${className}`}>{children}<Icon name="arrow-right" size={20} /></Link>
}
