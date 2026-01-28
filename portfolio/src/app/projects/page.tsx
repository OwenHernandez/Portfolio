import { promises as fs } from 'fs';
import Project from "@/src/types/project";
import {ProjectCard} from "@/src/components/ProjectCard";
import {Links} from "@/src/components/Links";

export default async function Projects() {
    const file = await fs.readFile(process.cwd() + '/src/data/projects.json', 'utf8');
    const projects: Project[] = JSON.parse(file);
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
            <main className="flex min-h-screen w-full max-w-3xl flex-col justify-between py-32 px-16 bg-white dark:bg-zinc-900 sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xl text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Proyectos
                    </h1>
                    <div className="grid grid-cols-2 gap-3 text-lg leading-8 text-zinc-600 dark:text-zinc-50 mb-4">
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index} title={project.title} description={project.description} techs={project.techs} github={project.github} />
                            ))
                        }
                    </div>
                </div>
                <Links />
            </main>
        </div>
    );
}
