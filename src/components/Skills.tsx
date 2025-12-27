import React from 'react'
import { skills } from '../data/skills'

const Skills = () => {
  return (
  <section
  id='skills'
  className='max-w-6xl mx-auto px-6 py-10'
  
  >
    <h2 className='text-3xl md:text-4xl font-semibold mb-12'>
        Skills
        
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill)=>{
            const Icon = skill.icon;
            return(
                <div
                  key={skill.name}
              className="
                group
                flex items-center gap-4
                rounded-xl
                border border-neutral-800
                p-4
                transition-all
                duration-300
                ease-out
                hover:scale-[1.03]
                hover:border-neutral-600
                hover:bg-neutral-900
                ">
                <Icon 
                size={26}
                className=' text-neutral-400
                  transition-colors
                  duration-300
                  group-hover:text-white'
                />  
                 <span className="text-neutral-300 text-base font-medium">
                {skill.name}
              </span>
                </div>
            )
        })}
    </div>

  </section>
  )
}

export default Skills
