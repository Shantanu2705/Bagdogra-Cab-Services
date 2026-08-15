import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PackageCard } from '@/components/ui/PackageCard';
import { packages } from '@/data/packages';

export default function DarjeelingTourPackage() {
  const darjeelingPackages = packages.filter(p => p.category === 'Darjeeling');

  return (
    <>
      <PageHero 
        title="Darjeeling Tour Packages" 
        subtitle="Experience the Queen of the Hills"
        image="/images/pkg_darjeeling.png" 
      />

      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Explore Darjeeling Packages" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {darjeelingPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
