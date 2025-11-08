import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProperties />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <LatestBlogPosts />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
