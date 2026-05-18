import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ServiceSection({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
	return (
		<Section {...props}>
			<div className="space-y-16">{children}</div>
		</Section>
	)
}

function ServiceOffering({
	title,
	description,
	technologies,
}: {
	title: string
	description: string
	technologies: string[]
}) {
	return (
		<Card as="article">
			<Card.Title as="h3">
				{title}
			</Card.Title>
			<Card.Description>{description}</Card.Description>
			<p className="relative z-10 mt-4 flex flex-wrap gap-2">
				{technologies.map((tech) => (
					<span
						key={tech}
						className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600 dark:bg-teal-400/10 dark:text-teal-400"
					>
						{tech}
					</span>
				))}
			</p>
		</Card>
	)
}

export const metadata: Metadata = {
	title: 'Services',
	description:
		'Autonomous SRE agents, MLOps pipeline orchestration, and DevOps AI integration services.',
}

export default function Services() {
	return (
		<SimpleLayout
			title="Services to automate your infrastructure with AI."
			intro="I work with engineering organizations that want to transition from manual operations to intelligent, agent-driven workflows in DevOps, MLOps, and SRE. Here's how I can help."
		>
			<div className="space-y-20">
				<ServiceSection title="Automated Operations (SRE & DevOps)">
					<ServiceOffering
						title="SRE Agent Development"
						description="Build autonomous Copilots that sit alongside your Site Reliability Engineers. I design agents capable of ingesting PagerDuty alerts, querying Datadog/Prometheus metrics, analyzing server logs, and proposing (or safely executing) remediation steps to resolve incidents faster."
						technologies={['Amazon Bedrock AgentCore', 'Gemini Enterprise', 'Datadog API', 'LangChain', 'Python']}
					/>
					<ServiceOffering
						title="DevOps Agent Integration"
						description="Connect Large Language Models to your CI/CD pipelines and cloud infrastructure APIs. I create intelligent workflows that can review code for operational risks, auto-generate Terraform modules based on architecture diagrams, and orchestrate complex deployment sequences."
						technologies={['AWS/GCP APIs', 'GitHub Actions', 'Terraform', 'Go', 'LlamaIndex']}
					/>
				</ServiceSection>
				<ServiceSection title="Machine Learning Operations (MLOps)">
					<ServiceOffering
						title="MLOps Pipeline Orchestration"
						description="Automate the complete machine learning lifecycle with agentic workflows. I design systems where agents monitor production model drift, automatically trigger retraining pipelines in MLflow, evaluate new model performance, and orchestrate progressive rollouts using ArgoCD."
						technologies={['MLflow', 'ArgoCD', 'Kubernetes', 'Bedrock', 'Vector DBs']}
					/>
				</ServiceSection>
			</div>
		</SimpleLayout>
	)
}
