import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Text } from '@/components/elements/text'
import { XIcon } from '@/components/icons/social/x-icon'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { LinkedInIcon } from '@/components/icons/social/linkedin-icon'
import portraitImage from '@/images/portrait.jpg'

function SocialRowLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-3 text-sm font-medium text-olive-950 dark:text-white hover:text-olive-700 dark:hover:text-olive-400 transition-colors duration-200"
    >
      <Icon className="h-5 w-5 fill-olive-800 dark:fill-olive-400 group-hover:fill-olive-950 dark:group-hover:fill-white transition-colors duration-200" />
      <span>{children}</span>
    </a>
  )
}

export const metadata: Metadata = {
  title: 'About | Daniel Puig Gerarde',
  description:
    'I am Daniel Puig Gerarde, a Software Architect and Cloud/DevOps Consultant specializing in enterprise Kubernetes and cloud native systems.',
}

export default function About() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-start">
        {/* Profile Image & Contact Panel */}
        <div className="lg:order-last flex flex-col gap-8">
          <div className="relative max-w-sm mx-auto lg:max-w-none rounded-2xl border border-olive-950/10 p-2 bg-olive-950/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
            <Image
              src={portraitImage}
              alt="Daniel Puig Gerarde portrait"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-xl object-cover"
              priority
            />
          </div>

          <div className="rounded-2xl border border-olive-950/10 bg-olive-950/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02] flex flex-col gap-6">
            <Eyebrow className="uppercase tracking-wider">Connect with me</Eyebrow>
            <div className="flex flex-col gap-4">
              <SocialRowLink href="https://x.com/dpuiger" icon={XIcon}>
                Follow on X (Twitter)
              </SocialRowLink>
              <SocialRowLink href="https://github.com/dpuig" icon={GitHubIcon}>
                Follow on GitHub
              </SocialRowLink>
              <SocialRowLink href="https://www.linkedin.com/in/dpuigerarde/" icon={LinkedInIcon}>
                Connect on LinkedIn
              </SocialRowLink>
            </div>
            <div className="border-t border-olive-950/10 pt-6 dark:border-white/10">
              <p className="text-sm text-olive-700 dark:text-olive-400 leading-relaxed">
                Interested in working together? Send me a message on{' '}
                <a href="https://www.linkedin.com/in/dpuigerarde/" className="font-semibold text-olive-950 dark:text-white underline hover:text-olive-700 dark:hover:text-olive-400">
                  LinkedIn DM
                </a>{' '}
                or drop a line on{' '}
                <a href="https://x.com/dpuiger" className="font-semibold text-olive-950 dark:text-white underline hover:text-olive-700 dark:hover:text-olive-400">
                  X
                </a>. Let&apos;s architect something great.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Biography */}
        <div className="flex flex-col gap-6">
          <Eyebrow className="uppercase tracking-wider">The Person Behind the Platforms</Eyebrow>
          <Heading className="text-4xl sm:text-5xl font-bold text-olive-950 dark:text-white tracking-tight">
            About me.
          </Heading>
          
          <div className="mt-4 flex flex-col gap-6 text-justify">
            <Text size="lg" className="leading-relaxed">
              I run an independent consulting practice focused on building secure, scalable container platforms and automating cloud infrastructure. My work centers on bringing clarity and reliability to complex environments. Rather than supplying generic DevOps templates, I collaborate closely with engineering teams to solve real operational bottlenecks—from database scaling issues to specialized compute configurations.
            </Text>
            
            <Text size="md" className="leading-relaxed">
              My core expertise is in Kubernetes and its cloud native ecosystem. Whether writing custom Go controllers to automate applications or configuring low level runtime integrations, I design platform foundations that enable developers to ship code safely. The goal is to build self service pipelines that work without requiring direct developer cluster access or manual YAML tweaking.
            </Text>
            
            <Text size="md" className="leading-relaxed">
              I treat infrastructure as software. That means everything belongs in git, managed through declarative GitOps loops. I build delivery pipelines using ArgoCD and Crossplane to automate provisioning and eliminate the usual friction between writing code and deploying resources. This keeps deployments repeatable, fully versioned, and easy to audit.
            </Text>
            
            <Text size="md" className="leading-relaxed">
              Reliable systems require proactive security and deep observability. I use Cilium eBPF to implement identity based network policies, and configure Prometheus and Grafana for precise system telemetry. I believe that security shouldn&apos;t be an obstacle; it should be standard, transparent, and embedded directly into the platform defaults.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  )
}
