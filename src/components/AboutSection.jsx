import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { AnimationOnScroll } from 'react-animation-on-scroll'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/allester-headshot.jpg'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export function About() {
  return (
    <>
    <div id='about'>
      <AnimationOnScroll animateIn="animate-fade" animateOnce="true">
        <div className="mx-auto justify-center max-w-5xl pt-8 sm:pt-16 px-4 sm:px-8 lg:px-12">
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
              <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                About Me
              </h2>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Thank you for taking the time to visit my portfolio. As a technologist, my interests are in software development, machine learning, and computer vision.</p> 
              <p>I currently attend the <a href="https://online.seas.upenn.edu/degrees/dual-degree/" target="_blank">MCIT program</a> at Penn Engineering with plans to graduate with a <a href="https://online.seas.upenn.edu/degrees/dual-degree/mse-ai-online-dual-degree/" target="_target">dual degree in MSE-AI</a> in 2026.</p>
              <p>On my free time, I am building a social agent providing sentiment analysis for businesses through <a href="https://https://socient.ai/" target="_blank">SocientAI</a>. I also provide freelance analytics engineering services to startups and growing businesses.</p>
              <p>I look forward to connecting with you. Please reach out if you think we're a great fit as a contributor to your company or if you need help in setting up a solid foundation of analytics for your business.</p>
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                <SocialLink href="https://github.com/allester" icon={GitHubIcon} className="mt-4">
                  Code work on GitHub
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/allester" icon={LinkedInIcon} className="mt-4">
                  My profile on LinkedIn
                </SocialLink>
                <SocialLink href="https://twitter.com/allester" icon={TwitterIcon} className="mt-4">
                  Connect with me on Twitter
                </SocialLink>
                <SocialLink href="mailto:allester@ramayrat.com" icon={MailIcon} className="mt-4">
                Contact me via e-mail
                </SocialLink>
                <SocialLink
                  href="https://docs.google.com/document/d/1kY6UxCejPVzf7jLrRzyUh4bV4sMTeHCWSfrHjc2daes/edit?usp=sharing"
                  icon={BriefcaseIcon}
                  target="_blank"
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                >
                  Download my Resume
                </SocialLink>
              </ul>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
    </>
  )
}

export default About;