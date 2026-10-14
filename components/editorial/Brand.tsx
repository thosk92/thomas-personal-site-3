import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ href = '/', compact = false }: { href?: string; compact?: boolean }) {
  return <Link className={`rams-brand${compact ? ' rams-brand-compact' : ''}`} href={href} aria-label="Thomas Zanelli — Home">
    <Image src="/images/brand/tz-rams.svg" alt="" width={755} height={547} sizes="48px" priority={!compact} />
    {compact ? null : <span>Thomas Zanelli</span>}
  </Link>
}
