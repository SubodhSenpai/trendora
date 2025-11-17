"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  Heart, 
  Share2, 
  Bookmark,
  Flame,
  Wand2,
  HandIcon,
  ShoppingCart,
  Bot,
  Zap,
  Palette,
  Target,
  Trophy,
  Calendar,
  PartyPopper,
  Briefcase,
  GraduationCap
} from "lucide-react";

const outfitCards = [
  {
    title: "Velvet Luxe Evening",
    brand: "Zara x H&M",
    price: "₹4,299",
    occasion: "Party",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
  },
  {
    title: "Minimalist Office Chic",
    brand: "Myntra Essentials",
    price: "₹2,899",
    occasion: "Office",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
  },
  {
    title: "Sangeet Sparkle",
    brand: "Ajio Premium",
    price: "₹6,499",
    occasion: "Wedding",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
  },
];

const howItWorks = [
  {
    title: "Swipe Through Curated Looks",
    description:
      "AI learns your vibe through every swipe and instantly adjusts the feed.",
    step: "01",
    icon: HandIcon,
  },
  {
    title: "Shop What You Love",
    description:
      "Tap once to view every item in the outfit or discover similar options.",
    step: "02",
    icon: ShoppingCart,
  },
  {
    title: "Get Smarter Suggestions",
    description:
      "Trendora keeps serving better outfits the more you interact and share.",
    step: "03",
    icon: Sparkles,
  },
];

const keyFeatures = [
  { text: "AI-personalized feed", icon: Bot },
  { text: "Instantly shoppable outfits", icon: Zap },
  { text: "Creator-driven drops", icon: Palette },
  { text: "Occasion-based suggestions", icon: Target },
  { text: "Outfit challenges & sharing", icon: Trophy },
];

const testimonials = [
  {
    quote: "Swipe to Shop is my new TikTok — but my cart actually benefits.",
    author: "Misha Arora",
    role: "Fashion Creator",
    avatar: "MA",
  },
  {
    quote: "I finally buy the exact looks I fall in love with on Instagram.",
    author: "Lena Joseph",
    role: "Marketing Lead",
    avatar: "LJ",
  },
  {
    quote: "Obsessed with the recs. It just gets my style.",
    author: "Nikhil Mehra",
    role: "Product Designer",
    avatar: "NM",
  },
];

const feeds = [
  {
    title: "Wedding",
    description: "Sangeet sparkle to sundowner chic.",
    icon: Calendar,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Party",
    description: "Viral-ready fits with bold textures.",
    icon: PartyPopper,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Office",
    description: "Tailored, confident, easy to repeat.",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
  },
  {
    title: "College",
    description: "Effortless, comfy, trending now.",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-600",
  },
];

