import { Card } from '@/components/Card'

export function Experience() {
  return (
    <>
      <div className="mx-auto max-w-5xl pt-16 sm:pt-32 px-4 sm:px-8 lg:px-12">
        <header className="mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Work Experience
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
          </p>
        </header>
        <div className="mx-auto mt-16">
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="flex max-w-3xl flex-col space-y-16">
              <project className="md:grid md:grid-cols-4 md:items-baseline">
                  <Card className="md:col-span-3">
                    <Card.Title>Data Science Fellow @ CCBER</Card.Title>
                    <Card.Description>Here's a description</Card.Description>
                    <Card.Cta>Read project</Card.Cta>
                  </Card>
                <Card.Eyebrow>JAN 2023 - PRESENT</Card.Eyebrow>
              </project>
              <project className="md:grid md:grid-cols-4 md:items-baseline">
                  <Card className="md:col-span-3">
                    <Card.Title>Data Scientist (Part-Time) @ Vintra, Inc.</Card.Title>
                    <Card.Description>Here's a description</Card.Description>
                    <Card.Cta>Read project</Card.Cta>
                  </Card>
                <Card.Eyebrow>SEP 2021 - DEC 2022</Card.Eyebrow>
              </project>
              <project className="md:grid md:grid-cols-4 md:items-baseline">
                <Card className="md:col-span-3">
                  <Card.Title>Data Science Intern @ <a href="https://vintra.io/" target='_blank'>Vintra, Inc.</a></Card.Title>
                  <Card.Description>Here's a description</Card.Description>
                  <Card.Cta>Read project</Card.Cta>
                </Card>
                <Card.Eyebrow>JUN 2021 - SEP 2021</Card.Eyebrow>
              </project>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}