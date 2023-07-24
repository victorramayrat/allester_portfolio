import { Card, ChevronRightIcon } from '@/components/Card'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export function Badge({children}) {
  return (
    <span className="inline-flex items-center z-10 rounded-md bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30">{children}</span>
  )
}

function Items({children}) {
  return (
    <div className='my-2 z-20 flex space-x-2'>
      {children}
    </div>
  )
}

export function Experience() {
  return (
    <>
      <div id='experience'>
        <AnimationOnScroll animateIn="animate-fade" animateOnce="true">
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
                    <div className="md:grid md:grid-cols-4 md:items-baseline">
                        <Card className="md:col-span-3">
                          <a className="z-0" href='https://www.ccber.ucsb.edu/' target="_blank">
                            <Card.Title>Data Science Fellow @ CCBER</Card.Title>
                          </a>
                          <Card.Description>
                            <li>- Built a Photogrammetry Pipeline (Metashape) for reconstructing 3D bee models to generate comprehensive bee trait and image datasets; aided in the biological study of image and anatomical trait digitization of bees (Big Bee Project)</li>
                            <li>- Reduced Reprojection Error (pix) from 0.84 to 0.41 and processing time by 75% of pre-existing bee models through improving data collection, data augmentation, and parameter tuning on 16+ photo sets containing 145+ macro images</li>
                            <li>- Trained an object detection model (YOLOv8) on 8000+ labeled bee image data from 3D models and iNaturalist to recognize video frames featuring bees to reduce video analysis and image extraction time from hours to minutes.</li>
                          </Card.Description>
                          <Items>
                            <a className="z-0" href='https://escholarship.org/uc/item/0th7b3mh' target="_blank">
                              <Card.Cta className="float-left" >Interim Report</Card.Cta>
                            </a>
                            <a className="z-0" href='https://escholarship.org/uc/item/0hd7v9jt' target="_blank">
                              <Card.Cta className="float-left">Poster</Card.Cta>
                            </a>
                          </Items>
                          <Items>
                            <Badge>Metashape</Badge>
                            <Badge>YOLOv8</Badge>
                            <Badge>Python</Badge>
                          </Items>
                        </Card>
                      <Card.Eyebrow>JAN 2023 - PRESENT</Card.Eyebrow>
                    </div>
                  <a className="z-0" href='https://vintra.io/' target="_blank">
                    <project className="md:grid md:grid-cols-4 md:items-baseline">
                        <Card className="md:col-span-3">                  
                            <Card.Title>Data Scientist (Part-Time) @ Vintra, Inc.</Card.Title>
                          <Card.Description>
                            <li>- Built the Cloud Product User Activity Dashboard (Tableau) to display user activity on the cloud product; created an automated ETL pipeline (Google Apps Scripts) utilizing Vintra’s API to access the cloud product database (MongoDB)</li>
                            <li>- Innovated the Density Mapping Tool to dynamically change Tableau backgrounds based on applied aggregations through the development of non-OOTB features in Tableau (Google Cloud Storage)</li>
                          </Card.Description>
                          <Items>
                              <Badge>Tableau</Badge>
                              <Badge>Google Apps Script</Badge>
                              <Badge>MongoDB</Badge>
                              <Badge>SQL</Badge>
                              <Badge>Python</Badge>
                              <Badge>Google Cloud Platform</Badge>
                            </Items>
                        </Card>
                      <Card.Eyebrow>SEP 2021 - DEC 2022</Card.Eyebrow>
                    </project>
                  </a>
                  <a className="z-0" href="https://vintra.io/" target="_blank">
                    <project className="md:grid md:grid-cols-4 md:items-baseline">
                      <Card className="md:col-span-3">
                          <Card.Title>Data Science Intern @ Vintra, Inc.</Card.Title>
                        <Card.Description>
                          <li>- Built and designed the North Star Metric KPI’s Dashboard (Tableau) for the internal product team and an end-to-end batch processing pipeline to handle processes from file ingestion to refreshing the dashboard’s data.</li>
                          <li>- Developed a Density Mapping Tool utilizing object detection data from Vintra’s REST API; presented as a product demo to the VP of internal security at a large social media company with our head of sales.</li>
                        </Card.Description>
                        <Items>
                          <Badge>Tableau</Badge>
                          <Badge>Python</Badge>
                          <Badge>Pandas</Badge>
                          <Badge>Postman</Badge>
                        </Items>
                      </Card>
                      <Card.Eyebrow>JUN 2021 - SEP 2021</Card.Eyebrow>
                    </project>
                  </a>
                </div>
                
              </div>
              <div className="mt-8 w-fit">
                <a href="https://drive.google.com/file/d/1JCX6WV4s56IOTVyRsh2K79RpbzDuitDP/view?usp=sharing" target="_blank">
                  <p className="text-base w-fit z-10 font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500 transition hover:scale-110">
                    View Full Resume<ChevronRightIcon className="float-right h-7 w-4 stroke-current"/>
                  </p>
                </a> 
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </>
  )
}