const shopItems = [
  {
    brand: "Zara",
    item: "Sequinned Midi Dress",
    tag: "Exact Look",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=80",
  },
  {
    brand: "H&M",
    item: "Structured Blazer Set",
    tag: "Similar Find",
    price: "₹5,499",
    image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&h=800&fit=crop&q=80",
  },
  {
    brand: "Myntra",
    item: "Platform Loafers",
    tag: "Trending",
    price: "₹2,299",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop&q=80",
  },
  {
    brand: "Ajio",
    item: "Pearl Mini Bag",
    tag: "Creator Pick",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=600&h=800&fit=crop&q=80",
  },
];

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev + 1) % outfitCards.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F3F1F5] text-gray-900">
      {/* Animated Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(191,220,229,0.4),_transparent_70%),radial-gradient(circle_at_80%_50%,_rgba(225,204,236,0.5),_transparent_60%),radial-gradient(circle_at_20%_30%,_rgba(243,241,245,0.3),_transparent_50%)]" />

      {/* Sticky Header - Shadcn Style */}
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
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]">
              How It Works
            </a>
            <a href="#occasions" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]">
              Occasions
            </a>
            <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]">
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

      <main className="relative z-10 w-full flex flex-col gap-0">

        {/* Hero Section - TikTok Style with Phone Mockup */}
        <section className="relative mb-12 px-4 py-8 sm:mb-20 sm:px-6 sm:py-16 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto grid w-full gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E1CCEC] bg-[#E1CCEC]/20 px-3 py-1.5 text-xs font-medium text-[#8B5FBF] sm:px-4 sm:py-2">
              <Sparkles className="h-3 w-3 animate-pulse sm:h-3.5 sm:w-3.5" />
              AI-Powered Fashion Discovery
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Swipe Your Way to
              <span className="block bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h2>

            <p className="text-base text-gray-700 sm:text-lg lg:text-xl">
              The TikTok of fashion shopping. Explore AI-curated outfits,
              discover trends, and shop instantly from Zara, H&M, Myntra & more
              — all in one addictive swipe-based feed.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/swipe" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-6 py-3 text-center text-sm font-semibold text-gray-900 shadow-lg transition active:scale-95 sm:px-8 sm:py-4 sm:text-base sm:hover:scale-105 sm:hover:shadow-xl">
                <span className="relative z-10">Try Live Demo</span>
              </Link>
              <Link href="/features" className="rounded-full border-2 border-[#E1CCEC] bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 transition active:scale-95 sm:px-8 sm:py-4 sm:text-base sm:hover:bg-[#E1CCEC]/10">
                Explore Features
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:gap-6">
              <div className="flex -space-x-2 sm:-space-x-3">
                {["bg-[#BFDCE5]", "bg-[#E1CCEC]", "bg-[#C5B8E0]", "bg-[#A8D5E2]"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${color} border-2 border-white text-xs font-bold text-gray-800 shadow-sm sm:h-10 sm:w-10`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  )
                )}
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-gray-900">50K+ fashion lovers</p>
                <p className="text-xs text-gray-600">Already swiping daily</p>
              </div>
            </div>
            </div>

            {/* Right Side - Animated Phone Mockup */}
            <div className="relative mt-8 flex items-center justify-center lg:mt-0">
            {/* Phone Frame */}
            <Link href="/swipe" className="group relative h-[500px] w-[250px] cursor-pointer rounded-[2.5rem] border-4 border-gray-200 bg-white p-2 shadow-2xl shadow-[#E1CCEC]/50 transition active:scale-95 sm:h-[600px] sm:w-[300px] sm:rounded-[3rem] sm:border-8 sm:hover:scale-105 sm:hover:shadow-[#E1CCEC]">
              {/* Notch */}
              <div className="absolute left-1/2 top-2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-gray-900" />

              {/* Swipeable Cards Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
                {outfitCards.map((card, index) => {
                  const isActive = index === currentCard;
                  const isPrev =
                    index === (currentCard - 1 + outfitCards.length) % outfitCards.length;

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? "z-10 translate-y-0 opacity-100"
                          : isPrev
                          ? "-z-0 -translate-y-full opacity-0"
                          : "z-0 translate-y-full opacity-0"
                      } ${isAnimating && isActive ? "-translate-y-full" : ""}`}
                    >
                      <div className="relative h-full w-full">
                        {/* Background Image */}
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover object-center"
                          priority={index === 0}
                          sizes="300px"
                        />
                        
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Content */}
                        <div className="relative flex h-full w-full flex-col justify-end p-4 sm:p-6">
                          {/* TikTok-style side actions */}
                          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-3 sm:right-4 sm:gap-6">
                            <button className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-lg transition hover:scale-110 sm:h-12 sm:w-12">
                              <Heart className="h-4 w-4 text-gray-800 sm:h-5 sm:w-5" />
                              <span className="text-[10px] font-semibold text-gray-800 sm:text-xs">2.3K</span>
                            </button>
                            <button className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-lg transition hover:scale-110 sm:h-12 sm:w-12">
                              <ShoppingBag className="h-4 w-4 text-gray-800 sm:h-5 sm:w-5" />
                              <span className="text-[10px] font-semibold text-gray-800 sm:text-xs">Shop</span>
                            </button>
                            <button className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-lg transition hover:scale-110 sm:h-12 sm:w-12">
                              <Bookmark className="h-4 w-4 text-gray-800 sm:h-5 sm:w-5" />
                              <span className="text-[10px] font-semibold text-gray-800 sm:text-xs">Save</span>
                            </button>
                          </div>

                          {/* Card Info */}
                          <div className="space-y-1 sm:space-y-2">
                            <span className="inline-block rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
                              {card.occasion}
                            </span>
                            <h3 className="text-lg font-bold text-white drop-shadow-lg sm:text-2xl">
                              {card.title}
                            </h3>
                            <p className="text-xs font-medium text-white/95 sm:text-sm">
                              {card.brand}
                            </p>
                            <p className="text-base font-bold text-white sm:text-xl">{card.price}</p>
                            <button className="mt-1 hidden w-full rounded-full bg-white py-2 text-sm font-semibold text-gray-900 shadow-lg transition hover:scale-105 sm:mt-2 sm:block sm:py-3">
                              Shop This Look
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Swipe Indicator */}
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-8 sm:gap-2">
                {outfitCards.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all sm:h-1.5 ${
                      index === currentCard
                        ? "w-6 bg-white sm:w-8"
                        : "w-1 bg-white/40 sm:w-1.5"
                    }`}
                  />
                ))}
              </div>

              {/* Click to try overlay */}
              <div className="absolute inset-0 z-30 flex items-center justify-center rounded-[2.5rem] bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
                <div className="rounded-2xl bg-white px-6 py-3 shadow-lg">
                  <p className="font-semibold text-gray-900">Click to Try Demo</p>
                </div>
              </div>
            </Link>

            {/* Hint - Below Phone */}
            <div className="absolute -bottom-12 left-1/2 z-50 -translate-x-1/2 animate-bounce">
              <p className="text-center text-sm font-semibold text-gray-600">
                👆 Tap to try the demo
              </p>
            </div>

            {/* Floating Elements - Mobile */}
            <div className="absolute left-2 top-3 z-50 flex flex-col gap-2 sm:hidden">
              <div className="animate-bounce rounded-2xl border border-[#E1CCEC] bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-sm">
                <p className="flex items-center gap-1 text-[10px] font-semibold text-gray-900">
                  <Flame className="h-3.5 w-3.5 text-orange-500" />
                  Trending Now
                </p>
              </div>
            </div>
            <div className="absolute right-2 bottom-24 z-50 sm:hidden">
              <div className="animate-bounce rounded-2xl border border-[#BFDCE5] bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-sm delay-200">
                <p className="flex items-center gap-1 text-[10px] font-semibold text-gray-900">
                  <Wand2 className="h-3.5 w-3.5 text-purple-500" />
                  AI Curated
                </p>
              </div>
            </div>

            {/* Floating Elements - Tablets & Desktop */}
            <div className="absolute -left-10 top-20 z-50 hidden animate-bounce rounded-2xl border border-[#E1CCEC] bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm md:block">
              <p className="flex items-center gap-2 text-xs font-semibold text-gray-900">
                <Flame className="h-4 w-4 text-orange-500" />
                Trending Now
              </p>
            </div>
            <div className="absolute -right-10 bottom-32 z-50 hidden animate-bounce rounded-2xl border border-[#BFDCE5] bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm delay-300 md:block">
              <p className="flex items-center gap-2 text-xs font-semibold text-gray-900">
                <Wand2 className="h-4 w-4 text-purple-500" />
                AI Curated
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* What is Trendora? */}
        <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full rounded-2xl border border-[#E1CCEC]/30 bg-white/60 p-6 shadow-xl backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:p-12">
          <div className="mx-auto max-w-4xl space-y-4 text-center sm:space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What is{" "}
              <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                Trendora
              </span>
              ?
            </h2>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Trendora is the <strong>TikTok of fashion shopping</strong> — an
              AI-powered app where you explore outfits by swiping through a
              vertical, full-screen feed. No endless scrolling through catalogs.
              Just swipe, discover, and shop instantly.
            </p>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Every swipe teaches our AI your style, budget, and preferences.
              When you find an outfit you love, tap to shop the exact items from
              Zara, H&M, Myntra, or get AI-suggested alternatives. We don&apos;t
              store or ship — we connect your fashion inspiration to instant
              shopping through an <strong className="text-[#8B5FBF]">affiliate model</strong>.
            </p>
            <div className="grid gap-3 pt-4 sm:grid-cols-3 sm:gap-4 sm:pt-6">
              <div className="rounded-xl border border-[#BFDCE5]/50 bg-[#BFDCE5]/20 p-3 shadow-sm sm:rounded-2xl sm:p-4">
                <p className="text-2xl font-bold text-[#4A9DB5] sm:text-3xl">50K+</p>
                <p className="text-xs text-gray-700 sm:text-sm">Active Swipes Daily</p>
              </div>
              <div className="rounded-xl border border-[#E1CCEC]/50 bg-[#E1CCEC]/20 p-3 shadow-sm sm:rounded-2xl sm:p-4">
                <p className="text-2xl font-bold text-[#8B5FBF] sm:text-3xl">10M+</p>
                <p className="text-xs text-gray-700 sm:text-sm">Outfits Curated</p>
              </div>
              <div className="rounded-xl border border-[#C5B8E0]/50 bg-[#C5B8E0]/20 p-3 shadow-sm sm:rounded-2xl sm:p-4">
                <p className="text-2xl font-bold text-[#7A5BA0] sm:text-3xl">500+</p>
                <p className="text-xs text-gray-700 sm:text-sm">Brand Partners</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* How It Works - Animated Steps */}
        <section id="how-it-works" className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <div className="mb-8 text-center sm:mb-10">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:mb-3 sm:text-4xl">
                Fashion Discovery,{" "}
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                  Simplified
                </span>
              </h2>
              <p className="text-sm text-gray-600 sm:text-base">Three steps to your perfect outfit</p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {howItWorks.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-[#E1CCEC]/30 bg-white/80 p-6 shadow-lg backdrop-blur-xl transition active:scale-95 sm:rounded-3xl sm:p-8 sm:hover:scale-105 sm:hover:border-[#E1CCEC] sm:hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 opacity-5">
                  <item.icon className="h-24 w-24 sm:h-32 sm:w-32" />
                </div>
                <div className="relative space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#BFDCE5]/30 to-[#E1CCEC]/30 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <item.icon className="h-6 w-6 text-[#8B5FBF] sm:h-7 sm:w-7" />
                    </div>
                    <span className="text-4xl font-bold text-[#E1CCEC]/30 sm:text-5xl">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-xl font-bold text-transparent sm:text-2xl">{item.title}</h3>
                  <p className="text-sm text-gray-600 sm:text-base">{item.description}</p>
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] transition-all group-hover:w-full sm:w-16" />
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features - Animated Grid */}
        <section id="features" className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
              <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                Your Fashion, Your Way
              </span>
            </h2>
            <p className="text-sm text-gray-600 sm:text-base">
              Everything you need for the perfect shopping experience
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {keyFeatures.map((feature, index) => (
              <div
                key={feature.text}
                className="group flex items-center gap-3 rounded-xl border border-[#E1CCEC]/30 bg-white/80 p-4 shadow-md backdrop-blur-xl transition active:scale-95 sm:gap-4 sm:rounded-2xl sm:p-5 sm:hover:scale-105 sm:hover:border-[#E1CCEC] sm:hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#BFDCE5]/30 to-[#E1CCEC]/30 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <feature.icon className="h-6 w-6 text-[#8B5FBF] sm:h-7 sm:w-7" />
                </div>
                <p className="text-sm font-semibold text-gray-900 sm:text-base">{feature.text}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Occasion-Based Feeds - Interactive Cards */}
        <section id="occasions" className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <div className="mb-8 text-center sm:mb-10">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:mb-3 sm:text-4xl">
              Curated for Every{" "}
              <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                Occasion
              </span>
            </h2>
            <p className="text-sm text-gray-600 sm:text-base">
              Wedding? Party? Office? College? We&apos;ve got you covered.
            </p>
          </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {feeds.map((feed) => (
                <div
                  key={feed.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#E1CCEC]/30 bg-white/80 p-5 shadow-lg transition active:scale-95 sm:rounded-3xl sm:p-6 sm:hover:scale-105 sm:hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feed.color} opacity-0 transition group-hover:opacity-10`}
                  />
                  <div className="relative space-y-3 sm:space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#BFDCE5]/30 to-[#E1CCEC]/30 sm:h-16 sm:w-16 sm:rounded-2xl">
                      <feed.icon className="h-7 w-7 text-[#8B5FBF] sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-xl font-bold text-transparent sm:text-2xl">{feed.title}</h3>
                    <p className="text-sm text-gray-600">{feed.description}</p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B5FBF] transition group-hover:gap-3">
                      Swipe Now
                      <TrendingUp className="h-4 w-4 transition" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop the Look - Product Grid */}
        <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <div className="mb-8 text-center sm:mb-10">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:mb-3 sm:text-4xl">
              Shop the{" "}
              <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                Exact Look
              </span>
            </h2>
              <p className="text-sm text-gray-600 sm:text-base">
                From Instagram to your closet — instant shopping
          </p>
        </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {shopItems.map((item) => (
              <div
                key={item.item}
                className="group relative overflow-hidden rounded-2xl border border-[#E1CCEC]/30 bg-white shadow-lg backdrop-blur-xl transition active:scale-95 sm:rounded-3xl sm:hover:scale-105 sm:hover:shadow-xl"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.item}
                    fill
                    className="object-cover object-center transition group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="space-y-2 p-4 sm:space-y-3 sm:p-5">
                  <span className="inline-block rounded-full bg-[#E1CCEC]/30 px-2.5 py-0.5 text-xs font-semibold text-[#8B5FBF] sm:px-3 sm:py-1">
                    {item.tag}
                  </span>
                  <h4 className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-base font-bold text-transparent sm:text-lg">{item.item}</h4>
                  <p className="text-sm text-gray-600">{item.brand}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900 sm:text-xl">{item.price}</p>
                    <button className="rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-md transition active:scale-95 sm:px-4 sm:py-2 sm:hover:scale-105 sm:hover:shadow-lg">
                      Shop →
                    </button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Carousel Style */}
        <section id="testimonials" className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <div className="mb-8 text-center sm:mb-10">
            <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
              <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                What Fashion Lovers Are Saying
              </span>
            </h2>
            <p className="text-sm text-gray-600 sm:text-base">Join thousands of happy swipes</p>
          </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="rounded-2xl border border-[#E1CCEC]/30 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition active:scale-95 sm:rounded-3xl sm:p-6 sm:hover:scale-105 sm:hover:shadow-xl"
                >
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#BFDCE5] to-[#E1CCEC] text-sm font-bold text-white shadow-md sm:h-12 sm:w-12">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 sm:text-base">{testimonial.author}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 sm:text-lg">"{testimonial.quote}"</p>
                  <div className="mt-3 flex gap-1 sm:mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-base text-[#E1CCEC] sm:text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Gradient Banner */}
        <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto w-full">
            <div className="relative overflow-hidden rounded-2xl border border-[#E1CCEC]/50 bg-gradient-to-r from-[#BFDCE5] via-[#D4BFE0] to-[#E1CCEC] p-8 text-center shadow-2xl sm:rounded-[3rem] sm:p-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
              <div className="relative z-10 mx-auto max-w-3xl space-y-4 sm:space-y-6">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                    Ready to Swipe Your Way to Style?
                  </span>
                </h2>
                <p className="text-base text-gray-800 sm:text-lg lg:text-xl">
                  Your perfect outfit is just a tap away. Join 50K+ fashion lovers
                  already discovering their style on Trendora.
                </p>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center sm:gap-4 sm:pt-4">
                  <Link href="/download" className="rounded-full bg-white px-6 py-3 text-center text-base font-bold text-gray-900 shadow-lg transition active:scale-95 sm:px-8 sm:py-4 sm:text-lg sm:hover:scale-105 sm:hover:shadow-xl">
                    Download the App
                  </Link>
                  <Link href="/download" className="rounded-full border-2 border-white bg-transparent px-6 py-3 text-center text-base font-bold text-gray-900 transition active:scale-95 sm:px-8 sm:py-4 sm:text-lg sm:hover:bg-white/20">
                    Join the Waitlist
                  </Link>
                </div>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Available on iOS & Android • Free to download
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Shadcn Style */}
        <footer className="w-full border-t border-[#E1CCEC]/30 bg-white/80 backdrop-blur">
          <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-12 xl:px-16 2xl:px-20">
            {/* Company Info - Full Width on Mobile */}
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

            {/* Links - Horizontal on Mobile, Grid on Desktop */}
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
                    <a href="#how-it-works" className="text-xs text-gray-600 transition-colors hover:text-[#8B5FBF] sm:text-sm">
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
