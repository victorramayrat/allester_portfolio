import Link from 'next/link'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <div id='footer'>
      <footer className="mt-32">
        <Container.Outer>
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <Container.Inner>
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/#about">About</NavLink>
                  <NavLink href="/#experience">Experience</NavLink>
                  <NavLink href="/#projects">Projects</NavLink>
                  <NavLink href="/#contact">Contact</NavLink>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  <a href="https://github.com/victorramayrat/allester_portfolio" target="_blank">Github code is here. Feel free to fork</a>.
                </p>
              </div>
            </Container.Inner>
          </div>
        </Container.Outer>
      </footer>
    </div>
  )
}
