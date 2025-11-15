import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Users, Target, Lightbulb, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F3F1F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(191,220,229,0.4),_transparent_70%),radial-gradient(circle_at_80%_50%,_rgba(225,204,236,0.5),_transparent_60%)]" />
      
      <div className="relative z-10 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Link 
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E1CCEC] bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-[#E1CCEC]/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] bg-clip-text text-transparent">
                Trendora
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              The TikTok of fashion shopping - making style discovery fun, personal, and instantly shoppable.
            </p>
          </div>

          <div className="space-y-12">
            <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl lg:p-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Trendora was born from a simple observation: people discover fashion on Instagram and TikTok, 
                  but struggle to actually buy what they see. We wanted to bridge that gap.
                </p>
                <p>
                  We created an AI-powered platform that combines the addictive swipe experience of TikTok 
                  with instant shopping capabilities. Every swipe teaches our AI about your unique style, 
                  creating a personalized fashion feed that gets better every day.
                </p>
                <p>
                  Unlike traditional e-commerce platforms, we don't hold inventory or manage logistics. 
                  Instead, we partner with top fashion brands like Zara, H&M, and Myntra through an 
                  affiliate model, connecting you directly to the products you love.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#BFDCE5] to-[#E1CCEC]">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To make fashion discovery effortless and fun, connecting inspiration to instant shopping 
                  in one seamless, swipe-based experience.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E1CCEC] to-[#D4BFE0]">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To become the go-to platform where fashion meets technology, revolutionizing how people 
                  discover and shop for style worldwide.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Trendora?</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#8B5FBF]" />
                    <h4 className="font-bold text-gray-900">Fast & Addictive</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Swipe through outfits as fast as TikTok videos. Discover your next look in seconds.
                  </p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#8B5FBF]" />
                    <h4 className="font-bold text-gray-900">AI-Powered</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Smart recommendations that understand your style, budget, and preferences.
                  </p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#8B5FBF]" />
                    <h4 className="font-bold text-gray-900">Instantly Shoppable</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Shop the exact look or find similar items from hundreds of partner brands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-[#E1CCEC]/50 bg-gradient-to-r from-[#BFDCE5] via-[#D4BFE0] to-[#E1CCEC] p-12 text-center shadow-xl">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Join the Fashion Revolution
            </h2>
            <p className="mb-8 text-xl text-gray-800">
              50K+ fashion lovers already discovering their style on Trendora
            </p>
            <Link
              href="/download"
              className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-lg transition hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

