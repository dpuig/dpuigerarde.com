import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'The tools, platforms, and technologies I use to build sovereign cloud and AI infrastructure.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="The tools I use to build sovereign infrastructure."
      intro="My toolkit for architecting sovereign cloud platforms, deploying edge-AI, and automating DevSecOps, from provisioning to observability."
    >
      <div className="space-y-20">
        <ToolsSection title="Infrastructure & Orchestration">
          <Tool title="Cluster API (CAPI)">
            Multi-cloud and on-prem Kubernetes provisioning written in Go.
            Declarative cluster lifecycle management without proprietary vendor APIs. The foundation of every sovereign platform I build.
          </Tool>
          <Tool title="Talos Linux">
            An immutable, security-hardened operating system designed for
            Kubernetes. API-managed with no SSH access, dramatically reducing
            the attack surface. My default OS for production clusters.
          </Tool>
          <Tool title="Kubernetes">
            CKA-compliant container orchestration. Standardized for portability
            across any environment, whether public cloud, private data center, or
            edge deployment.
          </Tool>
          <Tool title="Terraform / OpenTofu">
            Infrastructure as Code for provisioning the underlying compute,
            networking, and storage. I use OpenTofu for fully open-source
            deployments when vendor neutrality is critical.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Networking & Security">
          <Tool title="Cilium (eBPF)">
            eBPF-powered networking, observability, and security for
            Kubernetes. Identity-based policies, transparent encryption, and
            deep packet visibility via Hubble. Essential for zero-trust
            architectures and modern compliance requirements.
          </Tool>
          <Tool title="OpenBao">
            Open-source secrets management (forked from HashiCorp Vault).
            Dynamic secrets, encryption as a service, and PKI that ensures
            client keys are never stored in a foreign-owned SaaS.
          </Tool>
          <Tool title="Falco">
            Runtime security and threat detection for containers and
            Kubernetes. Real-time alerting on unexpected behavior, syscall
            monitoring, and audit logging.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI & Machine Learning">
          <Tool title="LocalAI">
            OpenAI-compatible API running entirely on local hardware.
            Supports LLMs, embeddings, and image generation without sending
            data to third-party services. Perfect for sovereign AI deployments.
          </Tool>
          <Tool title="vLLM">
            High-throughput LLM serving engine optimized for production
            inference. Continuous batching and PagedAttention for maximum
            GPU utilization on private infrastructure.
          </Tool>
          <Tool title="Ollama">
            Simple, developer-friendly local model runner. Great for
            prototyping and development before scaling to production
            inference with vLLM.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development & Productivity">
          <Tool title="Go">
            My primary language for infrastructure tooling: Kubernetes
            operators, CLI tools, platform APIs, and custom controllers.
            The standard library and concurrency model are unmatched
            for systems programming.
          </Tool>
          <Tool title="VS Code">
            My editor of choice with the Go extension, Kubernetes tools,
            and Copilot. The integrated terminal and debugger make it
            ideal for operator development.
          </Tool>
          <Tool title="iTerm2 + tmux">
            Terminal multiplexing for managing multiple clusters, SSH
            sessions, and development environments simultaneously.
          </Tool>
          <Tool title="Docker & Podman">
            Container runtimes for local development, CI/CD pipelines,
            and building OCI-compliant images for production deployment.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
