import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-700 px-6 py-24 text-center sm:py-32 lg:px-8">
      {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-90 w-135 -translate-x-1/2 rounded-full bg-linear-to-tr from-sky-500/20 to-indigo-500/20 blur-3xl"
      />

      {/* Status Badge */}
      <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-sky-400 uppercase">
        404 Error
      </span>

      {/* Gradient 404 Display */}
      <h1 className="mt-4 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-9xl">
        404
      </h1>

      {/* Heading & Description */}
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Page not found
      </h2>
      <p className="mt-3 max-w-md text-base leading-7 text-slate-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been moved, deleted, or the URL may contain a typo.
      </p>

      {/* Primary & Secondary Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5 hover:bg-sky-400 focus-visible:outline2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          Back to Home
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-slate-800 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-800"
        >
          Contact Support
        </Link>
      </div>
    </main>
  );
}
