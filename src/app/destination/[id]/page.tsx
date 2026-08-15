import { notFound } from 'next/navigation';
import { destinations } from '@/data/destinations';
import { PageHero } from '@/components/ui/PageHero';
import { contactInfo } from '@/data/contact';
import { Button } from '@/components/ui/Button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { EnquiryForm } from '@/components/ui/EnquiryForm';
import React from 'react';

// Use correct type for Next.js 15+ page params
export default async function DestinationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const destination = destinations.find((d) => d.id === resolvedParams.id);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={destination.name} 
        subtitle={`${destination.region} | ${destination.shortDescription}`}
        image={destination.image} 
      />

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:w-2/3 space-y-12">
              
              {/* Overview */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">About {destination.name}</h2>
                <div className="flex flex-wrap gap-6 mb-8 text-mountain-gray border-b border-gray-100 pb-8">
                  <div className="flex items-center">
                    <MapPin size={20} className="text-accent mr-2" />
                    <span className="font-medium text-charcoal">Region:</span>
                    <span className="ml-2">{destination.region}</span>
                  </div>
                </div>
                
                <p className="text-lg text-mountain-gray leading-relaxed mb-8">
                  {destination.description || `Explore the beautiful landscapes and vibrant culture of ${destination.name}. This is a must-visit destination in ${destination.region}, offering breathtaking views and unforgettable experiences.`}
                </p>

                {destination.highlights && destination.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 size={20} className="text-accent mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-mountain-gray">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - Enquiry Form */}
            <div className="lg:w-1/3 w-full lg:sticky lg:top-24">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">Plan Your Trip</h3>
                <p className="text-mountain-gray mb-8 text-sm">Want to visit {destination.name}? Drop us a message on WhatsApp and we will plan the perfect itinerary for you.</p>
                
                <EnquiryForm itemName={destination.name} itemType="destination" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
