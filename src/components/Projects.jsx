import Image from 'next/image'
import ProjectCnn from '@/images/project_cnn.png'
import ProjectPortfolio from '@/images/project-portfolio2.png'
import { Badge } from '@/components/ExperienceSection'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { ChevronRightIcon } from '@/components/Card'

const posts = [
    {
      id: 1,
      title: 'RustLang Bootcamp projects',
      href: 'https://github.com/letsgetrusty/bootcamp/tree/master/4.%20Projects',
      description:
        'CLI - Jira clone using third-party crates (like serde, anyhow, itertools, etc.), API for a StackOverflow-like app, Auth and Health check Microservices app with gRPC.',
      imageUrl:
        ProjectCnn,
      badges:
        <div className="relative flex items-center gap-x-4">
          <Badge>RustLang</Badge>
          <Badge>Rocket</Badge>
          <Badge>SQL models</Badge>
          <Badge>gRPC</Badge>
          <Badge>Microservices</Badge>
        </div>,
    },
    {
      id: 2,
      title: 'Vignette on Convolutional Neural Networks',
      href: 'https://github.com/pstat197/vignette-cnn-facial-recognition/tree/main',
      description:
        'This is an introduction to image augmentation, feature extraction, and convolutional neural networks for binary and multi classification.',
      imageUrl:
        ProjectCnn,
      badges:
        <div className="relative flex items-center gap-x-4">
          <Badge>Python</Badge>
          <Badge>Pandas</Badge>
          <Badge>PyTorch</Badge>
        </div>,
    },
    {
      id: 3,
      title: 'Bee Detector',
      href: 'https://github.com/allester/bee_detector',
      description:
        'Create a model and a gui to upload camera trap footage to provide researchers with the technology to study behaviors of bees and reduce video analysis time from hours to seconds.',
      imageUrl:
        ProjectCnn,
      badges:
        <div className="relative flex items-center gap-x-4">
          <Badge>Python</Badge>
          <Badge>YOLO v8</Badge>
          <Badge>Metashape</Badge>
        </div>,
    },
    {
      id: 4,
      title: 'Portfolio: NextJs and TailwindCSS',
      href: 'https://allester.dev',
      description:
        'Exploration of front-end technologies using ReactJs (NextJs framework) and TailwindCSS, as well as react animation libraries.',
      imageUrl:
        ProjectPortfolio,
      badges:
        <div className="relative flex items-center gap-x-4">
          <Badge>ReactJs</Badge>
          <Badge>NextJs</Badge>
          <Badge>TailwindCSS</Badge>
        </div>,
    },
  ]
  
  export function Projects() {
    return (
      <div id='projects'>
        <AnimationOnScroll animateIn="animate-fade" animateOnce="true">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Selected Projects</h2>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  My selected projects. This is WIP for now. Will update soon.
                </p>
                <div className="mt-8 space-y-20 lg:mt-10 lg:space-y-20">
                  {posts.map((post) => (
                    <div>
                      <a href={post.href} target="blank">
                       <article key={post.id} className="group relative isolate flex flex-col gap-8 lg:flex-row">
                         <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"/>
                         <div>
                           <div className="relative max-w-xl">
                              <h3 className="mt-3 text-lg font-semibold leading-6 ">
                                  <div className="w-max text-zinc-800 dark:text-zinc-100 z-10 group-hover:text-yellow-500 transition hover:scale-80 ">
                                    {post.title}
                                  </div>
                              </h3>
                              <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                {post.description}
                              </p>
                           </div>
                           <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                              { post.badges }
                           </div>
                         </div>
                       </article>
                      </a>
                    </div>
                  ))}
                </div>
                {/* <div className="mt-8">
                  <a href="https://drive.google.com/file/d/1JCX6WV4s56IOTVyRsh2K79RpbzDuitDP/view?usp=sharing" target="_blank">
                    <p className="text-base w-fit z-10 font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 dark:hover:text-yellow-500 hover:text-yellow-500 transition hover:scale-110">
                      View Project Archive<ChevronRightIcon className="float-right h-7 w-4 stroke-current"/>
                    </p>
                  </a> 
                </div> */}
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    )
  }
  
  export default Projects;