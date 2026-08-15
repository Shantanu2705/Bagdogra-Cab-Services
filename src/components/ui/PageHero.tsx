import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 font-light drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
