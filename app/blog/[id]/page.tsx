'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import { blogArticles } from '@/lib/data'
import { formatDate } from '@/lib/dateUtils'

export default function BlogArticlePage() {
  const params = useParams()
  const articleId = params.id as string

  const article = blogArticles.find((a) => a.id === articleId)

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation isScrolled={true} />
        <div className="pt-32 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:text-primary/80">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedArticles = blogArticles.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-sm font-semibold text-primary">
                {article.category}
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6 gradient-text">{article.title}</h1>

            <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-8">
              <span className="text-sm font-semibold text-primary">{article.image}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10 mb-8">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <User size={16} />
                  <span className="text-sm">Author</span>
                </div>
                <p className="font-semibold">{article.author}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">Published</span>
                </div>
                <p className="font-semibold">
                  {formatDate(article.date, 'long')}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Clock size={16} />
                  <span className="text-sm">Read Time</span>
                </div>
                <p className="font-semibold">{article.readTime} minutes</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <div className="space-y-6 text-foreground">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="glass-hover p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Apply the science-backed principles discussed in this article</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Consult with our trainers for personalized guidance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Track your progress and adjust as needed</span>
              </li>
            </ul>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 gradient-text">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog/${relatedArticle.id}`}
                  className="glass-hover p-6 group"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xs font-semibold text-primary">{relatedArticle.image}</span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
