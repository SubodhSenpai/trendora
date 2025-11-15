"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Bookmark, Share2, X, ChevronUp, ChevronDown } from "lucide-react";

// Dummy outfit data with high-quality images and detailed shopping items
const outfits = [
  {
    id: 1,
    title: "Festival Ready",
    brand: "Ajio Ethnic",
    price: "₹5,499",
    occasion: "Wedding",
    image: "/woman-lighting-oil-lamps-diwali.jpg",
    bgGradient: "from-orange-900 via-red-900 to-pink-900",
    likes: "3.8K",
    description: "Celebrate Diwali in style with traditional ethnic wear inspired by the lamp lighting ceremony.",
    items: [
      { name: "Yellow Embroidered Saree", price: "₹3,499", brand: "Indie Picks", details: "Hot red embroidered saree on industrial kota fabric with exquisite embroidery work" },
      { name: "Golden Embroidered Blouse", price: "₹899", brand: "Myntra", details: "Gold-plated embroidered saree blouse with intricate zari and sequin detailing" },
      { name: "Traditional Jewelry Set", price: "₹1,299", brand: "Ajio", details: "Necklace and earrings set with temple jewelry design and semi-precious stones" },
      { name: "Red Bindi Pack", price: "₹149", brand: "Se7en", details: "Round red bindis in 6mm size, handcrafted with skin-friendly reusable material (180 pieces)" },
      { name: "Ethnic Gold Bangles", price: "₹899", brand: "Libasaa", details: "Gold-toned traditional bangles with kundan stone work and intricate floral motifs" },
    ]
  },
  {
    id: 2,
    title: "Urban Street Style",
    brand: "H&M Street",
    price: "₹3,299",
    occasion: "College",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop&q=80",
    bgGradient: "from-gray-900 via-slate-800 to-gray-900",
    likes: "5.2K",
    description: "Effortless street style with oversized fit and trendy vibes.",
    items: [
      { name: "Burgundy Wool Funnel Neck Coat", price: "₹4,999", brand: "Zara", details: "Luxurious burgundy wool blend coat with funnel neck, single-breasted closure and midi length" },
      { name: "Blush Pink Turtleneck Sweater", price: "₹1,499", brand: "H&M", details: "Soft blush pink ribbed turtleneck sweater in premium cotton blend with fitted silhouette" },
      { name: "Grey Tweed High-Waisted Pencil Skirt", price: "₹2,199", brand: "Marks & Spencer", details: "Classic grey tweed pencil skirt with high waist, back slit and premium wool blend fabric" },
      { name: "Black Cat-Eye Sunglasses", price: "₹1,299", brand: "Ray-Ban", details: "Vintage-inspired black cat-eye sunglasses with UV protection and acetate frame" }
    ]
  },
  {
    id: 3,
    title: "Boho Summer Vibes",
    brand: "Zara Summer",
    price: "₹2,899",
    occasion: "Party",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1200&fit=crop&q=80",
    bgGradient: "from-amber-900 via-orange-800 to-yellow-900",
    likes: "4.5K",
    description: "Flowy and feminine with bohemian charm perfect for summer days.",
    items: [
      { name: "Graphic Red Crewneck T-Shirt", price: "₹899", brand: "Zara", details: "Bold red crewneck t-shirt with graphic print in soft cotton jersey fabric" },
      { name: "Black Corduroy Bomber Jacket", price: "₹2,999", brand: "Pull&Bear", details: "Trendy black corduroy bomber jacket with ribbed cuffs, collar and zip closure" },
      { name: "Black Ribbed Knit Skirt", price: "₹1,599", brand: "H&M", details: "Stretchy black ribbed knit midi skirt with elastic waistband and bodycon fit" },
      { name: "Chunky Yellow Sunglasses", price: "₹1,499", brand: "Prada", details: "Statement chunky yellow acetate sunglasses with oversized square frames and UV protection" }
    ]
  },
  {
    id: 4,
    title: "Power Business Look",
    brand: "Myntra Corporate",
    price: "₹5,799",
    occasion: "Office",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1200&fit=crop&q=80",
    bgGradient: "from-slate-900 via-gray-800 to-black",
    likes: "3.9K",
    description: "Sleek all-black professional look that commands attention.",
    items: [
      { name: "Grey Single-Breasted Notch Lapel Blazer", price: "₹3,999", brand: "Van Heusen", details: "Tailored grey blazer with notch lapels, single-breasted closure and premium wool blend fabric" },
      { name: "White or Light Ivory Button-Up Blouse", price: "₹1,299", brand: "Marks & Spencer", details: "Crisp white button-up blouse in premium cotton with classic collar and long sleeves" },
      { name: "Black Wool-Blend Dress Pants", price: "₹2,499", brand: "Arrow", details: "Professional black dress pants in wool blend fabric with flat front and tailored fit" },
      { name: "Minimal Silver Necklace", price: "₹899", brand: "Swarovski", details: "Delicate silver-plated chain necklace with minimalist pendant and adjustable length" }
    ]
  },
  {
    id: 5,
    title: "Evening Elegance",
    brand: "Zara Premium",
    price: "₹4,599",
    occasion: "Party",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop&q=80",
    bgGradient: "from-purple-900 via-indigo-900 to-purple-900",
    likes: "6.1K",
    description: "Glamorous evening look with luxe purple tones and sparkling details.",
    items: [
        { name: "Black Leather Jacket", price: "₹4,999", brand: "Zara", details: "Edgy black genuine leather biker jacket with asymmetric zip, lapel collar and quilted detailing" },
        { name: "off-shoulder ruffle sundress", price: "₹2,999", brand: "Forever 21", details: "Feminine off-shoulder sundress with romantic ruffle details and flowy silhouette in lightweight fabric" },
        { name: "White Canvas Sneakers", price: "₹2,499", brand: "Superga", details: "Classic white canvas low-top sneakers with cushioned insole and rubber sole" }
      ]
  },
  {
    id: 6,
    title: "Casual Weekend Look",
    brand: "Gap Casual",
    price: "₹2,499",
    occasion: "College",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1200&fit=crop&q=80",
    bgGradient: "from-gray-800 via-gray-700 to-gray-900",
    likes: "4.7K",
    description: "Relaxed weekend style with edgy leather jacket and classic denim.",
    items: [
        { name: "Black Turtleneck Sweater", price: "₹1,799", brand: "Uniqlo", details: "Premium black turtleneck sweater in soft merino wool blend with ribbed texture and slim fit" },
        { name: "High-Waist Black Leggings", price: "₹1,299", brand: "Lululemon", details: "High-waisted black leggings in stretchy performance fabric with tummy control and ankle length" },
        { name: "camel belted trench coat", price: "₹5,999", brand: "Mango", details: "Classic camel trench coat with tie belt, notch lapels, double-breasted closure and midi length" },
        { name: "White Leather Ankle High Heels", price: "₹3,299", brand: "Charles & Keith", details: "Elegant white leather ankle-strap heels with pointed toe and 3.5-inch stiletto heel" },
        { name: "Minimalist Silver Watch", price: "₹2,499", brand: "Fossil", details: "Sleek minimalist watch with silver-tone stainless steel case, mesh bracelet and 36mm dial" }
      ]
  },
  {
    id: 7,
    title: "Romantic Date Night",
    brand: "H&M Premium",
    price: "₹3,499",
    occasion: "Party",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1200&fit=crop&q=80",
    bgGradient: "from-rose-900 via-pink-800 to-red-900",
    likes: "7.3K",
    description: "Soft and romantic look perfect for special evening occasions.",
    items: [
      { name: "Violet Wrap Dress", price: "₹2,999", brand: "H&M", details: "Elegant violet wrap dress in soft satin fabric with tie waist, V-neckline and flowing midi length" },
      { name: "Gold Drop Earrings", price: "₹999", brand: "Forever 21", details: "Delicate gold-plated drop earrings with pearl embellishment and fish-hook closure" },
      { name: "Nude Strappy Heels", price: "₹2,499", brand: "Steve Madden", details: "Classic nude patent leather heels with multiple thin ankle straps and 3.5-inch heel" },
      { name: "Violet Mini Clutch", price: "₹1,299", brand: "Accessorize", details: "Compact violet satin clutch with detachable gold chain strap and magnetic snap closure" }
    ]
  }
];

