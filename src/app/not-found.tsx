import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/images/not_found_hero.png" 
          alt="Lost in the Himalayas" 
          fill 
          className="object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-8xl font-serif font-bold text-white mb-4 drop-shadow-xl">404</h1>
        <h2 className="text-3xl font-serif font-semibold text-accent mb-6">Lost somewhere in the Himalayas?</h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Let's get you back on the journey. The page you are looking for might have been moved or doesn't exist.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-10 h-14">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
