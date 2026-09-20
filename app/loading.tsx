export default function Loading() {
  return (
    <main className="min-h-[100dvh] bg-background px-4 pt-24 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="h-6 w-44 animate-pulse rounded bg-muted" />
          <div className="mt-6 h-16 w-full max-w-xl animate-pulse rounded bg-muted" />
          <div className="mt-3 h-16 w-full max-w-lg animate-pulse rounded bg-muted" />
          <div className="mt-7 h-5 w-full max-w-md animate-pulse rounded bg-muted" />
          <div className="mt-3 h-5 w-full max-w-sm animate-pulse rounded bg-muted" />
        </div>
        <div className="aspect-[4/3] animate-pulse rounded-xl border bg-muted" />
      </div>
    </main>
  );
}
