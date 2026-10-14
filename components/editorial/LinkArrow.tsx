import { ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'

/** A fixed-size icon avoids platform-specific text/emoji arrow rendering. */
export default function LinkArrow({ direction = 'diagonal' }: { direction?: 'diagonal' | 'right' }) {
  const Icon = direction === 'right' ? ArrowRightIcon : ArrowTopRightIcon
  return <Icon className="link-arrow" width={18} height={18} aria-hidden="true" focusable="false" />
}
