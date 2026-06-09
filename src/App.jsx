import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { StatisticsSection } from "./components/StatisticsSection";
import { DisciplinesSection } from "./components/DisciplinesSection";
import { CoachesSection } from "./components/CoachesSection";
import { PricingSection } from "./components/PricingSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    // Simple fade-in effect on scroll
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.style.opacity = "1";
        }
      });
    }, observerOptions);

    document.querySelectorAll("section > div").forEach((el) => {
      el.style.opacity = "0";
      el.style.transition = "all 0.8s ease-out";
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <StatisticsSection />
        <DisciplinesSection />
        <CoachesSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

export default App;
