import Head from 'next/head'
import { Title } from '../components/Title'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

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
