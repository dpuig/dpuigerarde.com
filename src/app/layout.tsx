'use cli '
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Daniel Puig Gerarde',
    default:
      'Daniel Puig Gerarde - Cloud & AI Infrastructure Architect',
  },
  description:
    'I architect sovereign cloud platforms, edge-AI inference stacks, and automated DevSecOps pipelines. Specializing in Kubernetes, Cluster API, Talos Linux, Cilium/eBPF, and on-prem AI deployment with LocalAI and vLLM.',
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
