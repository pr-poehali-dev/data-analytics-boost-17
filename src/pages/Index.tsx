import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import OurProjects from "@/components/OurProjects";
import OurPartners from "@/components/OurPartners";
import PremiumSubscription from "@/components/PremiumSubscription";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <About />
      <OurProjects />
      <OurPartners />
      <PremiumSubscription />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;
