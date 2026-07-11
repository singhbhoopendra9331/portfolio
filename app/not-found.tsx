import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <span className="gradient-text text-7xl font-bold sm:text-9xl">404</span>
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild className="mt-8 rounded-full">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
