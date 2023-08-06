import { Container } from '@/components/Container'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function CTA({children}) {
  return (
    <a href="mailto:allester@ramayrat.com">
      <span className="inline-flex items-center z-10 rounded-md bg-blue-50 dark:bg-blue-400/10 px-4 py-2 text-base font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30">
        {children}
      </span>
    </a>
  )
}

export function Contact() {
  return (
    <>
      <div id="contact">
        <AnimationOnScroll animateIn="animate-fade" animateOnce="true">
          <Container className="my-24">
            <div className="mx-auto max-w-xl">
              <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Get In Touch
              </h1>
              <p className="text-center mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Want to work together, connect or just say hi? My inbox is open, and I'll do my best to get back to you!
              </p>
              <div className="justify-center mt-6 flex gap-6">
                <CTA>Say hello</CTA>
              </div>
            </div>
          </Container>
        </AnimationOnScroll>
      </div>
    </>
  )
}

export default Contact;