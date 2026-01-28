import { promises as fs } from 'fs';
import {Links} from "@/src/components/Links";
import Formation from "@/src/types/formation";
import {FormationCard} from "@/src/components/FormationCard";

export default async function About() {
    const file = await fs.readFile(process.cwd() + '/src/data/formation.json', 'utf8');
    const formations: Formation[] = JSON.parse(file);
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
            <main className="flex min-h-screen w-full max-w-3xl flex-col justify-between py-32 px-16 bg-white dark:bg-zinc-900 sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xl text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Sobre Mí
                    </h1>
                    <div className="grid grid-cols-2 gap-3 text-lg leading-8 text-zinc-600 dark:text-zinc-50 mb-4">
                        <h3 className="max-w-md text-lg leading-8 text-black dark:text-zinc-50 underline underline-offset-3 col-span-2">
                            Formación
                        </h3>
                        {
                            formations.map((formation, index) => (
                                <FormationCard key={index} degree={formation.degree} thingsDone={formation.thingsDone}/>
                            ))
                        }
                        <h3 className="max-w-md text-lg leading-8 text-black dark:text-zinc-50 underline underline-offset-3 col-span-2">
                            Actualidad
                        </h3>
                        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-50 col-span-2">
                            Actualmente estoy en busqueda activa de empleo como desarrollador backend junior, con ganas
                            de aprender y crecer profesionalmente.
                        </p>
                    </div>
                </div>
                <Links/>
            </main>
        </div>
    );
}