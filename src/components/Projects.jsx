import React from 'react';
import { projects } from '../data/data';
import Project from './Project';

const Projects = () => {
    return (
        <section className='py-5 px-4 bg-dark2 border-jet rounded-2xl shadow-md flex flex-col gap-7'>
            <h2 className='text-2xl mb-6 relative bt-line text-white font-semibold'>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;