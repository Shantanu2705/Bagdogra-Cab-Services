import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PackageCard } from '@/components/ui/PackageCard';
import { packages } from '@/data/packages';

export default function SikkimTourPackage() {
  const sikkimPackages = packages.filter(p => p.category === 'Sikkim');

  return (
    <>
      <PageHero 
        title="Sikkim Tour Packages" 
        subtitle="Discover the mystical beauty and vibrant culture of Sikkim"
        image="/images/pkg_sikkim.png" 
      />

      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Explore Sikkim Packages" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {sikkimPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
