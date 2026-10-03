import type { ComponentProps } from 'react'

type Props = ComponentProps<'a'>

export function JoinButton({ className = '', ...props }: Props) {
  return (
    <a
      href="#join"
      className={`flex h-14 items-center justify-center overflow-clip rounded-full bg-brand-primary p-4 text-center text-heading-20-sb whitespace-nowrap text-brand-on-primary transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${className}`}
      {...props}
    >
      지금 바로 참여하기
    </a>
  )
}
