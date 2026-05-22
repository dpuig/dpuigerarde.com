import { type Metadata } from 'next'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Subheading } from '@/components/elements/subheading'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Text } from '@/components/elements/text'

export const metadata: Metadata = {
  title: 'Uses | Daniel Puig Gerarde',
  description: 'The tools, platforms, and technologies I use to architect enterprise cloud and Kubernetes systems.',
}

interface ToolItem {
  title: string
  description: string
}

interface ToolGroup {
  category: string
  number: string
  items: ToolItem[]
}

const toolGroups: ToolGroup[] = [
  {
    category: 'Infrastructure & Orchestration',
    number: '01',
    items: [
      {
        title: 'Kubernetes',
        description:
          'The standard framework for container orchestration. It allows me to build stable, predictable platforms across private hardware and public cloud providers alike.',
      },
      {
        title: 'Terraform',
        description:
          'Declarative infrastructure provisioning. I use it to manage foundational cloud resources, networking tables, and base machines before the Kubernetes control plane takes over.',
      },
      {
        title: 'Cluster API (CAPI)',
        description:
          'Kubernetes provisioning using Kubernetes itself. By writing Go configurations, I manage the lifecycle of physical and virtual clusters using declarative GitOps workflows.',
      },
    ],
  },
  {
    category: 'GitOps, Observability & Storage',
    number: '02',
    items: [
      {
        title: 'FluxCD',
        description:
          'GitOps delivery engine for Kubernetes. It synchronizes cluster state directly with git sources, reconciling changes automatically without human intervention or insecure access credentials.',
      },
      {
        title: 'Prometheus & Grafana',
        description:
          'Telemetry collection and system visibility dashboards. These tools provide real time insights into container resource patterns, request metrics, and hardware health.',
      },
      {
        title: 'Rook / Ceph',
        description:
          'Software defined storage orchestrator. It manages distributed block devices, shared file systems, and object storage dynamically, eliminating proprietary vendor storage lock.',
      },
    ],
  },
  {
    category: 'Development & Productivity',
    number: '03',
    items: [
      {
        title: 'Go & Python',
        description:
          'My primary languages for backend and agent development. I use Go for high performance operators and low level systems work, and Python for machine learning workflows and scripting.',
      },
      {
        title: 'Amazon Bedrock AgentCore',
        description:
          'The core orchestration framework for deploying secure, production ready AI agents that connect proprietary foundation models to actual enterprise backend APIs.',
      },
      {
        title: 'AI Agent Frameworks',
        description:
          'Dynamic execution libraries used to design multi agent pipelines, tool use routines, and autonomous planning workflows that operate within secure container boundaries.',
      },
    ],
  },
]

export default function Uses() {
  return (
    <div className="py-16 sm:py-24">
      {/* Intro Header */}
      <Container className="mb-20 sm:mb-28">
        <div className="max-w-3xl flex flex-col items-start gap-4">
          <Eyebrow className="tracking-wider uppercase">My Tech & Gear Stack</Eyebrow>
          <Heading className="leading-[1.1] sm:leading-[1.05]">
            The Tools I Use to Build Scale Ready Platforms.
          </Heading>
          <Text size="lg" className="mt-4 max-w-2xl text-justify">
            A list of tools, platforms, and hardware I rely on to build and run stable container environments and AI infrastructure.
          </Text>
        </div>
      </Container>

      {/* Tools Breakdown Grid */}
      <Container className="flex flex-col gap-24">
        {toolGroups.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-olive-950/10 dark:border-white/10 pt-16"
          >
            {/* Sidebar title */}
            <div className="lg:col-span-1 flex flex-col gap-3">
              <Eyebrow className="uppercase tracking-wider font-mono text-xs">
                Group {group.number}
              </Eyebrow>
              <Subheading className="text-3xl font-bold font-display text-olive-950 dark:text-white leading-tight">
                {group.category}
              </Subheading>
            </div>

            {/* Content Stack */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {group.items.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 group">
                  <h3 className="text-xl font-bold text-olive-950 dark:text-white group-hover:text-olive-700 dark:group-hover:text-olive-300 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <Text className="text-sm/6 text-justify">{item.description}</Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}
