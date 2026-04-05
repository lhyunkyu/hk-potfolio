'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Mail, Github } from 'lucide-react'

function FloatingTag({
  text,
  dark,
  delay,
  x,
  y,
  rotate,
  zIndex,
}: {
  text: string
  dark: boolean
  delay: number
  x: number
  y: number
  rotate: number
  zIndex: number
}) {
  return (
    <motion.div
      className={`absolute inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap select-none w-fit max-w-[90vw] ${
        dark
          ? 'bg-[#111] text-white'
          : 'bg-white text-[#111] border-2 border-[#111]'
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        rotate,
        fontSize: '1rem',
        zIndex,
      }}
      initial={{ y: -220, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 110,
        damping: 16,
        mass: 0.8,
        delay: delay,
      }}
    >
      {text}
    </motion.div>
  )
}

export function HeroSection() {
  const tagData = [
    { text: '# 사용자의 경험을 중요시 하는 개발자', dark: false, x: 3, y: 14, rotate: 0, delay: 0, zIndex: 20 },
    { text: '# 생각하는 개발자', dark: true, x: 52, y: 14, rotate: 0, delay: 0.2, zIndex: 20 },
    { text: '# 기술스택을 고민하는', dark: true, x: 3, y: 36, rotate: 0, delay: 0.45, zIndex: 19 },
    { text: '# 의미있는 프로젝트를 진행하는', dark: false, x: 36, y: 36, rotate: 0, delay: 0.65, zIndex: 19 },
    { text: '# 프론트엔드 개발', dark: false, x: 9, y: 73, rotate: -34, delay: 0.95, zIndex: 17 },
    { text: '#여---러 프로젝트를 진행', dark: true, x: 33, y: 74, rotate: 8, delay: 1.15, zIndex: 18 },
    { text: '# UI/UX 디자이너', dark: false, x: 56, y: 84, rotate: 0, delay: 1.35, zIndex: 16 },
    { text: '# 웹/앱 개발', dark: true, x: 70, y: 76, rotate: 14, delay: 1.55, zIndex: 17 },
  ]

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Falling Tags Layer */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {tagData.map((tag, i) => (
          <FloatingTag
            key={i}
            text={tag.text}
            dark={tag.dark}
            delay={tag.delay}
            x={tag.x}
            y={tag.y}
            rotate={tag.rotate}
            zIndex={tag.zIndex}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-4xl h-[420px] rounded-3xl bg-white/65 backdrop-blur-md" />
        </div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-center max-w-4xl relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            <span className="block mb-2">이삭줍는 개발자</span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #f0675d, #e85a3a)',
              }}
            >
              이현규
            </span>
            <span className="block text-foreground">입니다!</span>
          </h1>
        </motion.div>

        {/* Role Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap gap-3 justify-center mt-6 mb-4 relative z-10"
        >
          <span className="px-5 py-2 bg-[#111] text-white rounded-full text-sm font-semibold">
            주전공 · 프론트엔드 개발자
          </span>
          <span className="px-5 py-2 border-2 border-[#111] text-[#111] rounded-full text-sm font-semibold">
            부전공 · 웹/앱 UI/UX 디자이너
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-base sm:text-lg text-muted-foreground mt-4 max-w-xl text-center relative z-10"
        >
          사용자의 사용성을 개선하고, 의미 있는 경험을 만드는 것을 즐깁니다.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex gap-4 mt-10 relative z-10"
        >
          <a
            href="mailto:ccumihk@gmail.com"
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#f0675d' }}
          >
            <Mail className="w-4 h-4" />
            이메일 보내기
          </a>
          <a
            href="https://github.com/lhyunkyu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-[#111] text-[#111] rounded-lg font-semibold hover:bg-[#111] hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        variants={scrollVariants}
        animate="animate"
      >
        <ChevronDown className="w-8 h-8" style={{ color: '#f0675d' }} />
      </motion.div>
    </section>
  )
}
