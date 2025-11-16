import projects from "../data/project"
import ProjectCard from "./ProjectCard."

function ProjectsSection() {
    return (
        <section id='projects' className='w-full py-16 scroll-mt-32'>
            <h3 className='text-3xl font-bold mb-6'>Selected Projects</h3>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
