import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'font-headline text-2xl font-bold text-primary flex items-center gap-2',
        className
      )}
    >
      <Code className="h-7 w-7" />
      varCODE
    </Link>
  );
}
