import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Apple, Smartphone } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F3F1F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(191,220,229,0.4),_transparent_70%),radial-gradient(circle_at_80%_50%,_rgba(225,204,236,0.5),_transparent_60%)]" />
      
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        <Link 
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E1CCEC] bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-[#E1CCEC]/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto max-w-2xl space-y-8">
          <div className="mb-8 flex justify-center">
            <Image 
              src="/trendora  Logo.png" 
              alt="Trendora Logo" 
              width={200} 
              height={65} 
              className="h-14 w-auto"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E1CCEC] bg-[#E1CCEC]/20 px-4 py-2 text-xs font-medium text-[#8B5FBF]">
            <Smartphone className="h-3.5 w-3.5" />
            Download Trendora
          </div>

          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
            Download the App
          </h1>

          <p className="text-xl text-gray-700">
            Get the best fashion discovery experience on your mobile device. Available for iOS and Android.
          </p>

          <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:justify-center">
            <button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition hover:scale-105 hover:shadow-xl">
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-bold">App Store</p>
              </div>
            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#E1CCEC] bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-md transition hover:bg-[#E1CCEC]/10">
              <Smartphone className="h-6 w-6" />
              <div className="text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-sm font-bold">Google Play</p>
              </div>
            </button>
          </div>

          <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/60 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Coming Soon!</h2>
            <p className="text-gray-600">
              Trendora is currently in development. Sign up for our waitlist to be notified when we launch.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-[#E1CCEC] bg-white px-6 py-3 text-sm outline-none transition focus:border-[#8B5FBF]"
              />
              <button className="rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-6 py-3 text-sm font-semibold text-gray-900 transition hover:scale-105">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

