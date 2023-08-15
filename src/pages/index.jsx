import Head from 'next/head'
import Script from 'next/script'
import { Title } from '@/components/TitleSection'
import { About } from '@/components/AboutSection'
import { Experience } from '@/components/ExperienceSection'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Allester Ramayrat - Analytics engineer, data scientist, python developer</title>
        <meta
          name="description"
          content="Portfolio of Allester Ramayrat - founder, analytics engineer, data scientist, python developer, san jose california"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1TXQDLC4GE" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-1TXQDLC4GE');
          `}
        </Script>
      </Head>
      <Title/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  )
}
