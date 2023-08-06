import { SocialLink, MailIcon } from '@/components/About.jsx'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

export default function Title() {
  return (
    <>
      <div className="px-4 sm:px-12 md:px-18 lg:px-28 h-screen flex flex-col justify-center">
        <div className="mx-auto max-w-4xl">
          <div className="animate-fade" style={{"animation-delay": "500ms", "animation-fill-mode": "both"}}>
            <h2 className="leading-tight text-teal-600 dark:text-teal-400">
              Hello, thank you for visiting.
            </h2>
          </div>
          <div className="animate-fade" style={{"animation-delay": "600ms", "animation-fill-mode": "both"}}>
            <h1 className="mt-6 text-clamp font-bold leading-none tracking-tight text-zinc-800 dark:text-zinc-100">
              I'm Allester. 🤝
            </h1>
          </div>
          
          <div className="animate-fade" style={{"animation-delay": "700ms", "animation-fill-mode": "both"}}>
            <h1 className="mt-6 text-clamp font-bold leading-none tracking-tight text-zinc-600 dark:text-zinc-400" >
              Pleasure to meet you.
            </h1>
          </div>
          <div className="animate-fade" style={{"animation-delay": "800ms", "animation-fill-mode": "both"}}>
            <p className="mt-6 text-2xl max-w-screen-sm text-zinc-600 dark:text-zinc-400">
              I look forward to telling you my story and journey as a founder, data scientist and soon a software engineer.
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            <div className="animate-fade" style={{"animation-delay": "900ms", "animation-fill-mode": "both"}}>
              <SocialLink
                href="https://github.com/allester"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
            </div>
            <div className="animate-fade" style={{"animation-delay": "1000ms", "animation-fill-mode": "both"}}>
              <SocialLink
                href="https://linkedin.com/in/allester/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
            <div className="animate-fade" style={{"animation-delay": "1100ms", "animation-fill-mode": "both"}}>
              <SocialLink
                href="https://instagram.com/allesterramayrat/"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
            </div>
            <div className="animate-fade" style={{"animation-delay": "1200ms", "animation-fill-mode": "both"}}>
              <SocialLink 
                href="mailto:allester@ramayrat.com" 
                aria-label="Send an Email" 
                icon={MailIcon}>
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }
