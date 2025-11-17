"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from '@/components/motion';
import { ArrowRight } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type DocPreviewProps = {
  id: 'python' | 'java';
  title: string;
  description: string;
  icon: React.ReactNode;
  image: ImagePlaceholder;
  reverse?: boolean;
};

const FADE_IN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export default function DocPreview({ id, title, description, icon, image, reverse = false }: DocPreviewProps) {
  return (
    <section className="py-20 sm:py-32 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="container mx-auto px-4 lg:px-8"
      >
        <div className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
          <motion.div variants={FADE_IN_ANIMATION_VARIANTS} className={`space-y-6 text-center md:text-left ${reverse ? 'md:col-start-2' : ''}`}>
            <div className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">{icon}</span>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
            </div>
            <p className="text-lg text-muted-foreground">{description}</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={`/docs/${id}`}>
                Explore {title} Docs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={FADE_IN_ANIMATION_VARIANTS} className={reverse ? 'md:col-start-1' : ''}>
            <Card className="overflow-hidden shadow-2xl shadow-primary/10 bg-card border-border/50">
              <CardHeader className="p-0">
                 <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover aspect-[3/2]"
                  />
              </CardHeader>
              <CardContent className="p-4 bg-muted/30 text-sm text-muted-foreground">
                <p>// Sample code from {title} documentation...</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
