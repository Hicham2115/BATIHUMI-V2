import {
  Beaker,
  Droplets,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type ServiceInclude = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  includes: ServiceInclude[];
};

export const services: Service[] = [
  {
    slug: "diagnostic-offert",
    number: "01",
    title: "Diagnostic offert",
    shortDescription:
      "Analyse complète et gratuite de vos problèmes d'humidité par nos experts.",
    description:
      "Avant toute intervention, notre technicien se déplace gratuitement chez vous pour identifier l'origine exacte de vos problèmes d'humidité. Un diagnostic sérieux et sans engagement, condition indispensable à un traitement durable.",
    image: "/images/diagnostic-offert.png",
    includes: [
      {
        icon: Waves,
        title: "Inspection visuelle complète",
        description:
          "Examen de chaque zone touchée : murs, sols, plinthes et points singuliers.",
      },
      {
        icon: Droplets,
        title: "Mesure du taux d'humidité",
        description:
          "Relevés à l'hygromètre pour quantifier précisément l'ampleur du problème.",
      },
      {
        icon: FlaskConical,
        title: "Identification de la cause",
        description:
          "Remontées capillaires, infiltration ou condensation : nous cherchons la source, pas le symptôme.",
      },
      {
        icon: ShieldCheck,
        title: "Rapport écrit sous 48h",
        description:
          "Un compte-rendu détaillé et un devis transparent, sans obligation d'achat.",
      },
    ],
  },
  {
    slug: "humidite-ascensionnelle",
    number: "02",
    title: "Traitement de l'humidité ascensionnelle",
    shortDescription:
      "Élimination définitive des remontées capillaires grâce à nos techniques éprouvées.",
    description:
      "Les remontées capillaires font monter l'eau du sol dans vos murs par capillarité. Nous traitons ce phénomène à la racine avec des techniques d'injection éprouvées, pour un mur durablement sec.",
    image: "/images/humidite-ascensionnelle.png",
    includes: [
      {
        icon: Waves,
        title: "Diagnostic des remontées capillaires",
        description:
          "Identification précise de la hauteur et de l'étendue des remontées d'eau.",
      },
      {
        icon: Beaker,
        title: "Injection de résine hydrofuge",
        description:
          "Création d'une barrière étanche en profondeur pour bloquer la capillarité.",
      },
      {
        icon: SprayCan,
        title: "Traitement des enduits salpêtrés",
        description:
          "Purge des enduits dégradés et application d'un enduit assainissant.",
      },
      {
        icon: ShieldCheck,
        title: "Contrôle post-traitement",
        description:
          "Vérification du bon assèchement des murs après intervention.",
      },
    ],
  },
  {
    slug: "injection-resine",
    number: "03",
    title: "Injection de résine",
    shortDescription:
      "Traitement par injection de produits hydrofuges pour créer une barrière étanche.",
    description:
      "L'injection de résine hydrofuge sous pression crée une barrière continue à la base des murs, empêchant durablement l'eau de remonter par capillarité.",
    image: "/images/injection-resine.png",
    includes: [
      {
        icon: Waves,
        title: "Perçage en quinconce",
        description:
          "Forages réguliers à la base des murs, adaptés à leur épaisseur.",
      },
      {
        icon: Beaker,
        title: "Injection sous pression",
        description:
          "Résine hydrofuge injectée en profondeur pour saturer la maçonnerie.",
      },
      {
        icon: ShieldCheck,
        title: "Barrière étanche continue",
        description:
          "Une coupure de capillarité homogène sur toute la longueur du mur.",
      },
      {
        icon: SprayCan,
        title: "Rebouchage et finition",
        description:
          "Finition soignée, prête à recevoir un nouvel enduit ou une peinture.",
      },
    ],
  },
  {
    slug: "assechement-murs",
    number: "04",
    title: "Assèchement des murs",
    shortDescription:
      "Techniques d'assèchement adaptées à chaque type de construction et de problème.",
    description:
      "Une fois la cause traitée, l'humidité résiduelle doit être évacuée. Nous adaptons nos techniques d'assèchement à la nature de vos murs pour un résultat rapide et durable.",
    image: "/images/assechement-murs.png",
    includes: [
      {
        icon: Wind,
        title: "Évacuation de l'humidité résiduelle",
        description:
          "Techniques adaptées à l'épaisseur et à la nature de vos murs.",
      },
      {
        icon: Waves,
        title: "Ventilation et déshumidification",
        description:
          "Mise en place de solutions ciblées pour accélérer le séchage.",
      },
      {
        icon: SprayCan,
        title: "Traitement des supports abîmés",
        description:
          "Reprise des enduits et surfaces dégradées par l'humidité.",
      },
      {
        icon: ShieldCheck,
        title: "Suivi dans le temps",
        description:
          "Contrôle régulier de l'évolution de l'assèchement jusqu'à stabilisation.",
      },
    ],
  },
  {
    slug: "protection-hydrofuge",
    number: "05",
    title: "Protection hydrofuge",
    shortDescription:
      "Application de produits de protection pour prévenir les infiltrations d'eau.",
    description:
      "Nos traitements hydrofuges protègent vos façades contre les infiltrations d'eau de pluie, tout en laissant le mur respirer, pour éviter tout effet de rétention.",
    image: "/images/protection-hydrofuge.png",
    includes: [
      {
        icon: SprayCan,
        title: "Hydrofuge de façade respirant",
        description: "Application d'un traitement qui laisse le mur respirer.",
      },
      {
        icon: Droplets,
        title: "Protection contre la pluie battante",
        description:
          "Une barrière efficace contre les infiltrations d'eau de pluie.",
      },
      {
        icon: Wind,
        title: "Préservation de la respirabilité",
        description:
          "Le mur continue d'évacuer sa vapeur d'eau naturellement.",
      },
      {
        icon: ShieldCheck,
        title: "Protection longue durée",
        description: "Un traitement pensé pour durer plusieurs années.",
      },
    ],
  },
  {
    slug: "traitement-moisissures",
    number: "06",
    title: "Traitement des moisissures",
    shortDescription:
      "Élimination et prévention des moisissures pour un environnement sain.",
    description:
      "Les moisissures ne sont qu'un symptôme. Nous les éliminons en profondeur et traitons leur cause pour un intérieur sain, durablement débarrassé du problème.",
    image: "/images/traitement-moisissures.png",
    includes: [
      {
        icon: SprayCan,
        title: "Traitement fongicide",
        description:
          "Application d'un produit fongicide sur toutes les surfaces touchées.",
      },
      {
        icon: Beaker,
        title: "Élimination des spores en profondeur",
        description:
          "Nettoyage en profondeur pour éviter toute réapparition rapide.",
      },
      {
        icon: Waves,
        title: "Correction de la source d'humidité",
        description:
          "Traitement de la cause réelle : condensation, infiltration ou remontée.",
      },
      {
        icon: Wind,
        title: "Conseils de ventilation",
        description:
          "Recommandations pratiques pour éviter la récidive au quotidien.",
      },
    ],
  },
  {
    slug: "etancheite-murs",
    number: "07",
    title: "Étanchéité des murs",
    shortDescription:
      "Renforcement de l'étanchéité pour une protection durable contre l'humidité.",
    description:
      "Fissures, joints dégradés, points d'infiltration : nous renforçons l'étanchéité de vos murs pour une protection durable contre toutes les entrées d'eau.",
    image: "/images/etancheite-murs.png",
    includes: [
      {
        icon: Waves,
        title: "Diagnostic des points d'infiltration",
        description:
          "Localisation précise des entrées d'eau dans la maçonnerie.",
      },
      {
        icon: SprayCan,
        title: "Membranes et enduits d'étanchéité",
        description:
          "Application de solutions adaptées à chaque type de support.",
      },
      {
        icon: Beaker,
        title: "Traitement des fissures et joints",
        description: "Reprise des points faibles à l'origine des infiltrations.",
      },
      {
        icon: ShieldCheck,
        title: "Protection durable",
        description: "Une étanchéité pensée pour résister dans le temps.",
      },
    ],
  },
  {
    slug: "traitement-anti-salpetre",
    number: "08",
    title: "Traitement anti-salpêtre",
    shortDescription:
      "Élimination des traces blanches et cristallisations causées par l'humidité.",
    description:
      "Le salpêtre est le signe visible d'une humidité mal traitée. Nous éliminons ces dépôts et neutralisons les sels minéraux pour un résultat propre et durable.",
    image: "/images/traitement-anti-salpetre.png",
    includes: [
      {
        icon: SprayCan,
        title: "Brossage et décapage",
        description:
          "Retrait mécanique des dépôts et cristallisations de salpêtre.",
      },
      {
        icon: Beaker,
        title: "Neutralisation des sels minéraux",
        description:
          "Traitement chimique pour stopper la remontée des sels.",
      },
      {
        icon: Sparkles,
        title: "Enduit assainissant",
        description:
          "Application d'un enduit spécifique qui limite la réapparition.",
      },
      {
        icon: ShieldCheck,
        title: "Finition et remise en peinture",
        description: "Un mur propre, prêt à être repeint si vous le souhaitez.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
