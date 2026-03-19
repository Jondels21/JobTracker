import { applications} from "@/lib/mock-data";

export default function ApplicationsPage() {

  const data = applications

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"> 
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Applications
          </h1>
          <p className="max-w-md text-lg leading-8 text-black dark:text-zinc-50">
            This is the applications page
          </p>
          <ul>
            {data.map((application) => (
              <li key={application.id}>
                {application.company}, {application.role}, {application.status}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>

    );
}
