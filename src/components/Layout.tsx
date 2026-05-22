'use client'

import { type ReactNode } from 'react'
import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { LinkedInIcon } from '@/components/icons/social/linkedin-icon'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndLeftAlignedLinks,
} from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col min-h-screen bg-olive-100 dark:bg-olive-950 text-olive-950 dark:text-olive-100 transition-colors duration-300">
      <NavbarWithLogoActionsAndLeftAlignedLinks
        id="navbar"
        logo={
          <NavbarLogo href="/">
            <span className="font-display text-2xl font-bold tracking-tight text-olive-950 dark:text-white">
              Daniel Puig Gerarde
            </span>
          </NavbarLogo>
        }
        links={
          <>
            <NavbarLink href="/services">Services</NavbarLink>
            <NavbarLink href="/projects">Projects</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/uses">Uses</NavbarLink>
          </>
        }
        actions={
          <ButtonLink href="https://x.com/dpuiger" target="_blank">
            Get in touch
          </ButtonLink>
        }
      />

      <Main className="flex-auto">
        {children}
      </Main>

      <FooterWithNewsletterFormCategoriesAndSocialIcons
        id="footer"
        cta={
          <div className="flex max-w-sm flex-col gap-4">
            <h3 className="text-base font-semibold text-olive-950 dark:text-white">Let&apos;s build together</h3>
            <p className="text-sm text-olive-700 dark:text-olive-400">
              I am open to software architecture, enterprise Kubernetes, and DevOps consulting engagements. Reach out directly on LinkedIn, X, or GitHub DMs.
            </p>
            <div className="mt-2">
              <ButtonLink href="https://x.com/dpuiger" target="_blank" className="inline-flex">
                Send a message
              </ButtonLink>
            </div>
          </div>
        }
        links={
          <>
            <FooterCategory title="Consulting">
              <FooterLink href="/services">Services Overview</FooterLink>
              <FooterLink href="/services#kubernetes">Kubernetes Platform</FooterLink>
              <FooterLink href="/services#mlops">MLOps & GPUs</FooterLink>
            </FooterCategory>
            <FooterCategory title="Professional">
              <FooterLink href="/projects">Case Studies</FooterLink>
              <FooterLink href="/about">About Daniel</FooterLink>
            </FooterCategory>
            <FooterCategory title="Technical">
              <FooterLink href="/uses">My Tech Stack</FooterLink>
              <FooterLink href="https://github.com/dpuig" target="_blank">Open Source</FooterLink>
            </FooterCategory>
            <FooterCategory title="Connect">
              <FooterLink href="https://www.linkedin.com/in/dpuigerarde/" target="_blank">LinkedIn DM</FooterLink>
              <FooterLink href="https://x.com/dpuiger" target="_blank">X (Twitter)</FooterLink>
            </FooterCategory>
          </>
        }
        fineprint={`© ${new Date().getFullYear()} Daniel Puig Gerarde. All rights reserved.`}
        socialLinks={
          <>
            <SocialLink href="https://x.com/dpuiger" name="X">
              <XIcon />
            </SocialLink>
            <SocialLink href="https://github.com/dpuig" name="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/dpuigerarde/" name="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
          </>
        }
      />
    </div>
  )
}
