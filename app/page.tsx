import { HeroSection } from '@/components/hero-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { OtherProjects } from '@/components/other-projects'
import { CompetitionsSection } from '@/components/competitions-section'
import { ValuesSection } from '@/components/values-section'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FeaturedProjects />
      <OtherProjects />
      <CompetitionsSection />
      <ValuesSection />
    </main>
  )
}
