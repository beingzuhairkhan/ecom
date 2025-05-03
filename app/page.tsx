import { HeroSection } from "@/components/home/hero-section";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { CTASection } from "@/components/home/cta-section";
import { Testimonials } from "@/components/home/testimonials";
import { BrandsSection } from "@/components/home/brands-section";
import { CustomerLayout } from "@/components/layout/customer-layout";

export default function Home() {
  return (
    <CustomerLayout>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <CTASection />
      <Testimonials />
      <BrandsSection />
    </CustomerLayout>
  );
}