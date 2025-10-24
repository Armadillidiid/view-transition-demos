import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="mb-16 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
          View Transitions Examples
        </h1>
        <ul>
          <li>
            <Link
              className={buttonVariants({
                variant: "link",
                size: "none",
                className: "text-xl",
              })}
              href="/1-pagination"
            >
              1. Pagination
            </Link>
          </li>
          <li>
            <Link
              className={buttonVariants({
                variant: "link",
                size: "none",
                className: "text-xl",
              })}
              href="/"
            >
              2. Pagination with direction (using transition types)
            </Link>
          </li>
          <li>
            <Link
              className={buttonVariants({
                variant: "link",
                size: "none",
                className: "text-xl",
              })}
              href="/"
            >
              3. Selective view transitions (e.g., opt out certain elements from
              transition)
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
