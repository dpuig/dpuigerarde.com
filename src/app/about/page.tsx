import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            About me.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 text-justify">
            <p>
            I have a deep passion for building robust software solutions, and Go is my language of choice. Its simplicity, built-in concurrency features, and powerful standard library provide an ideal foundation for creating fast, efficient, and reliable applications. Through both personal and professional projects, I’ve honed my expertise in Go’s ecosystem, exploring everything from microservices architecture to advanced testing methodologies. I’m driven by my love for continuous learning, which keeps me at the forefront of innovative best practices and emerging Go tools. There’s nothing quite like the thrill of discovering a new technique or library that streamlines development and delivers greater value to users.
            </p>
            <p>
            In today’s technology landscape, scalability and flexibility are paramount. That’s why I’ve invested significant time mastering Kubernetes and various cloud platforms such as AWS, GCP, and Azure. My fascination with container orchestration stems from seeing how it empowers teams to manage complex systems with confidence and agility. I continually experiment with new cloud services, diving into their documentation and hands-on labs to broaden my knowledge and refine deployment processes. This commitment to staying current ensures I can leverage the full power of containerized applications and cloud-native architectures for high availability and seamless performance.
            </p>
            <p>
            Automating the software delivery process is one of the most rewarding challenges I’ve embraced. I enjoy designing CI/CD pipelines that enable developers to release new features rapidly while maintaining high-quality standards. From configuring automated tests and code quality checks to implementing secure deployment workflows, I take pride in building pipelines that minimize friction and accelerate innovation. I believe that continuous integration and continuous delivery aren’t just tools; they represent a mindset of constant improvement. By adopting an iterative approach, I can quickly adapt to feedback, maintain a stable codebase, and deliver reliable software solutions that delight users.
            </p>
            <p>
            Security is at the heart of every project I tackle, as I recognize the enormous responsibility of protecting data and maintaining trust. My enthusiasm for secure coding practices, threat modeling, and vulnerability analysis comes from a desire to build systems that stand the test of time. I proactively stay informed about the latest threats and defenses, continually refining my knowledge through certifications and security forums. Whether it’s implementing robust encryption methods or conducting thorough penetration testing, I approach security as an ongoing journey rather than a one-time checklist. With a strong focus on continuous learning, I ensure every piece of software I create upholds the highest standards of safety and integrity.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/dpuiger" icon={XIcon}>
              Follow on X
            </SocialLink>
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://www.linkedin.com/in/dpuigerarde/" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/dpuigerarde/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@bkstudio.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@bkstudio.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
