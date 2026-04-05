'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Code, Users } from 'lucide-react'
import projects from '@/data/projects.json'

export function ValuesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const iconMap = {
    Heart: Heart,
    Zap: Zap,
    Code: Code,
    Users: Users,
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            나의 핵심 가치관
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            개발자로서 중요하게 생각하는 가치들과 개발 철학
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.values.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary transition-colors overflow-hidden">
                  {/* Top accent bar on hover */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
