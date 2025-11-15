import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F3F1F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(191,220,229,0.4),_transparent_70%),radial-gradient(circle_at_80%_50%,_rgba(225,204,236,0.5),_transparent_60%)]" />
      
      <div className="relative z-10 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link 
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E1CCEC] bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-[#E1CCEC]/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/trendora  Logo.png" 
                alt="Trendora Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto"
              />
            </div>
            <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-6 shadow-lg backdrop-blur-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#BFDCE5] to-[#E1CCEC]">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Email Us</h3>
                <p className="text-gray-600">Our team is here to help</p>
                <a href="mailto:hello@trendora.com" className="mt-2 inline-block text-[#8B5FBF] hover:underline">
                  hello@trendora.com
                </a>
              </div>

              <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-6 shadow-lg backdrop-blur-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E1CCEC] to-[#D4BFE0]">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Live Chat</h3>
                <p className="text-gray-600">Chat with our support team</p>
                <button className="mt-2 text-[#8B5FBF] hover:underline">
                  Start a conversation
                </button>
              </div>

              <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-6 shadow-lg backdrop-blur-xl">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Follow Us</h3>
                <div className="flex gap-3">
                  {["Instagram", "Twitter", "Facebook", "LinkedIn"].map((social) => (
                    <button
                      key={social}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E1CCEC] bg-white text-xs font-semibold text-gray-700 transition hover:bg-[#E1CCEC]/20"
                    >
                      {social.slice(0, 2)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E1CCEC]/30 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-[#E1CCEC] bg-white px-4 py-3 outline-none transition focus:border-[#8B5FBF]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-[#E1CCEC] bg-white px-4 py-3 outline-none transition focus:border-[#8B5FBF]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-[#E1CCEC] bg-white px-4 py-3 outline-none transition focus:border-[#8B5FBF]"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-[#E1CCEC] bg-white px-4 py-3 outline-none transition focus:border-[#8B5FBF]"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-6 py-3 font-semibold text-gray-900 shadow-md transition hover:scale-105 hover:shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

