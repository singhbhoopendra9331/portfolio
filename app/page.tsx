import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';
import { PageTransition } from '@/components/page-transition';

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection /> 
      <ContactSection />
    </PageTransition>
  );
}
