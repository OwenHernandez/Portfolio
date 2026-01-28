import Link from "next/link";
import Image from "next/image";

export function Links() {
    return (
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                href="/"
                rel="noopener noreferrer"
            >
                Ir al Principio
            </Link>
            <Link
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                href="/projects"
                rel="noopener noreferrer"
            >
                Ver proyectos
            </Link>
            <Link
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                href="/about"
                rel="noopener noreferrer"
            >
                Sobre mí
            </Link>
            <Link
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                href="/contact"
                rel="noopener noreferrer"
            >
                Contactamé
            </Link>
        </div>
    );
}