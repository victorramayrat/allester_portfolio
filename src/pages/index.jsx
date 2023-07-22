import Head from 'next/head'
import { Title } from '../components/title'
import { About } from '../components/about'
import { Experience } from '../components/experience'
import { Projects } from '../components/Projects'
{/*
import { Experience2 } from '../components/experience2'
import { Example } from '../components/posts'
import { Skills } from '../components/Skills'
*/}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Allester Ramayrat - Software engineer, data science, python developer</title>
        <meta
          name="description"
          content="Allester Ramayrat - software engineer, data science, python developer, UCSB graduate, san jose california"
        />
      </Head>
      <Title/>
      <About/>
      <Experience/>
      <Projects/>
      {/*
      <Experience2/>
      <Example/>
      <Skills/>
      */}
    </>
  )
}
