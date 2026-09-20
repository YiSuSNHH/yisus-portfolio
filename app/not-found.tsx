import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-foreground">
          Page not found.
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          The requested page does not exist or has moved.
        </p>
        <Button asChild className="mt-7 rounded-md">
          <Link href="/">Back to portfolio</Link>
        </Button>
      </div>
    </main>
  );
}
