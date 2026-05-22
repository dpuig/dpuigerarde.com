import { type Metadata } from 'next'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Subheading } from '@/components/elements/subheading'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Text } from '@/components/elements/text'
import { ButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'

export const metadata: Metadata = {
  title: 'Services | Daniel Puig Gerarde',
  description:
    'Highly specialized consulting in Cloud Native Infrastructure, Custom Kubernetes Operators, Private LLM Serving, and Agentic Routing Platforms.',
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
    <div className="group relative flex flex-col items-start gap-4 rounded-2xl bg-olive-950/[0.02] border border-olive-950/10 p-6 dark:bg-white/[0.02] dark:border-white/10 hover:border-olive-950 dark:hover:border-white transition-all duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-olive-950 dark:text-white leading-snug">
        {title}
      </h3>
      <Text className="text-sm/6 text-justify">{description}</Text>
      <div className="mt-2 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full bg-olive-950/5 dark:bg-white/5 border border-olive-950/10 dark:border-white/10 px-3 py-1 text-xs font-medium text-olive-800 dark:text-olive-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className="py-16 sm:py-24">
      {/* Intro Header */}
      <Container className="mb-20 sm:mb-28">
        <div className="max-w-3xl flex flex-col items-start gap-4">
          <Eyebrow className="tracking-wider uppercase">Specialized Consulting & Advisory</Eyebrow>
          <Heading className="leading-[1.1] sm:leading-[1.05]">
            Enterprise Kubernetes Platforms & Private AI Orchestration.
          </Heading>
          <Text size="lg" className="mt-4 max-w-2xl text-justify">
            I collaborate with engineering teams to extend the Kubernetes control plane, run stable clustered databases, and build self hosted LLM serving infrastructures. By designing declarative, clear platforms, I help you secure complete control over your systems and cloud spend.
          </Text>
        </div>
      </Container>

      {/* Services Breakdown */}
      <Container className="flex flex-col gap-24">
        {/* Pillar 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-olive-950/10 dark:border-white/10 pt-16">
          <div className="lg:col-span-1 flex flex-col gap-3">
            <Eyebrow className="uppercase tracking-wider font-mono text-xs">Pillar 01</Eyebrow>
            <Subheading className="text-3xl font-bold font-display text-olive-950 dark:text-white leading-tight">
              Kubernetes Platforms & Custom Operators
            </Subheading>
            <Text className="text-sm/6 max-w-sm text-justify">
              Extend the core Kubernetes control plane and build custom system integrations at the container runtime, storage, and networking layers.
            </Text>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-8">
            <ServiceOffering
              title="Custom Operator & Controller Engineering (Go)"
              description="I design and write custom Kubernetes Operators and Custom Resource Definitions (CRDs) in Go using KubeBuilder and Controller Runtime. These controllers automate complex application lifecycles, manage backups and scaling, and synchronize external cloud resources directly through the native Kubernetes API."
              technologies={['Go (Golang)', 'KubeBuilder', 'Controller Runtime', 'CRD Design', 'Operator SDK']}
            />
            <ServiceOffering
              title="Low Level System Interfaces (CRI, CNI, CSI)"
              description="I build custom platform integrations at the container runtime, storage, and networking layers. This includes implementing Cilium eBPF for secure network routing and observability, deploying custom container runtimes, and configuring CSI storage drivers on bare metal and public cloud."
              technologies={['Cilium eBPF', 'CRI (Containerd)', 'CSI Storage Drivers', 'Talos Linux', 'API Extensions']}
            />
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-olive-950/10 dark:border-white/10 pt-16">
          <div className="lg:col-span-1 flex flex-col gap-3">
            <Eyebrow className="uppercase tracking-wider font-mono text-xs">Pillar 02</Eyebrow>
            <Subheading className="text-3xl font-bold font-display text-olive-950 dark:text-white leading-tight">
              Self Hosted AI Infrastructure & LLM Serving
            </Subheading>
            <Text className="text-sm/6 max-w-sm text-justify">
              Deploy secure, private AI runtimes, optimize hardware configurations, and run large language models on your own compute clusters.
            </Text>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-8">
            <ServiceOffering
              title="Optimized LLM Inference Orchestration"
              description="I build low latency model serving infrastructures using dynamic runtimes. This includes setting up vLLM and TGI (Text Generation Inference) optimized for NVIDIA GPU clusters, as well as configuring llama.cpp for cost-efficient local execution on Apple Silicon."
              technologies={['vLLM', 'llama.cpp', 'TGI', 'NVIDIA GPUs', 'Apple Silicon', 'TensorRT LLM']}
            />
            <ServiceOffering
              title="Private AI Resource Management with LLMKube"
              description="Manage your private LLMs using the LLMKube operator. I automate model weight caching, configure multi tenant GPU sharing schedules, and implement autoscaling policies triggered by real time token throughput metrics."
              technologies={['LLMKube Operator', 'Autoscaling', 'Weight Caching', 'GPU Scheduling', 'Multi Tenancy']}
            />
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-olive-950/10 dark:border-white/10 pt-16">
          <div className="lg:col-span-1 flex flex-col gap-3">
            <Eyebrow className="uppercase tracking-wider font-mono text-xs">Pillar 03</Eyebrow>
            <Subheading className="text-3xl font-bold font-display text-olive-950 dark:text-white leading-tight">
              Stateful Kubernetes & AI Agent Gateways
            </Subheading>
            <Text className="text-sm/6 max-w-sm text-justify">
              Run databases declaratively on your own infrastructure, and connect agent networks using fast, secure routing layers.
            </Text>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-8">
            <ServiceOffering
              title="Cloud Native Database Cluster Orchestration"
              description="I deploy stable transactional databases and messaging engines on Kubernetes. Using specialized operators like CloudNativePG, Vitess, and Strimzi, I automate streaming replication, point in time recovery (PITR), and zero downtime rolling upgrades."
              technologies={['CloudNativePG', 'Vitess', 'Strimzi Kafka', 'StatefulSets', 'PITR Backups']}
            />
            <ServiceOffering
              title="High Performance Agent Gateways & MCP Networks"
              description="I configure API proxy layers using the agentgateway architecture. This handles secure traffic routing across diverse Model Context Protocol (MCP) servers, implements token caching to reduce costs, and manages credentials safely."
              technologies={['agentgateway', 'Model Context Protocol (MCP)', 'LLM Routing', 'Token Caching', 'Agent Mesh']}
            />
          </div>
        </div>

        {/* Contact/CTA section */}
        <div className="mt-16 rounded-2xl border border-olive-950/10 bg-olive-950/[0.02] p-8 md:p-12 dark:border-white/10 dark:bg-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <Subheading className="text-2xl md:text-3xl font-bold text-olive-950 dark:text-white mb-3">
              Ready to build high performance infrastructure?
            </Subheading>
            <Text className="text-sm/6 text-justify">
              Whether you need to extend Kubernetes via custom Go Operators, deploy HA transactional databases, or provision private AI serving clusters, let&apos;s build a stable, scalable foundation.
            </Text>
          </div>
          <ButtonLink href="https://x.com/dpuiger" target="_blank" size="lg" className="w-full md:w-auto justify-center group shrink-0">
            Let&apos;s Collaborate <ArrowNarrowRightIcon className="group-hover:translate-x-1 transition-transform duration-200" />
          </ButtonLink>
        </div>
      </Container>
    </div>
  )
}
