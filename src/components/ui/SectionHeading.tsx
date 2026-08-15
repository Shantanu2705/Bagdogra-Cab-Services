interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-mountain-gray max-w-2xl mt-4 mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-accent mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
