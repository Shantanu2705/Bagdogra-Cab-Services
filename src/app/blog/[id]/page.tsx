import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { contactInfo } from '@/data/contact';
import { ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import React from 'react';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post || !post.content) {
    notFound();
  }

  const whatsappNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
  const whatsappMessage = encodeURIComponent(`Hi, I read your blog post "${post.title}" and would like to book a cab.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <PageHero 
        title="Travel Blog" 
        subtitle={post.category}
        image={post.image} 
      />

      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent-hover font-medium mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to all articles
          </Link>

          <article className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <header className="mb-12 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-6 text-mountain-gray text-sm mb-6 font-medium">
                <span className="bg-primary/5 text-primary px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">
                  {post.category}
                </span>
                <span className="flex items-center">
                  <CalendarDays size={16} className="mr-2" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
                {post.title}
              </h1>
            </header>

            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-charcoal prose-p:text-mountain-gray prose-a:text-accent hover:prose-a:text-accent-hover">
              {post.content}
            </div>
            
            <div className="mt-16 bg-primary/5 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-primary/10">
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Ready to book your ride?</h3>
                <p className="text-mountain-gray text-sm">Experience the best of North Bengal and Sikkim with our reliable cab service.</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto whitespace-nowrap h-12">
                  Book Now via WhatsApp
                </Button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
