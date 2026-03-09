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
		'Sovereign cloud architecture, edge-AI deployment, DevSecOps automation, and Kubernetes platform engineering services.',
}

export default function Services() {
	return (
		<SimpleLayout
			title="Services I offer to help you take back control."
			intro="I work with organizations that need to own their infrastructure, secure their data, and deploy AI on their own terms. Here's how I can help."
		>
			<div className="space-y-20">
				<ServiceSection title="Cloud & Infrastructure">
					<ServiceOffering
						title="Sovereign Cloud Architecture & Migration"
						description="Design and build private, sovereign cloud platforms that keep your data under your control. I architect multi-cloud and on-prem Kubernetes clusters using Cluster API and Talos Linux: immutable, API-managed, and hardened by default. Whether you are migrating off a public cloud or building from scratch, I deliver infrastructure that meets data residency and regulatory compliance requirements."
						technologies={['Cluster API (CAPI)', 'Talos Linux', 'Kubernetes', 'Go', 'Terraform']}
					/>
					<ServiceOffering
						title="Kubernetes Platform Engineering"
						description="Build internal developer platforms on CKA-compliant Kubernetes that let your teams self-service infrastructure. From custom operators for database lifecycle management to GitOps-driven deployment workflows, I create platforms that reduce friction and accelerate delivery without sacrificing governance or security."
						technologies={['Kubernetes', 'Operator SDK', 'Go', 'ArgoCD', 'Helm', 'GitOps']}
					/>
				</ServiceSection>
				<ServiceSection title="AI & Security">
					<ServiceOffering
						title="Edge-AI & On-Prem Inference Deployment"
						description="Deploy large language models and AI workloads on your own GPU hardware. I design the full inference stack using LocalAI and vLLM, covering GPU provisioning, model orchestration, and OpenAI-compatible API endpoints. Your data stays in your data center, and your models are fine-tuned on proprietary secrets without sending a single token to a third party."
						technologies={['LocalAI', 'vLLM', 'NVIDIA GPU', 'Kubernetes', 'Ollama']}
					/>
					<ServiceOffering
						title="DevSecOps 2.0: AI-Driven Security & Governance"
						description="Automate security from day one with AI-driven patching, policy enforcement, and continuous compliance. I implement zero-trust networking with Cilium and eBPF for deep visibility and identity-based security, paired with OpenBao for sovereign secrets management. Your keys never leave your perimeter, and every deployment is scanned, signed, and auditable."
						technologies={['Cilium (eBPF)', 'OpenBao', 'Falco', 'OPA/Gatekeeper', 'Sigstore']}
					/>
				</ServiceSection>
			</div>
		</SimpleLayout>
	)
}
