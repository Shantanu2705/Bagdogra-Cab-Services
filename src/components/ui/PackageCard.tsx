import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';
import { TourPackage } from '@/data/packages';

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={pkg.image} 
          alt={pkg.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium text-primary shadow-sm flex items-center">
          <Clock size={14} className="mr-1.5 text-accent" />
          {pkg.duration}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-mountain-gray text-sm mb-3 font-medium">
          <MapPin size={16} className="mr-1.5 text-accent" />
          {pkg.location}
        </div>
        <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">{pkg.title}</h3>
        <p className="text-mountain-gray text-sm mb-6 line-clamp-2 leading-relaxed">{pkg.description}</p>
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <Link href={`/packages/${pkg.id}`} className="text-accent font-medium flex items-center group-hover:text-accent-hover">
            Explore Package <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
