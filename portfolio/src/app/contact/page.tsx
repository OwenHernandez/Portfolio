import {Links} from "@/src/components/Links";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-zinc-900 sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xl text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Puedes contactarme de estas formas
                    </h1>
                    <Link
                        href="mailto:owendanielhernandezhanrahan@gmail.com"
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/gmail.svg"
                            alt="email icon"
                            width={16}
                            height={16}
                        />
                        Email
                    </Link>
                    <Link
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://github.com/OwenHernandez"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/github.svg"
                            alt="Github logomark"
                            width={25}
                            height={25}
                        />
                        Github
                    </Link>
                    <Link
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://www.linkedin.com/in/owen-daniel-hernández-hanrahan-860619278"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/linkedin.svg"
                            alt="LinkedIn logomark"
                            width={16}
                            height={16}
                        />
                        LinkedIn
                    </Link>
                </div>
                <Links/>
            </main>
        </div>
    );
}