export default function SwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showItems, setShowItems] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const currentOutfit = outfits[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentIndex < outfits.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Handle touch/swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance && currentIndex < outfits.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (swipeDistance < -minSwipeDistance && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Handle wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentIndex < outfits.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < outfits.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 transition-colors duration-700">
      {/* Animated Background for Desktop with current outfit color tint */}
      <div 
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${currentOutfit.bgGradient} opacity-30 transition-opacity duration-700`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.03),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(255,255,255,0.03),_transparent_50%)]" />

      {/* Close Button - Outside Container, Top Left */}
      <Link
        href="/"
        className="absolute left-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/20 hover:scale-110"
      >
        <X className="h-6 w-6" />
      </Link>

      {/* Navigation Arrows - Outside Container, Left Side (Desktop Only) */}
      <div className="absolute left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/20 hover:scale-110 ${
            currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
        >
          <ChevronUp className="h-7 w-7" />
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === outfits.length - 1}
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/20 hover:scale-110 ${
            currentIndex === outfits.length - 1 ? "opacity-30 cursor-not-allowed" : ""
          }`}
        >
          <ChevronDown className="h-7 w-7" />
        </button>
      </div>

      {/* Action Buttons - Right Side (Instagram Reels Style) */}
      <div className="absolute bottom-32 right-3 z-40 flex flex-col gap-6 md:right-6 md:top-1/2 md:-translate-y-1/2 md:gap-5">
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="group flex flex-col items-center gap-1 transition active:scale-95 md:gap-2 md:hover:scale-110"
        >
          <div className={`flex items-center justify-center rounded-full transition md:h-16 md:w-16 ${
            isLiked 
              ? 'h-11 w-11 bg-red-500 shadow-lg md:bg-red-500 md:shadow-red-500/50 md:shadow-xl' 
              : 'h-11 w-11 bg-transparent md:h-16 md:w-16 md:bg-white/95 md:shadow-xl md:backdrop-blur-lg'
          }`}>
            <Heart className={`transition md:h-8 md:w-8 ${
              isLiked 
                ? 'h-7 w-7 fill-white text-white' 
                : 'h-7 w-7 text-white md:text-gray-800'
            }`} />
          </div>
          <span className="text-xs font-semibold text-white drop-shadow-lg md:text-sm md:font-bold">
            {currentOutfit.likes}
          </span>
        </button>

        {/* Shop Button - Mobile Only */}
        <button
          onClick={() => setShowItems(!showItems)}
          className="group flex flex-col items-center gap-1 transition active:scale-95 md:hidden"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-transparent">
            <ShoppingBag className="h-7 w-7 text-white" />
          </div>
          <span className="text-xs font-semibold text-white drop-shadow-lg">Shop</span>
        </button>

        {/* Save Button */}
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="group flex flex-col items-center gap-1 transition active:scale-95 md:gap-2 md:hover:scale-110"
        >
          <div className={`flex items-center justify-center rounded-full transition md:h-16 md:w-16 ${
            isSaved 
              ? 'h-11 w-11 bg-yellow-500 shadow-lg md:shadow-yellow-500/50 md:shadow-xl' 
              : 'h-11 w-11 bg-transparent md:h-16 md:w-16 md:bg-white/95 md:shadow-xl md:backdrop-blur-lg'
          }`}>
            <Bookmark className={`transition md:h-8 md:w-8 ${
              isSaved 
                ? 'h-7 w-7 fill-white text-white' 
                : 'h-7 w-7 text-white md:text-gray-800'
            }`} />
          </div>
          <span className="text-xs font-semibold text-white drop-shadow-lg md:text-sm md:font-bold">Save</span>
        </button>

        {/* Share Button */}
        <button className="group flex flex-col items-center gap-1 transition active:scale-95 md:gap-2 md:hover:scale-110">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-transparent md:h-16 md:w-16 md:bg-white/95 md:shadow-xl md:backdrop-blur-lg">
            <Share2 className="h-7 w-7 text-white md:h-8 md:w-8 md:text-gray-800" />
          </div>
          <span className="text-xs font-semibold text-white drop-shadow-lg md:text-sm md:font-bold">Share</span>
        </button>
      </div>

      {/* Phone Container - Clean Display */}
      <div 
        ref={containerRef}
        className="pointer-events-auto relative mx-auto h-screen w-full overflow-hidden border-white bg-black shadow-2xl md:my-4 md:h-[calc(100vh-2rem)] md:max-w-md md:rounded-[3rem] md:border lg:max-w-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        {/* Main Card */}
        <div
          key={currentOutfit.id}
          className="relative h-full w-full transition-all duration-500"
        >
          {/* Background Image */}
          <Image
            src={currentOutfit.image}
            alt={currentOutfit.title}
            fill
            className="object-cover object-center"
            priority={currentIndex === 0}
            sizes="100vw"
          />
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Hint Text */}
        {currentIndex === 0 && (
          <div className="absolute bottom-32 left-1/2 z-30 -translate-x-1/2 animate-bounce md:bottom-36">
            <p className="text-sm font-semibold text-white drop-shadow-lg">
              Scroll or use arrows to browse
            </p>
          </div>
        )}
      </div>

      {/* Bottom Left Info - YouTube Shorts Style */}
      <div className="absolute bottom-4 left-3 z-40 max-w-[65%] md:bottom-24 md:left-12 md:max-w-lg lg:left-20">
        <div className="space-y-1 md:space-y-2">
          {/* Brand & Price Row */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="rounded-md bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-2 py-1 text-xs font-bold text-gray-900 shadow-md md:rounded-lg md:px-3 md:py-1.5 md:text-base md:shadow-lg lg:text-lg">
              @{currentOutfit.brand}
            </span>
            <span className="text-base font-bold text-white/90 md:text-2xl">•</span>
            <span className="rounded-md bg-white/95 px-2 py-1 text-xs font-black text-gray-900 shadow-md md:rounded-lg md:px-3 md:py-1.5 md:text-base md:shadow-lg lg:text-lg">
              {currentOutfit.price}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold leading-tight text-white drop-shadow-lg md:text-3xl lg:text-4xl xl:text-5xl">
            {currentOutfit.title}
          </h2>

          {/* Description */}
          <p className="text-sm leading-snug text-white/90 drop-shadow-md md:text-base md:leading-relaxed lg:text-lg">
            {currentOutfit.description}
          </p>

          {/* Tags Row */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5 md:gap-3 md:pt-1">
            <span className="text-xs font-medium text-white/85 drop-shadow-md md:text-base">
              #{currentOutfit.occasion.toLowerCase()}
            </span>
            <span className="text-xs font-medium text-white/85 drop-shadow-md md:text-base">
              #fashion
            </span>
            <span className="text-xs font-medium text-white/85 drop-shadow-md md:text-base">
              #trendora
            </span>
          </div>

          {/* Shop Button - Desktop Only */}
          <button
            onClick={() => setShowItems(true)}
            className="mt-4 hidden items-center gap-2 rounded-xl border-2 border-white/30 bg-white/15 px-6 py-3 text-base font-bold text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 md:inline-flex lg:text-lg"
          >
            <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6" />
            Shop This Look
          </button>
        </div>
      </div>

      {/* Shop Items Modal - Bottom Sheet */}
      {showItems && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowItems(false)}
        >
          <div 
            className="w-full max-w-3xl rounded-t-3xl bg-white p-4 shadow-2xl animate-slide-up max-h-[60vh] overflow-y-auto md:max-h-[75vh] md:p-6 md:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between md:mb-6">
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">Shop This Look</h3>
              <button
                onClick={() => setShowItems(false)}
                className="rounded-full bg-gray-100 p-1.5 transition hover:bg-gray-200 md:p-2"
              >
                <X className="h-5 w-5 text-gray-700 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="space-y-2 md:space-y-3">
              {currentOutfit.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:rounded-2xl md:p-4"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 md:text-base">{item.name}</p>
                    <p className="text-xs text-gray-600 md:text-sm">{item.brand}</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:justify-end sm:gap-4">
                    <p className="text-base font-bold text-gray-900 md:text-lg">{item.price}</p>
                    <button className="rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-3 py-1.5 text-xs font-semibold text-gray-900 transition hover:scale-105 md:px-4 md:py-2 md:text-sm">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3 md:mt-6">
              <button className="flex-1 rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] py-2.5 text-sm font-semibold text-gray-900 shadow-md transition hover:scale-105 md:py-3 md:text-base">
                Shop All Items
              </button>
              <button className="flex-1 rounded-full border-2 border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 md:py-3 md:text-base">
                Find Similar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
