import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [

  {
    name: 'DBaaS Operator',
    description:
      'A Kubernetes operator written in Go for managed database lifecycle: provisioning, scaling, backups, and upgrades for PostgreSQL clusters with automated Day-2 operations.',
  },
  {
    name: 'Edge-AI Inference Stack',
    description:
      'On-premise LLM serving infrastructure using LocalAI and vLLM. OpenAI-compatible endpoints running on local GPU hardware for private model fine-tuning and inference.',
  },
  {
    name: 'eBPF Network Observability',
    description:
      'Cilium-based zero-trust networking with eBPF-powered observability. Identity-based security policies with deep packet visibility via Hubble dashboards.',
  },
  {
    name: 'DevSecOps Pipeline',
    description:
      'Automated CI/CD security pipeline with OpenBao for secrets management, container image signing via Sigstore, and runtime policy enforcement with OPA/Gatekeeper.',
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Open-source tools and platforms I have built for sovereign cloud, edge-AI, and DevSecOps.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I have built to make sovereign infrastructure accessible."
      intro="These are projects I have worked on to help organizations own their infrastructure, run AI on-premise, and secure their platforms with open-source tools."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 dark:bg-teal-400/10">
              <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                {project.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
              </span>
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
