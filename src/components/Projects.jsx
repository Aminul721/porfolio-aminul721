import { projectData } from '@/lib/fakeData/projectData'
import ProjectCard from '@/lib/ui/ProjectCard'
import React from 'react'

const Projects = () => {
  return (
    <div id='portfolios' className='section section-portfolio mb-16 lg:mb-36 px-4'>
        <div className="container mx-auto">
            <h2 className='text-4xl text-center uppercase font-semibold mb-7 lg:mb-10'>🏢 My Warks</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    projectData.map(({id, name, demoImg, path}) => {
                        return (
                            <ProjectCard key={id} id={id} name={name} demoImg={demoImg} path={path}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Projects