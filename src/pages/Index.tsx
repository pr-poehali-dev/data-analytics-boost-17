import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import OurProjects from "@/components/OurProjects";
import OurPartners from "@/components/OurPartners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <OurProjects />
      <OurPartners />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;
