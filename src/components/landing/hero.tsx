"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from '@/components/motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(135,206,235,0.2),transparent_40%)] -z-10"></div>
      </div>
      <div className="container mx-auto flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center p-4 text-center lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-center gap-6"
        >
          <motion.h1
            className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70 py-2"
            variants={FADE_IN_ANIMATION_VARIANTS}
          >
            varCODE Docs
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-foreground/80 md:text-xl"
            variants={FADE_IN_ANIMATION_VARIANTS}
          >
            Learn Python and Java with structured, developer-friendly documentation.
          </motion.p>
          <motion.div variants={FADE_IN_ANIMATION_VARIANTS}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/docs">
                Go To Docs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
