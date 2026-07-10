'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, User, Clock, Search } from 'lucide-react'
import { blogArticles } from '@/lib/data'
import { formatDate } from '@/lib/dateUtils'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [...new Set(blogArticles.map((a) => a.category))]

  const filtered = blogArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="text-primary hover:text-primary/80 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Fitness Blog & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Expert insights, training tips, nutrition advice, and lifestyle strategies to support your fitness journey.
          </p>
        </div>

        <div className="glass-hover p-6 mb-12">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg mb-6">
            <Search size={20} className="text-primary" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none placeholder-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white/10 hover:bg-white/20 text-foreground'
              }`}
            >
              All Topics
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white/10 hover:bg-white/20 text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filtered.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="glass-hover group overflow-hidden h-full flex flex-col"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{article.image}</span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    {article.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {article.excerpt}
                </p>

                <div className="space-y-2 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{formatDate(article.date, 'long')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
