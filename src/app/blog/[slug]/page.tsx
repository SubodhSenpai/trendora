import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  Heart,
  Bookmark,
  ShoppingBag,
  Tag,
  TrendingUp
} from "lucide-react";
import { blogData } from "../blogData";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

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
        {/* Back Button */}
        <section className="px-4 py-6 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#8B5FBF]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </section>

        {/* Hero Image */}
        <section className="px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="relative mx-auto h-64 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[500px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </section>

        {/* Article Header */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC] px-4 py-1.5 text-sm font-semibold text-gray-900">
                <Tag className="h-3.5 w-3.5" />
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-flex items-center gap-1 rounded-full border border-[#E1CCEC] bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#8B5FBF]">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Featured
                </span>
              )}
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mb-6 text-lg text-gray-700 sm:text-xl">
              {post.excerpt}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-[#E1CCEC]/30 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#BFDCE5] to-[#E1CCEC] text-sm font-bold text-white">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="font-semibold text-gray-900">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1CCEC]/50 bg-white transition hover:border-[#E1CCEC] hover:bg-[#E1CCEC]/20">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1CCEC]/50 bg-white transition hover:border-[#E1CCEC] hover:bg-[#E1CCEC]/20">
                  <Bookmark className="h-4 w-4 text-gray-600" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1CCEC]/50 bg-white transition hover:border-[#E1CCEC] hover:bg-[#E1CCEC]/20">
                  <Share2 className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {post.content.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === "heading" && (
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                      {section.text}
                    </h2>
                  )}
                  {section.type === "paragraph" && (
                    <p className="mb-4 leading-relaxed text-gray-700">
                      {section.text}
                    </p>
                  )}
                  {section.type === "list" && section.items && (
                    <ul className="mb-4 space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#BFDCE5] to-[#E1CCEC]"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.type === "quote" && (
                    <blockquote className="my-6 border-l-4 border-[#E1CCEC] bg-[#E1CCEC]/10 p-6 italic text-gray-800">
                      {section.text}
                    </blockquote>
                  )}
                </div>
              ))}
            </article>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 border-t border-[#E1CCEC]/30 pt-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E1CCEC]/50 bg-white/80 px-4 py-2 text-sm text-gray-700 transition hover:border-[#E1CCEC] hover:bg-[#E1CCEC]/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl">
                Related Articles
              </h2>
              
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-[#E1CCEC]/30 bg-white shadow-lg backdrop-blur-xl transition hover:scale-105 hover:shadow-xl"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      <div className="absolute left-4 top-4">
                        <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#8B5FBF]">
                        {relatedPost.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600">{relatedPost.excerpt}</p>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mb-12 px-4 sm:mb-20 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-[#E1CCEC]/50 bg-gradient-to-r from-[#BFDCE5] via-[#D4BFE0] to-[#E1CCEC] p-8 text-center shadow-2xl sm:rounded-3xl sm:p-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
              <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  <span className="bg-gradient-to-r from-[#4FC3F7] via-[#BA68C8] to-[#F06292] bg-clip-text text-transparent">
                    Experience Fashion Discovery
                  </span>
                </h2>
                <p className="text-base text-gray-800 sm:text-lg">
                  Download Trendora and start swiping through curated outfits personalized just for you.
                </p>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center sm:gap-4 sm:pt-4">
                  <Link href="/download" className="rounded-full bg-white px-8 py-4 text-center text-base font-bold text-gray-900 shadow-lg transition hover:scale-105 hover:shadow-xl">
                    Download Now
                  </Link>
                  <Link href="/swipe" className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-center text-base font-bold text-gray-900 transition hover:bg-white/20">
                    Try Demo
                  </Link>
                </div>
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
            </div>

            <div className="mt-8 border-t border-[#E1CCEC]/30 pt-6">
              <p className="text-center text-xs text-gray-600 sm:text-sm">
                © 2024 Trendora. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

