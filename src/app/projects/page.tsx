import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Text } from '@/components/elements/text'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'

interface Project {
  name: string
  badge: string
  description: string
  type: string
  href: string
  external?: boolean
  cta: string
}

const projects: Project[] = [
  {
    name: 'CloudDB: Self Hosted DBaaS',
    badge: 'CDB',
    description:
      'A self hosted DBaaS control plane on Kubernetes. It wraps the Zalando Postgres Operator, exposing a Go REST API and a React frontend. It automates cluster provisioning, day 2 scaling, S3 backups, and handles major version upgrades using a 5 check preflight verification wizard.',
    type: 'Kubernetes DBaaS',
    href: '/articles/clouddb',
    cta: 'Read Technical Case Study',
  },
  {
    name: 'LLMKube Platform',
    badge: 'LMK',
    description:
      'Private LLM inference infrastructure setup using the LLMKube operator, vLLM, and llama.cpp. It handles weight caching, resource scheduling, and autoscaling for teams running models on private clouds.',
    type: 'Private AI Inference',
    href: 'https://llmkube.com/',
    external: true,
    cta: 'Visit LLMKube.com',
  },
  {
    name: 'AgentGateway Platform',
    badge: 'AGW',
    description:
      'An API proxy layer built to route Model Context Protocol (MCP) traffic, manage remote and local model routing, and authenticate tool calls for autonomous agent meshes.',
    type: 'AI Agent Networking',
    href: 'https://agentgateway.dev/',
    external: true,
    cta: 'Visit AgentGateway.dev',
  },
]

export const metadata: Metadata = {
  title: 'Projects | Daniel Puig Gerarde',
  description: 'Cloud native projects and open source infrastructure tools I have built and maintained.',
}

export default function Projects() {
  return (
    <div className="py-16 sm:py-24">
      {/* Intro Header */}
      <Container className="mb-20 sm:mb-28">
        <div className="max-w-3xl flex flex-col items-start gap-4">
          <Eyebrow className="tracking-wider uppercase">Reference Architectures & Open Source</Eyebrow>
          <Heading className="leading-[1.1] sm:leading-[1.05]">
            Enterprise Cloud & Kubernetes Platforms.
          </Heading>
          <Text size="lg" className="mt-4 max-w-2xl text-justify">
            These are reference architectures and open source systems I designed to run clustered databases, container networks, and private AI inference at scale.
          </Text>
        </div>
      </Container>

      {/* Projects Grid */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const CardContent = (
              <>
                <div className="flex items-center gap-4 w-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive-950 text-white dark:bg-white dark:text-olive-950 font-display font-bold text-sm tracking-wider">
                    {project.badge}
                  </div>
                  <h3 className="text-xl font-bold font-display text-olive-950 dark:text-white leading-snug">
                    {project.name}
                  </h3>
                </div>
                <Text className="text-sm/6 text-justify flex-1 mt-2">{project.description}</Text>
                <div className="mt-4 w-full border-t border-olive-950/10 pt-4 dark:border-white/10 flex justify-between items-center text-xs text-olive-500 dark:text-olive-400">
                  <span className="font-mono uppercase tracking-wider">{project.type}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-olive-950 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                    {project.cta} <ArrowNarrowRightIcon className="size-3.5" />
                  </span>
                </div>
              </>
            )

            const cardClasses = "group relative flex flex-col items-start gap-4 rounded-2xl bg-olive-950/[0.02] border border-olive-950/10 p-6 dark:bg-white/[0.02] dark:border-white/10 hover:border-olive-950 dark:hover:border-white transition-all duration-300 h-full"

            if (project.external) {
              return (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                  {CardContent}
                </a>
              )
            }

            return (
              <Link
                key={project.name}
                href={project.href}
                className={cardClasses}
              >
                {CardContent}
              </Link>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
