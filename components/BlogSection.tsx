'use client'

import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { blogArticles } from '@/lib/data'
import { formatDate } from '@/lib/dateUtils'

export default function BlogSection() {
  const featured = blogArticles.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
          Fitness Blog & Resources
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert insights, training tips, nutrition advice, and lifestyle strategies to support your fitness journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {featured.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.id}`}
            className="glass-hover group"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center mb-6">
              <span className="text-sm font-semibold text-primary">{article.image}</span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-xs font-semibold text-primary">
                  {article.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="space-y-2 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User size={14} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={14} />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={14} />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/blog" className="inline-block btn-primary">
          Read All Articles
        </Link>
      </div>
    </section>
  )
}
