import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({id, name, demoImg, path}) => {
  return (
    <div key={id} className='transition-all '>
        <div className='prj-img mb-4 lg:mb-7 rounded-2xl overflow-hidden'>
            <Link href={path} target='_blank' aria-label='demo link'><Image className='w-full h-full object-cover' src={demoImg} alt='aminul721'/></Link>
        </div>
        <h4 className='text-2xl text-center font-bold'>
          <Link className='transition-all hover:text-pink-300' href={path} target='_blank' aria-label='demo link'>{name}</Link>
        </h4>
    </div>
  )
}

export default ProjectCard