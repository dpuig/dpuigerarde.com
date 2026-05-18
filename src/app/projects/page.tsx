import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [

  {
    name: 'SRE Copilot',
    description:
      'An autonomous SRE agent that ingests PagerDuty alerts, queries Datadog metrics, analyzes Kubernetes logs, and executes safe remediation scripts using Amazon Bedrock AgentCore.',
  },
  {
    name: 'MLOps Deployment Agent',
    description:
      'A specialized agent orchestrating the MLflow to ArgoCD pipeline. Automatically evaluates model drift metrics, triggers retraining, and manages canary deployments for new models.',
  },
  {
    name: 'Cloud Infra Orchestrator',
    description:
      'A Gemini Enterprise-powered agent that translates natural language requests and architecture diagrams into validated Terraform modules, integrating with AWS and GCP APIs.',
  },
  {
    name: 'CI/CD Security Reviewer',
    description:
      'An agent integrated into GitHub Actions that performs automated semantic security reviews of infrastructure-as-code changes before they are merged.',
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Agentic solutions and Copilots I have built for SRE, MLOps, and DevOps workflows.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Agentic systems I've built to automate platform engineering."
      intro="These are projects I have worked on to help organizations transition to AI-driven operations in DevOps, SRE, and machine learning lifecycles."
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
