import Head from 'next/head'
import { Title } from '@/components/TitleSection'
import { About } from '@/components/AboutSection'
import { Experience } from '@/components/ExperienceSection'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Allester Ramayrat - Software engineer, data science, python developer</title>
        <meta
          name="description"
          content="Portfolio of Allester Ramayrat - software engineer, analytics engineer, data science, python developer, UCSB graduate, san jose california"
        />
      </Head>
      <Title/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  )
}
