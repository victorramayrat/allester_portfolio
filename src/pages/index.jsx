import Head from 'next/head'
import { Title } from '../components/title'
import { About } from '../components/about'
import { Experience } from '../components/experience'

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
      <div id='about'><About/></div>
      <Experience/>
    </>
  )
}
