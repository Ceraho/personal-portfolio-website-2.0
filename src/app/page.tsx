import HeroSection from "@/components/section/hero-section";
import AboutMeSection from "@/components/section/about-me-section";
import TimelineSection from "@/components/section/timeline-section";
import ProjectsSection from "@/components/section/projects-section";
import ContactSection from "@/components/section/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
