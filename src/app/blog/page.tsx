"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  TrendingUp,
  Sparkles,
  ShoppingBag,
  Heart,
  Share2
} from "lucide-react";
import { blogData } from "./blogData";

const blogPosts = blogData.map(({ id, slug, title, excerpt, author, date, readTime, category, image, featured }) => ({
  id,
  slug,
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  featured
}));

const categories = [
  "All",
  "Technology",
  "Trends",
  "Style Guide",
  "Budget Fashion",
  "Occasions",
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F3F1F5] text-gray-900">
      {/* Animated Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(191,220,229,0.4),_transparent_70%),radial-gradient(circle_at_80%_50%,_rgba(225,204,236,0.5),_transparent_60%),radial-gradient(circle_at_20%_30%,_rgba(243,241,245,0.3),_transparent_50%)]" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E1CCEC]/30 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex h-14 w-full items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/trendora  Logo.png" 
              alt="Trendora Logo" 
              width={160} 
              height={50} 
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>
          
          <nav className="hidden items-center gap-4 md:flex lg:gap-6">
            <Link href="/features" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]">
              Features
            </Link>
            <a href="/#how-it-works" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]">
              How It Works
            </a>
            <a href="/#occasions" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]">
              Occasions
            </a>
            <Link href="/blog" className="text-sm font-medium text-[#8B5FBF] transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]">
              About
            </Link>
            <Link href="/download" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-4 py-2 text-sm font-semibold text-gray-900 shadow-md transition-all hover:shadow-lg hover:scale-105">
              <ShoppingBag className="h-4 w-4" />
              Download
            </Link>
          </nav>

          {/* Mobile Download Button */}
          <Link href="/download" className="inline-flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-md transition-all active:scale-95 md:hidden">
            <ShoppingBag className="h-3.5 w-3.5" />
            Download
          </Link>
        </div>
      </header>

      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E1CCEC] bg-[#E1CCEC]/20 px-4 py-2 text-sm font-medium text-[#8B5FBF]">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Fashion Insights & Style Stories
            </div>
            
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              The{" "}
              <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                Trendora
              </span>{" "}
              Blog
            </h1>
            
            <p className="mx-auto max-w-2xl text-base text-gray-700 sm:text-lg lg:text-xl">
              Discover the latest fashion trends, AI shopping insights, style guides, 
              and everything you need to know about the future of fashion discovery.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8 px-4 sm:mb-12 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    category === "All"
                      ? "bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] text-gray-900 shadow-md hover:shadow-lg"
                      : "border border-[#E1CCEC]/50 bg-white/80 text-gray-700 hover:border-[#E1CCEC] hover:bg-[#E1CCEC]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl">
              Featured Stories
            </h2>
            
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={`group relative overflow-hidden rounded-2xl border border-[#E1CCEC]/30 bg-white shadow-lg backdrop-blur-xl transition hover:scale-105 hover:shadow-xl ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${index === 0 ? "h-64 sm:h-80 lg:h-full" : "h-48 sm:h-56"}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute left-4 top-4">
                      <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="absolute right-4 top-4 flex gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition hover:scale-110">
                        <Heart className="h-4 w-4 text-gray-800" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition hover:scale-110">
                        <Share2 className="h-4 w-4 text-gray-800" />
                      </button>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className={`mb-2 font-bold leading-tight text-white ${index === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
                        {post.title}
                      </h3>
                      {index === 0 && (
                        <p className="mb-4 text-sm text-white/90 sm:text-base">{post.excerpt}</p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-white/80 sm:text-sm">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl">
              Latest Articles
            </h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-[#E1CCEC]/30 bg-white shadow-lg backdrop-blur-xl transition hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute left-4 top-4">
                      <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#8B5FBF]">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
                    
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#8B5FBF] transition">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden rounded-2xl border border-[#E1CCEC]/50 bg-gradient-to-r from-[#BFDCE5] via-[#D4BFE0] to-[#E1CCEC] p-8 text-center shadow-2xl sm:rounded-3xl sm:p-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
              <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm">
                  <TrendingUp className="h-4 w-4" />
                  Stay Updated
                </div>
                
                <h2 className="text-3xl font-bold sm:text-4xl">
                  <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                    Never Miss a Fashion Beat
                  </span>
                </h2>
                
                <p className="text-base text-gray-800 sm:text-lg">
                  Subscribe to our newsletter for weekly fashion insights, exclusive style tips, 
                  and early access to new features.
                </p>
                
                <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border-2 border-white/50 bg-white/90 px-6 py-3 text-gray-900 placeholder:text-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-lg transition hover:scale-105 hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="text-xs text-gray-700">
                  Join 10,000+ fashion enthusiasts • Unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#E1CCEC]/30 bg-white/80 backdrop-blur">
          <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-12 xl:px-16 2xl:px-20">
            <div className="mb-6 sm:mb-0">
              <Link href="/" className="inline-block">
                <Image
                  src="/trendora  Logo.png" 
                  alt="Trendora Logo" 
                  width={160} 
                  height={50} 
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600 sm:mt-4">
                The TikTok of fashion — AI-personalized, swipe-first, instantly
                shoppable. Discover your style, one swipe at a time.
              </p>
              <div className="mt-4 flex gap-3 sm:mt-6 sm:gap-4">
                {[
                  { name: "Instagram", icon: "IG" },
                  { name: "Twitter", icon: "TW" },
                  { name: "Facebook", icon: "FB" },
                  { name: "LinkedIn", icon: "LI" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E1CCEC]/50 text-xs font-semibold text-gray-600 transition-colors hover:border-[#E1CCEC] hover:bg-[#E1CCEC]/20 hover:text-[#8B5FBF] sm:h-9 sm:w-9"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">Product</h3>
                <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                  <li>
                    <Link href="/features" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Features
                    </Link>
                  </li>
                  <li>
                    <a href="/#how-it-works" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <Link href="/download" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/download" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">Company</h3>
                <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                  <li>
                    <Link href="/about" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">Legal</h3>
                <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                  <li>
                    <Link href="/about" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-[#E1CCEC]/30 pt-6 sm:mt-12 sm:pt-8">
              <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
                <p className="text-xs text-gray-600 sm:text-sm">
                  © 2024 Trendora. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/about" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                    Status
                  </Link>
                  <Link href="/about" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

