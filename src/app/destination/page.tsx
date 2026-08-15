import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { destinations } from '@/data/destinations';

export default function DestinationPage() {
  const sikkimDestinations = destinations.filter(d => d.region === 'Sikkim');
  const darjeelingDestinations = destinations.filter(d => d.region === 'Darjeeling');

  return (
    <>
      <PageHero 
        title="Destinations" 
        subtitle="Explore the majestic beauty of the Himalayas"
        image="/images/dest_hero.png" 
      />

      {/* Sikkim Section */}
      <section className="py-24 bg-white" id="sikkim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Sikkim" 
            subtitle="Gangtok — The Vibrant Capital of Sikkim"
            centered
          />
          <div className="max-w-4xl mx-auto text-center text-mountain-gray text-lg leading-relaxed mb-16">
            <p>
              Sikkim, nestled in the Eastern Himalayas, is a jewel of Northeast India known for its stunning natural beauty, peaceful monasteries, and vibrant culture. From the snow-capped peaks of Kanchenjunga to the serene lakes like Tsomgo and Gurudongmar, Sikkim offers a diverse range of landscapes that attract nature lovers and adventure seekers alike.
            </p>
            <p className="mt-4">
              The capital city, Gangtok, blends modernity with tradition and serves as a gateway to popular destinations such as Lachung, Lachen, Pelling, and Namchi. Whether you're exploring ancient Buddhist monasteries, trekking through alpine forests, or simply soaking in the mountain air, Sikkim promises a refreshing and unforgettable experience. With our reliable taxi services, you can travel comfortably across Sikkim's winding roads and hidden gems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sikkimDestinations.map(dest => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Darjeeling Section */}
      <section className="py-24 bg-off-white" id="darjeeling">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Darjeeling" 
            subtitle="Darjeeling — The Queen of the Hills"
            centered
          />
          <div className="max-w-4xl mx-auto text-center text-mountain-gray text-lg leading-relaxed mb-16">
            <p>
              Darjeeling, often called the "Queen of the Hills," is a picturesque hill station in West Bengal known for its cool climate, lush tea gardens, and stunning views of the snow-capped Himalayas. Perched at an altitude of 6,700 feet, this charming town offers a blend of colonial architecture, Tibetan culture, and natural beauty.
            </p>
            <p className="mt-4">
              Visitors flock to see the sunrise over Kanchenjunga from Tiger Hill, take a ride on the iconic Darjeeling Himalayan Railway, and explore attractions like the Batasia Loop, Peace Pagoda, and vibrant local markets. Whether you're a nature lover, photographer, or someone seeking a peaceful retreat, Darjeeling has something for everyone. Our taxi services make it easy to explore Darjeeling and connect to nearby destinations like Gangtok, Kalimpong, and Siliguri with ease and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {darjeelingDestinations.map(dest => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
