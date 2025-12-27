import React from 'react'
import { projects } from '../data/projects'
import Image from 'next/image'

const Projects = () => {
  return (
   <section
   id='projects'
   className='max-w-6xl mx-auto px-6 py-10'
   >
    <h2 className='text-3xl md:text-4xl font-semibold mb-12'>
        Projects
    </h2>

    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project)=>(
            <a
            key={project.title}
            href={project.link}
            target='_blank'
            className='group rounded-xl border border-neutral-800 p-6
            transition-all duration-300 ease-out hover:scale-[1.03] transform hover:border-neutral-600 hover:bg-neutral-900
            '
            >
                <h3 className='text-lg font-medium mb-2'>{project.title}</h3>
                <Image src={project.img} alt={project.title} width={500} height={200} className="rounded-lg mb-4"/>
                <p className='text-neutral-400 text-sm leading-relaxed'>{project.description}</p>

                <div className='mt-4 flex flex-wrap gap-2 text-xs text-neutral-400 '>
                    {project.tech.map((t)=>(
                        <span
                        key={t}
                        className='rounded-md border border-neutral-700 px-2 py-1'
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <span className='mt-4 inline-block text-sm text-indigo-400 group-hover:underline'>
                    View project &rarr;
                </span>
            </a>
        ))}

    </div>
   </section>
  )
}

export default Projects
