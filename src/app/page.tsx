import Link from 'next/link'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Subheading } from '@/components/elements/subheading'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Text } from '@/components/elements/text'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { LinkedInIcon } from '@/components/icons/social/linkedin-icon'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function SocialIconLink({
  href,
  name,
  children,
}: {
  href: string
  name: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={name}
      className="inline-flex items-center justify-center p-2 rounded-full text-olive-800 hover:bg-olive-950/10 dark:text-olive-400 dark:hover:bg-white/10 transition-colors duration-200 *:size-6"
    >
      {children}
    </a>
  )
}

function ArticleCard({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="group relative flex flex-col items-start gap-3 rounded-2xl bg-olive-950/[0.02] border border-olive-950/10 p-6 dark:bg-white/[0.02] dark:border-white/10 hover:border-olive-950 dark:hover:border-white transition-all duration-300">
      <Eyebrow>{formatDate(article.date)}</Eyebrow>
      <Subheading className="text-xl sm:text-2xl font-semibold text-olive-950 dark:text-white leading-snug">
        <Link href={`/articles/${article.slug}`} className="focus:outline-hidden">
          <span className="absolute inset-0 rounded-2xl" />
          {article.title}
        </Link>
      </Subheading>
      <Text className="line-clamp-3 text-sm/6">{article.description}</Text>
      <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-olive-950 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
        Read article <ArrowNarrowRightIcon className="size-4" />
      </div>
    </article>
  )
}

function DirectContact() {
  return (
    <div className="rounded-2xl border border-olive-950/10 bg-olive-950/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
      <Eyebrow className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="size-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.598.598 0 0 1-.474-.065.598.598 0 0 1-.251-.497v-.532c0-1.012.33-1.947.882-2.69C3.125 15.642 3 13.893 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
        <span>Direct Contact</span>
      </Eyebrow>
      <Subheading className="text-xl sm:text-2xl mt-3 mb-2 font-bold text-olive-950 dark:text-white">
        Let&apos;s collaborate
      </Subheading>
      <Text className="text-sm/6 mb-6">
        Reach out on LinkedIn, X, or GitHub to discuss Software Architecture, Cloud Platform Engineering, or MLOps solutions.
      </Text>
      <ButtonLink href="https://x.com/dpuiger" target="_blank" className="w-full justify-center group">
        Send a Message <ArrowNarrowRightIcon className="group-hover:translate-x-1 transition-transform duration-200" />
      </ButtonLink>
    </div>
  )
}

interface StackItem {
  layer: string
  component: string
  description: string
  badge: string
}

function TechStack() {
  const stack: Array<StackItem> = [
    {
      layer: 'Orchestration',
      component: 'Kubernetes Platform',
      description: 'Fleet management of Talos immutable clusters across bare metal and public clouds.',
      badge: 'K8S',
    },
    {
      layer: 'Extensions',
      component: 'Custom Operators (Go)',
      description: 'Writing custom controllers in Go to automate application lifecycles and resources.',
      badge: 'GO',
    },
    {
      layer: 'Low Level Interfaces',
      component: 'CRI, CNI, & CSI',
      description: 'System integrations directly into container runtime, networking, and storage layers.',
      badge: 'INT',
    },
    {
      layer: 'AI Orchestration',
      component: 'Agentic Development',
      description: 'Orchestrating autonomous agent environments, dynamic tool routing, and context networks.',
      badge: 'AGN',
    },
  ]

  return (
    <div className="rounded-2xl border border-olive-950/10 bg-olive-950/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
      <Eyebrow className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="size-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v3.75a3 3 0 0 1-3 3M5.25 14.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5ZM18.75 14.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z" />
        </svg>
        <span>Infrastructure Platform</span>
      </Eyebrow>
      <Subheading className="text-xl sm:text-2xl mt-3 mb-4 font-bold text-olive-950 dark:text-white">
        Technology Stack
      </Subheading>
      <ol className="mt-6 space-y-6">
        {stack.map((item, index) => (
          <li key={index} className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive-950 text-white dark:bg-white dark:text-olive-950 font-display font-bold text-xs tracking-wider">
              {item.badge}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-olive-950 dark:text-white leading-tight">
                {item.component}
              </div>
              <div className="text-xs text-olive-600 dark:text-olive-400 mt-1 leading-relaxed">
                {item.description}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-olive-400 dark:text-olive-500 mt-1">
                {item.layer}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <ButtonLink href="/services" className="mt-8 w-full justify-center">
        Explore Services
      </ButtonLink>
    </div>
  )
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <Container>
        <div className="max-w-3xl flex flex-col items-start gap-4">
          <Eyebrow className="tracking-wider uppercase">
            Platform Engineer & Infrastructure Architect
          </Eyebrow>
          <Heading className="leading-[1.1] sm:leading-[1.05]">
            Architecting Resilient Platforms for Scale.
          </Heading>
          <Text size="lg" className="mt-4 max-w-2xl text-justify">
            I help growing engineering teams build stable infrastructure, automate cloud platforms, and run containerized workloads at scale. I specialize in the <strong>Kubernetes control plane</strong>—writing custom operators in Go, setting up GPU clusters for LLM inference, and tuning MLOps pipelines. If your systems are lagging or deployments feel like high stakes gambles, let&apos;s build a stable foundation.
          </Text>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <ButtonLink href="/services" size="lg">
              View Consulting Services
            </ButtonLink>
            <PlainButtonLink href="/about" size="lg" className="group">
              Read my profile <ArrowNarrowRightIcon className="group-hover:translate-x-1 transition-transform duration-200" />
            </PlainButtonLink>
          </div>
          <div className="mt-6 flex gap-4">
            <SocialIconLink href="https://x.com/dpuiger" name="Follow on X">
              <XIcon />
            </SocialIconLink>
            <SocialIconLink href="https://github.com/dpuig" name="Follow on GitHub">
              <GitHubIcon />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/dpuigerarde/" name="Follow on LinkedIn">
              <LinkedInIcon />
            </SocialIconLink>
          </div>
        </div>
      </Container>

      {/* Main Grid */}
      <Container className="mt-24 sm:mt-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Articles list (takes 2 cols on lg screens) */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <Eyebrow className="border-b border-olive-950/10 pb-4 dark:border-white/10">
              Recent Engineering Deep Dives
            </Eyebrow>
            <div className="flex flex-col gap-10">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            {articles.length > 0 && (
              <div className="mt-4">
                <PlainButtonLink href="/articles" className="group">
                  Read more articles <ArrowNarrowRightIcon className="group-hover:translate-x-1 transition-transform duration-200" />
                </PlainButtonLink>
              </div>
            )}
          </div>

          {/* Sidebar (takes 1 col on lg screens) */}
          <div className="flex flex-col gap-10 lg:pl-6 xl:pl-10">
            <DirectContact />
            <TechStack />
          </div>
        </div>
      </Container>
    </div>
  )
}
