'use cli '
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Daniel Puig Gerarde',
    default:
      'Daniel Puig Gerarde - Sr. Software Engineer & Dad',
  },
  description:
    "Welcome to my personal space on the web—a blend of tech passion, hands-on engineering, and family values. I'm a Senior Software Engineer and proud dad based in sunny South Florida, fluent in both Spanish and English. With a deep passion for technology, I specialize in Go programming and DevOps, constantly exploring innovative solutions to simplify complex challenges. Here, you'll find insights on cutting-edge tech trends, practical programming tips, and a glimpse into my journey as both an engineer and a parent. Join me as I navigate the ever-evolving world of technology, share my professional experiences, and celebrate life’s beautiful blend of work and family.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
