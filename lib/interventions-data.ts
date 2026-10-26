export interface Intervention {
  slug: string;
  departmentCode: string;
  name: string;
  title: string;
  description: string;
  content: string;
  cities: string[];
}

export const interventions: Intervention[] = [
  {
    slug: "paris",
    departmentCode: "75",
    name: "Paris",
    title: "Traitement de l'Humidité à Paris (75) | Diagnostic Gratuit 48h",
    description:
      "Expertise et assèchement des murs, caves voûtées et appartements parisiens (75). Traitement du salpêtre, des remontées capillaires et condensation. Garantie décennale 10 ans.",
    cities: [
      "Paris 1er à 20e",
      "Le Marais",
      "Montmartre",
      "Batignolles",
      "Bastille",
      "Passy",
    ],
    content:
      "L'architecture typique de Paris, notamment les immeubles haussmanniens en pierre de taille et les anciennes constructions en moellons de plâtre, est particulièrement vulnérable aux désordres d'humidité. Les caves voûtées, la porosité naturelle de la pierre calcaire, les cours intérieures peu ventilées et la densité urbaine favorisent le développement rapide du salpêtre, des cloquages d'enduits et des moisissures.\n\nNos experts BATIHUMI interviennent dans tous les arrondissements parisiens sous 24 à 48 heures. Grâce à nos protocoles éprouvés (injections de résine hydrofuge certifiée, cuvelage étanche norme DTU 14.1, et installation de systèmes de ventilation positive hygroréglables), nous assainissons définitivement votre logement avec garantie décennale.",
  },
  {
    slug: "hauts-de-seine",
    departmentCode: "92",
    name: "Hauts-de-Seine",
    title:
      "Traitement de l'Humidité dans les Hauts-de-Seine (92) | BATIHUMI Siège",
    description:
      "Intervention locale sous 24h dans les Hauts-de-Seine (92). Assèchement de murs, cuvelage et diagnostic gratuit à Asnières, Boulogne, Nanterre, Neuilly, Courbevoie.",
    cities: [
      "Asnières-sur-Seine",
      "Boulogne-Billancourt",
      "Nanterre",
      "Neuilly-sur-Seine",
      "Courbevoie",
      "Colombes",
      "Levallois-Perret",
      "Rueil-Malmaison",
      "Issy-les-Moulineaux",
      "Antony",
    ],
    content:
      "Basée à Asnières-sur-Seine, l'équipe BATIHUMI est au cœur du département des Hauts-de-Seine (92). Des pavillons bordant la Seine aux résidences récentes et copropriétés des années 70, nous traitons régulièrement des problèmes d'humidité ascensionnelle, de condensation excessive et d'infiltrations en sous-sol.\n\nNotre proximité nous permet de garantir un diagnostic gratuit sous 24 à 48 heures partout dans le 92. Nos techniciens qualifiés réalisent des mesures hygrométriques de précision et déploient des solutions durables pour valoriser et protéger votre patrimoine immobilier.",
  },
  {
    slug: "seine-saint-denis",
    departmentCode: "93",
    name: "Seine-Saint-Denis",
    title: "Traitement Humidité en Seine-Saint-Denis (93) | Diagnostic Gratuit",
    description:
      "Éradication définitive de l'humidité, des moisissures et du salpêtre dans le 93 (Saint-Denis, Montreuil, Pantin, Aubervilliers). Diagnostic sans frais.",
    cities: [
      "Saint-Denis",
      "Montreuil",
      "Pantin",
      "Aubervilliers",
      "Aulnay-sous-Bois",
      "Bobigny",
      "Noisy-le-Grand",
      "Le Blanc-Mesnil",
    ],
    content:
      "En Seine-Saint-Denis (93), de nombreuses habitations individuelles et copropriétés subissent des ponts thermiques marqués, une ventilation défaillante ou des remontées capillaires dégradant les plâtres et peintures. La présence de traces noires de moisissures ou d'odeurs persistantes d'humidité nuit à la santé des occupants et à la salubrité du bâtiment.\n\nBATIHUMI apporte des réponses techniques concrètes : barrière d'étanchéité par injection sous pression, traitement fongicide curatif et renouvellement d'air par VMI/VMC. Nous nous déplaçons rapidement dans tout le département 93.",
  },
  {
    slug: "val-de-marne",
    departmentCode: "94",
    name: "Val-de-Marne",
    title:
      "Traitement de l'Humidité dans le Val-de-Marne (94) | Solutions Durables",
    description:
      "Spécialiste assèchement des murs et remontées d'eau dans le 94 (Créteil, Vincennes, Saint-Maur, Vitry, Champigny). Garantie décennale 10 ans.",
    cities: [
      "Créteil",
      "Vincennes",
      "Saint-Maur-des-Fossés",
      "Vitry-sur-Seine",
      "Champigny-sur-Marne",
      "Ivry-sur-Seine",
      "Fontenay-sous-Bois",
      "Maisons-Alfort",
    ],
    content:
      "Le Val-de-Marne (94), traversé par la Seine et la Marne, se caractérise par des nappes phréatiques superficielles et des terrains argileux sensibles aux infiltrations d'eau. Les rez-de-chaussée et sous-sols sont fréquemment touchés par la pression hydrostatique et les remontées capillaires.\n\nBATIHUMI est le référent local pour bloquer les arrivées d'humidité à la racine. Nos barrières chimiques imperméables et nos enduits de cuvelage haute résistance garantissent un résultat pérenne et certifié.",
  },
  {
    slug: "yvelines",
    departmentCode: "78",
    name: "Yvelines",
    title:
      "Traitement de l'Humidité dans les Yvelines (78) | Maisons Anciennes & Pavillons",
    description:
      "Diagnostic humidité et traitement salpêtre, mérules et infiltrations dans les Yvelines (78 : Versailles, Saint-Germain-en-Laye, Poissy, Sartrouville).",
    cities: [
      "Versailles",
      "Saint-Germain-en-Laye",
      "Sartrouville",
      "Poissy",
      "Mantes-la-Jolie",
      "Rambouillet",
      "Conflans-Sainte-Honorine",
      "Plaisir",
    ],
    content:
      "Le département des Yvelines (78) compte un patrimoine exceptionnel de demeures en meulière, maisons en pierre ancienne et propriétés arborées. Ces bâtis anciens nécessitent une approche respectueuse des matériaux traditionnels pour réguler l'humidité sans bloquer la respiration des maçonneries.\n\nBATIHUMI met son savoir-faire au service des propriétaires des Yvelines : traitement assainissant anti-salpêtre, pose de barrières hydrophobes et cuvelage de sous-sols aménageables.",
  },
  {
    slug: "essonne",
    departmentCode: "91",
    name: "Essonne",
    title: "Traitement de l'Humidité en Essonne (91) | Éradication Infiltrations",
    description:
      "Diagnostic et assèchement de murs en Essonne (91 : Évry, Corbeil, Massy, Palaiseau, Sainte-Geneviève-des-Bois). Devis gratuit sous 48h.",
    cities: [
      "Évry-Courcouronnes",
      "Corbeil-Essonnes",
      "Massy",
      "Savigny-sur-Orge",
      "Palaiseau",
      "Sainte-Geneviève-des-Bois",
      "Viry-Châtillon",
      "Athis-Mons",
    ],
    content:
      "Dans l'Essonne (91), les variations de niveau de nappe et la nature des sols créent des phénomènes d'infiltration latérale dans les fondations de maisons individuelles. L'humidité se diffuse verticalement dans les murs habitables, provoquant décollements de revêtements et sensation de froid permanent.\n\nBATIHUMI propose des diagnostics instrumentés complets en Essonne pour mesurer avec exactitude la saturation en eau des parois et prescrire le traitement idoine.",
  },
  {
    slug: "val-doise",
    departmentCode: "95",
    name: "Val-d'Oise",
    title:
      "Traitement Humidité & Assèchement Val-d'Oise (95) | Diagnostic Immédiat",
    description:
      "Expert anti-humidité dans le 95 (Argenteuil, Cergy, Sarcelles, Pontoise, Franconville). Injections de résine & cuvelage étanche garanti 10 ans.",
    cities: [
      "Argenteuil",
      "Cergy",
      "Sarcelles",
      "Garges-lès-Gonesse",
      "Franconville",
      "Pontoise",
      "Goussainville",
      "Bezons",
    ],
    content:
      "Le Val-d'Oise (95) réunit zones urbaines denses et zones résidentielles pavillonnaires exposées aux ruissellements et infiltrations d'eaux pluviales. Les fissures de façade ou l'absence d'étanchéité sous le niveau du sol entraînent des désordres majeurs.\n\nNos techniciens BATIHUMI interviennent dans tout le Val-d'Oise pour stopper les arrivées d'eau, assainir les caves et améliorer la qualité de l'air ambiant grâce à des systèmes de ventilation positive performants.",
  },
  {
    slug: "seine-et-marne",
    departmentCode: "77",
    name: "Seine-et-Marne",
    title: "Traitement de l'Humidité en Seine-et-Marne (77) | Maisons de Campagne & Pavillons",
    description:
      "Traitement des remontées capillaires, caves humides et façades en Seine-et-Marne (77 : Meaux, Chelles, Melun, Pontault-Combault, Fontainebleau).",
    cities: [
      "Meaux",
      "Chelles",
      "Melun",
      "Pontault-Combault",
      "Savigny-le-Temple",
      "Fontainebleau",
      "Villeparisis",
      "Torcy",
    ],
    content:
      "Plus grand département francilien, la Seine-et-Marne (77) abrite de nombreux corps de ferme rénovés, maisons de campagne et pavillons exposés à des terrains humides et des cours d'eau. Sans barrière d'étanchéité moderne à la base des murs, l'humidité du sol migre en continu par capillarité.\n\nBATIHUMI apporte des technologies d'assèchement de pointe pour stopper définitivement les remontées d'eau en Seine-et-Marne, éliminer les sels hygroscopiques et réhabiliter vos sous-sols.",
  },
];

export function getInterventionBySlug(slug: string): Intervention | undefined {
  return interventions.find((i) => i.slug === slug);
}
