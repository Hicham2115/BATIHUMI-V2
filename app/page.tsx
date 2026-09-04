import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { AudienceSegments } from "@/components/audience-segments";
import { Services } from "@/components/services";
import { Realisations } from "@/components/realisations";
import { SaleExpertise } from "@/components/sale-expertise";
import { Reviews } from "@/components/reviews";
import { CoverageArea } from "@/components/coverage-area";
import { Faq } from "@/components/faq";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FadeIn>
        <AudienceSegments />
      </FadeIn>
      <FadeIn>
        <CoverageArea />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <Realisations />
      </FadeIn>
      <FadeIn>
        <SaleExpertise />
      </FadeIn>
      <FadeIn>
        <Reviews />
      </FadeIn>
      <FadeIn>
        <Faq />
      </FadeIn>
      <Footer />
    </>
  );
}
