import {Links} from "@/src/components/Links";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-zinc-900 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Owen Daniel Hernández Hanrahan
          </h1>
          <h2 className="max-w-md text-2xl leading-8 text-black dark:text-zinc-50">
            Junior Backend Developer
          </h2>
          <h3 className="max-w-md text-lg leading-8 text-black dark:text-zinc-50 underline underline-offset-3">
            Stack pricipal
          </h3>
          <div className="max-w-sm text-lg leading-8 text-zinc-600 dark:text-zinc-50">
            <p>Java(Spring Boot)</p>
            <p>Python(Django)</p>
            <p>SQL(MySQL, PostgresSQL, Oracle)</p>
            <p>NoSQL(MongoDB)</p>
          </div>
          <h3 className="max-w-md text-lg leading-8 text-black dark:text-zinc-50 underline underline-offset-3">
            Stack extra
          </h3>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-50">
            JavaScript(TypeScript, React, Vue)
          </p>
        </div>
        <Links />
      </main>
    </div>
  );
}
