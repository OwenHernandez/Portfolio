import Link from "next/link";

type ProjectProps = {
    title: string;
    description: string;
    techs: string[];
    github: string;
};

export function ProjectCard({title, description, techs, github}: ProjectProps) {
    return (
        <div className="flex flex-col rounded-lg p-6 border border-gray-300 gap-3 justify-between">
            <div>
                <h3 className="mb-2 text-xl font-medium leading-tight">{title}</h3>
                <p className="mb-4 text-base">{description}</p>
                <ul className="list-disc list-inside">
                    {techs.map(t => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
            </div>
            <Link
                className="inline-block rounded-full border border-solid border-black/[.08] transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] text-center"
                href={github}
                target="_blank"
            >Ver código</Link>
        </div>
    );
}