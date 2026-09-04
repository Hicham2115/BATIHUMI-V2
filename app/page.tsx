import { Header } from "@/components/layout/header";
import { Hero } from "@/components/hero";
import { AudienceSegments } from "@/components/audience-segments";
import { Services } from "@/components/services";
import { Realisations } from "@/components/realisations";
import { SaleExpertise } from "@/components/sale-expertise";
import { CoverageArea } from "@/components/coverage-area";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AudienceSegments />
      <CoverageArea />
      <Services />
      <Realisations />
      <SaleExpertise />
    </>
  );
}
