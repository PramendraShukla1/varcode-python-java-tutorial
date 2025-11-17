import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import DocPreview from '@/components/landing/doc-preview';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PythonIcon } from '@/components/icons/python-icon';
import { JavaIcon } from '@/components/icons/java-icon';

export default function Home() {
  const pythonImage = PlaceHolderImages.find(p => p.id === 'python-docs-preview');
  const javaImage = PlaceHolderImages.find(p => p.id === 'java-docs-preview');

  if (!pythonImage || !javaImage) {
    // Fallback for missing images. In a real app, you might want to log this error.
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Error: Documentation preview images could not be loaded.</p>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Features />
      <DocPreview
        id="python"
        title="Python"
        description="Master Python with our comprehensive documentation, covering everything from basic syntax to advanced libraries and frameworks."
        icon={<PythonIcon className="h-6 w-6" />}
        image={pythonImage}
      />
      <DocPreview
        id="java"
        title="Java"
        description="Build robust, scalable applications with Java. Our guides cover core concepts, enterprise features, and modern best practices."
        icon={<JavaIcon className="h-6 w-6" />}
        image={javaImage}
        reverse={true}
      />
    </>
  );
}
