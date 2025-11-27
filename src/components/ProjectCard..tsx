import type { Project } from "../data/project"

function ProjectCard({ title, description, tech, link, link2 }: Project) {
    return (
        <div className='bg-[#111] p-6 rounded-xl shadow-md border border-gray-800 hover:border-gray-600 transition'>
            <h4 className='font-semibold text-white text-lg'>{title}</h4>
            <p className='text-sm text-gray-400 mt-2'>{description}</p>
            <p className='text-xs mt-3 text-gray-500'>{tech}</p>
            <div className='mt-4'>
                <a href={link} className='mr-3 text-sm underline text-gray-300 hover:text-white' target="_blank">BE Repo</a>
                <a href={link2} className='text-sm underline text-gray-300 hover:text-white' target="_blank">FE Repo</a>
            </div>
        </div>
    )
}


export default ProjectCard