import HeroSection from "@/components/home/HeroSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import NewArrivals from "@/components/home/NewArrivals";
import CustomTailoring from "@/components/home/CustomTailoring";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import InstagramGallery from "@/components/home/InstagramGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <NewArrivals />
      <CustomTailoring />
      <WhyChooseUs />
      <Testimonials />
      <InstagramGallery />
    </>
  );
}
