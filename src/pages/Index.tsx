import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SaleBanner from "@/components/SaleBanner";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const AFFILIATE_LINK = "https://uhtkc.com/g/wjom4sbr3de5febcc6e62443ba1a12/?erid=2bL9aMPo2e49hMef4pfyz9zt5N";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero affiliateLink={AFFILIATE_LINK} />
      <SaleBanner affiliateLink={AFFILIATE_LINK} />
      <Categories affiliateLink={AFFILIATE_LINK} />
      <Benefits />
      <FinalCTA affiliateLink={AFFILIATE_LINK} />
      <Footer />
    </div>
  );
};

export default Index;
