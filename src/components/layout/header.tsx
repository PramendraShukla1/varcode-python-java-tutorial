"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from '@/components/motion';

const navItems = [
  { name: 'Python', href: '/docs/python' },
  { name: 'Java', href: '/docs/java' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        <Logo />
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="/docs">Go To Docs</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="bg-background border-t border-border/50">
              <div className="container mx-auto flex flex-col items-center gap-4 py-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-headline text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-4">
                  <Link href="/docs" onClick={() => setMobileMenuOpen(false)}>Go To Docs</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
