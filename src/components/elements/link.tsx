import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import NextLink from 'next/link'

export function Link({
  href,
  className,
  ...props
}: {
  href: string
} & Omit<ComponentProps<typeof NextLink>, 'href'>) {
  return (
    <NextLink
      href={href}
      className={clsx('inline-flex items-center gap-2 text-sm/7 font-medium text-olive-950 dark:text-white', className)}
      {...props}
    />
  )
}
