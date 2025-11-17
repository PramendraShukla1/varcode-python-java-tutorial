import { Logo } from '@/components/logo';
import Link from 'next/link';

const footerLinks = [
  {
    title: "Documentation",
    links: [
      { name: "Python", href: "/docs/python" },
      { name: "Java", href: "/docs/java" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "GitHub", href: "#" },
      { name: "Discord", href: "#" },
      { name: "Twitter", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              Learn Python and Java with structured, developer-friendly documentation.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} varCODE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
