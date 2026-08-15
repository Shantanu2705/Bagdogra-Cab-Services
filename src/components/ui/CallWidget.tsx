"use client";

import React from 'react';
import { Phone } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export function CallWidget() {
  const telLink = `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={telLink}
        className="w-16 h-16 bg-accent hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 relative focus:outline-none focus:ring-4 focus:ring-accent/30 group"
        aria-label="Call us now"
      >
        {/* Tooltip for desktop users */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-charcoal text-sm font-semibold py-2 px-4 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap pointer-events-none before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-white">
          Click to Call: {contactInfo.phone}
        </div>
        
        <Phone size={28} className="animate-pulse" />
      </a>
    </div>
  );
}
