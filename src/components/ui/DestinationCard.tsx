import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/data/destinations';

export function DestinationCard({ dest, featured = false }: { dest: Destination, featured?: boolean }) {
  return (
    <Link 
      href={`/destination#${dest.id}`} 
      className={`group relative rounded-2xl overflow-hidden block ${featured ? 'h-[400px] md:h-[500px]' : 'h-[250px]'}`}
    >
      <Image 
        src={dest.image} 
        alt={dest.name} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 text-left">
        <h3 className="text-white font-serif font-bold text-2xl md:text-3xl mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{dest.name}</h3>
        <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {dest.shortDescription}
        </p>
      </div>
    </Link>
  );
}
