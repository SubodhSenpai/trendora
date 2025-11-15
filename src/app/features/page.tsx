import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Bot, Zap, Palette, Target, Trophy, Heart, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Personalized Feed",
    description: "Our advanced AI learns your style preferences with every swipe, creating a uniquely tailored fashion feed just for you.",
    color: "from-[#BFDCE5] to-[#A8D5E2]"
  },
  {
    icon: Zap,
    title: "Instantly Shoppable Outfits",
    description: "See an outfit you love? Tap to shop the exact items or discover similar alternatives from top brands instantly.",
    color: "from-[#E1CCEC] to-[#D4BFE0]"
  },
  {
    icon: Palette,
    title: "Creator-Driven Content",
    description: "Follow your favorite fashion creators and discover exclusive outfit drops curated by style experts.",
    color: "from-[#C5B8E0] to-[#B8A4D4]"
  },
  {
    icon: Target,
    title: "Occasion-Based Suggestions",
    description: "Get outfit recommendations tailored for weddings, parties, office, college, and any special moment.",
    color: "from-[#BFDCE5] to-[#E1CCEC]"
  },
  {
    icon: Trophy,
    title: "Outfit Challenges & Sharing",
    description: "Participate in style challenges, share your looks, and get inspired by the Trendora community.",
    color: "from-[#E1CCEC] to-[#BFDCE5]"
  },
  {
    icon: Heart,
    title: "Save & Collections",
    description: "Build your personal fashion collections and save outfits for later with our smart bookmarking system.",
    color: "from-[#D4BFE0] to-[#C5B8E0]"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Trends",
    description: "Stay ahead with trending styles updated every hour based on what's popular in the fashion world.",
    color: "from-[#A8D5E2] to-[#BFDCE5]"
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Get outfit suggestions that match your budget, body type, and style preferences automatically.",
    color: "from-[#B8A4D4] to-[#E1CCEC]"
  }
];

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F3F1F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(191,220,229,0.4),_transparent_70%),radial-gradient(circle_at_80%_50%,_rgba(225,204,236,0.5),_transparent_60%)]" />
      
      <div className="relative z-10 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link 
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E1CCEC] bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-[#E1CCEC]/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
              Powerful{" "}
              <span className="bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Everything you need for the perfect fashion discovery experience, powered by AI and designed for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition hover:scale-105 hover:shadow-xl"
              >
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-[#E1CCEC]/50 bg-gradient-to-r from-[#BFDCE5] via-[#D4BFE0] to-[#E1CCEC] p-12 text-center shadow-xl">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Ready to Experience Trendora?
            </h2>
            <p className="mb-8 text-xl text-gray-800">
              Join thousands of fashion lovers discovering their perfect style
            </p>
            <Link
              href="/download"
              className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-lg transition hover:scale-105"
            >
              Download Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

