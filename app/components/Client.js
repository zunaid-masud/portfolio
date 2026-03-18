'use client'

import dynamic from 'next/dynamic';

// Disable SSR for components that may use browser APIs
const HeroSection = dynamic(() => import("./homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./homepage/about"), { ssr: false });
const Education = dynamic(() => import("./homepage/education"), { ssr: false });
const Projects = dynamic(() => import("./homepage/projects"), { ssr: false });

function HomeClient() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Education />
      <Projects />
    </div>
  );
}

export default HomeClient;