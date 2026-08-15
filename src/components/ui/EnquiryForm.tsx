'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { contactInfo } from '@/data/contact';

interface EnquiryFormProps {
  itemName: string;
  itemType: 'package' | 'destination';
}

export function EnquiryForm({ itemName, itemType }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [pax, setPax] = useState('');

  const handleSendEnquiry = () => {
    const whatsappNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    
    let baseText = itemType === 'package' 
      ? `Hi, I would like to inquire about the ${itemName} package.`
      : `Hi, I would like to plan a trip to ${itemName}.`;
      
    const details = [];
    if (name) details.push(`Name: ${name}`);
    if (travelDate) details.push(`Travel Date: ${travelDate}`);
    if (pax) details.push(`Travelers: ${pax}`);
    
    let fullText = baseText;
    if (details.length > 0) {
      fullText += '\n\nDetails:\n' + details.join('\n');
    }
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullText)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-charcoal">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" 
          placeholder="John Doe" 
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="travelDate" className="text-sm font-medium text-charcoal">Expected Travel Date</label>
        <input 
          type="date" 
          id="travelDate" 
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" 
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="pax" className="text-sm font-medium text-charcoal">Travelers</label>
        <input 
          type="number" 
          id="pax" 
          min="1" 
          value={pax}
          onChange={(e) => setPax(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" 
          placeholder="2" 
        />
      </div>
      
      <Button 
        type="button" 
        onClick={handleSendEnquiry}
        className="w-full h-14 text-lg rounded-xl bg-[#25D366] hover:bg-[#1EBE5C] text-white flex items-center justify-center gap-2"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        Send Enquiry
      </Button>
      
      <p className="text-xs text-center text-gray-400 mt-4">
        Or call us directly at <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-charcoal hover:text-accent transition-colors">{contactInfo.phone}</a>
      </p>
    </div>
  );
}
