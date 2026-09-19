import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceIncludes } from "@/components/service/service-includes";
import { ServicePricing } from "@/components/service/service-pricing";
import { WhyChooseUs } from "@/components/service/why-choose-us";
import { RelatedServices } from "@/components/service/related-services";
import { Reviews } from "@/components/reviews";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { FadeIn } from "@/components/fade-in";
import { getServiceBySlug, services } from "@/lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Batihumi`,
      description: service.shortDescription,
      url: `https://www.batihumi.com/services/${service.slug}`,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <ServiceHero service={service} />
      <FadeIn>
        <ServiceIncludes service={service} />
      </FadeIn>
      <FadeIn>
        <ServicePricing />
      </FadeIn>
      <FadeIn>
        <WhyChooseUs />
      </FadeIn>
      <FadeIn>
        <Reviews />
      </FadeIn>
      <FadeIn>
        <RelatedServices current={service} />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <FadeIn>
        <Faq />
      </FadeIn>
      <Footer />
    </>
  );
}
