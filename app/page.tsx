import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "FirstCustomer.ai – Simulate Your First Customer in Seconds",
  description:
    "FirstCustomer.ai lets you chat with AI personas, refine your pitch, and test marketing—before you write a single line of code.",
  openGraph: {
    type: "website",
    url: "https://firstcustomer.ai",
    title: "FirstCustomer.ai – Simulate Your First Customer in Seconds",
    description:
      "Chat with AI personas, refine your investor pitch, and validate demand—instantly and risk-free.",
    images: [
      {
        url: "https://firstcustomer.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "FirstCustomer.ai — Simulate your first customer with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FirstCustomerAI",                // your Twitter handle
    title: "FirstCustomer.ai – Simulate Your First Customer",
    description:
      "Experience AI-driven customer simulation, pitch practice, and marketing tests—all in one place.",
    images: ["https://firstcustomer.ai/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
