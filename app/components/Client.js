
'use client'
import AboutSection from "./homepage/about";
// import ContactSection from "./homepage/contact";
import Education from "./homepage/education";
import HeroSection from "./homepage/hero-section";
import Projects from "./homepage/projects";


function HomeClient() {

  return (
		<div suppressHydrationWarning>
			<HeroSection />
			<AboutSection />
			<Education />
			<Projects />
			{/* <ContactSection /> */}
		</div>
  );
};

export default  HomeClient;