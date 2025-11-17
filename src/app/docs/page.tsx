import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="container mx-auto min-h-[60vh] py-20 text-center flex flex-col items-center justify-center">
      <h1 className="font-headline text-5xl font-bold">Documentation</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Welcome to the documentation. Choose a language to get started on your learning journey.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/docs/python">
            Python Docs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/docs/java">
            Java Docs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
