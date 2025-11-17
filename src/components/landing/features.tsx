"use client"

import { BookOpen, Code, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "@/components/motion";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Structured Learning",
    description: "Clear, concise, and structured paths for learning Python and Java from scratch.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Practical Examples",
    description: "Real-world code examples to help you understand concepts faster and build your own projects.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Expert-Level Content",
    description: "Dive deep into advanced topics and best practices, curated by industry experts.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Always Up-to-Date",
    description: "Our documentation is continuously updated to reflect the latest language features and updates.",
  },
];

const FADE_IN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export default function Features() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to learn
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From basic syntax to advanced design patterns, varCODE provides a comprehensive learning experience for developers at all levels.
          </p>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={FADE_IN_ANIMATION_VARIANTS} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold leading-7 text-foreground">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
