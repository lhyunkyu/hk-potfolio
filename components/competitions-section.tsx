'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const competitions = [
  {
    id: 1,
    title: '2026 블레이버스 해커톤',
    result: '참가',
  },
  {
    id: 2,
    title: '2025 연합해커톤',
    result: '(주)드림아이디어소프트 우수상',
  },
  {
    id: 3,
    title: '2025 테스트 경진대회',
    result: '참가',
  },
]

export function CompetitionsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">대회</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {competitions.map((competition) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border hover:border-primary rounded-xl p-6 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{competition.title}</h3>
              <p className="text-muted-foreground">{competition.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
