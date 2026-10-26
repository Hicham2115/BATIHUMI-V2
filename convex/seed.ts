import { internalMutation } from "./_generated/server";

export const articles = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existingArticles = await ctx.db.query("articles").collect();
    if (existingArticles.length > 0) {
      for (const article of existingArticles) {
        await ctx.db.delete(article._id);
      }
    }

    const newArticles = [
      {
        title:
          "Condensation ou infiltration : comment identifier la vraie cause de l'humidité ?",
        slug: "condensation-ou-infiltration-comment-identifier",
        imageUrl: "/images/article-condensation.png",
        description:
          "L'humidité dans votre logement peut provenir de multiples sources. Apprenez à différencier la condensation due à un manque de ventilation d'une véritable infiltration d'eau pour appliquer le traitement adéquat en Île-de-France.",
        content: `L'humidité est l'un des fléaux les plus courants dans les logements, particulièrement en Île-de-France où les variations climatiques et l'ancienneté de certains bâtiments favorisent son apparition. Mais avant d'envisager des travaux coûteux, il est crucial d'identifier l'origine exacte du problème. S'agit-il de condensation ou d'une infiltration d'eau ? 

## 1. La Condensation : l'ennemi invisible de l'air intérieur

La condensation se forme lorsque l'air chaud et chargé d'humidité rencontre des surfaces froides (vitres, murs extérieurs non isolés, plafonds). L'humidité contenue dans l'air se transforme alors en eau.

**Les signes typiques :**
- Buée fréquente sur les vitres au réveil.
- Apparition de petites taches noires (moisissures) dans les coins des murs, les angles des plafonds ou autour des fenêtres.
- Odeur de renfermé, particulièrement dans les pièces humides (salle de bain, cuisine, chambre).
- Sensation de froid malgré le chauffage.

**Les causes principales :**
- **Mauvaise ventilation :** Absence de VMC, grilles d'aération bouchées, ou VMC défectueuse.
- **Activités humaines :** Douches, cuisson, séchage du linge à l'intérieur génèrent des litres d'eau sous forme de vapeur chaque jour.
- **Défaut d'isolation :** Les parois froides attirent l'humidité.

## 2. Les Infiltrations d'eau : quand la structure est touchée

Contrairement à la condensation qui vient de l'intérieur, les infiltrations proviennent de l'extérieur. L'eau pénètre à travers la toiture, les murs de façade ou les fondations défectueuses.

**Les signes typiques :**
- Taches d'humidité souvent ciblées et grandissantes (auréoles jaunâtres ou brunâtres).
- Décollement des papiers peints ou cloquage de la peinture à un endroit précis.
- Fissures apparentes sur la façade ou tuiles déplacées sur le toit.
- Apparition d'eau lors d'épisodes pluvieux.

**Les causes principales :**
- Toiture endommagée (tuiles cassées, zinguerie défectueuse).
- Façade poreuse ou fissurée.
- Jointures de menuiseries (fenêtres, portes) abîmées.

## 3. Comment faire la différence ?

Voici une méthode simple pour faire le tri :
- **Localisation :** Si la moisissure est partout (coins, plafonds), il s'agit probablement de condensation. Si la tache est isolée et s'agrandit par temps de pluie, c'est une infiltration.
- **Saisonnalité :** La condensation est plus fréquente en hiver (contraste thermique). L'infiltration dépend directement des intempéries.
- **Test du papier d'aluminium :** Fixez un carré de papier d'aluminium sur votre mur humide avec du ruban adhésif. Si, après 24 à 48 heures, des gouttes d'eau se forment sur la face extérieure du papier (côté pièce), c'est de la condensation. Si l'eau se forme entre le mur et le papier (face cachée), c'est une infiltration ou une remontée capillaire !

## 4. Les solutions adaptées

### Pour la condensation :
La clé est le renouvellement de l'air.
- Installation ou rénovation de votre système de ventilation (VMC simple flux, VMC double flux ou VMI).
- Aération quotidienne (10 à 15 minutes par jour, même en hiver).
- Amélioration de l'isolation thermique pour supprimer les ponts froids.

### Pour les infiltrations :
Il faut traiter la source extérieure.
- Réparation de la toiture ou de la façade.
- Traitement hydrofuge des murs extérieurs.
- Remplacement ou réparation des joints de fenêtres.

**Attention :** Un mauvais diagnostic entraîne des travaux inutiles. Il est fréquent d'investir dans une isolation alors que le problème vient d'une ventilation défaillante, ce qui aggravera la situation ! 

Pour être certain de l'origine de vos problèmes d'humidité, rien ne remplace l'œil d'un expert. Chez BATIHUMI, nous réalisons un diagnostic précis et gratuit en Île-de-France pour vous proposer la solution pérenne et adaptée à votre logement.`,
        published: true,
      },
      {
        title:
          "Mérule ou simple moisissure : les signes qui doivent vous alerter",
        slug: "merule-ou-simple-moisissure-signes-alerte",
        imageUrl: "/images/article-merule.png",
        description:
          "Découvrez comment différencier la redoutable mérule, véritable cancer du bâtiment, d'une simple moisissure de surface. Apprenez à repérer les signes d'alerte pour agir avant qu'il ne soit trop tard.",
        content: `Lorsque des taches sombres apparaissent sur les murs ou les boiseries de votre logement, l'inquiétude est naturelle. L'humidité est souvent en cause, mais il est capital de savoir faire la différence entre une "simple" moisissure de surface et la mérule pleureuse, souvent surnommée le "cancer du bâtiment". 

Bien que les deux soient des champignons, leurs conséquences sur votre maison et sur votre santé sont radicalement différentes.

## 1. La moisissure : inesthétique et allergène

Les moisissures sont des champignons microscopiques qui se développent en surface lorsque le taux d'humidité est excessif et que la ventilation est insuffisante (souvent liée à la condensation).

**Comment la reconnaître ?**
- **Apparence :** Petites taches noires, vertes, grises ou blanchâtres.
- **Texture :** Souvent duveteuse ou poudreuse en surface.
- **Localisation :** Sur les joints de carrelage, autour des fenêtres, dans les angles des murs, sur les plafonds des pièces humides (salle de bain, cuisine).
- **Odeur :** Odeur caractéristique de moisi ou de renfermé.

**Les conséquences :**
La moisissure attaque rarement la structure du bâtiment (bien qu'elle puisse abîmer les peintures et papiers peints). Son principal danger est sanitaire : elle libère des spores responsables d'allergies, d'asthme et de problèmes respiratoires.

**Le traitement :**
Le nettoyage de surface (avec des produits adaptés, évitez la javel pure sur les surfaces poreuses) doit s'accompagner d'une résolution du problème d'humidité à la source (généralement par l'installation d'une VMC ou VMI performante).

## 2. La Mérule : le cancer du bâtiment

La mérule (*Serpula lacrymans*) est un champignon lignivore, c'est-à-dire qu'elle se nourrit de la cellulose du bois. Elle a la capacité terrifiante de traverser la maçonnerie pour aller chercher l'eau et attaquer les bois environnants.

**Comment la reconnaître ?**
- **Apparence :** À son stade végétatif, elle ressemble à une toile d'araignée blanche, ou une ouate épaisse. En fructifiant, elle forme une masse charnue (un carpophore) en forme de crêpe épaisse, de couleur rouille ou brun-rouge, avec des bords blancs.
- **Texture :** Charnue, cotonneuse.
- **Localisation :** Elle se cache dans l'obscurité, le confinement et l'humidité (plinthes, derrière les cloisons, sous les planchers, dans les caves, les combles). Elle attaque les bois d'œuvre (charpentes, poutres, planchers).
- **Symptômes sur le bois :** Le bois se ramollit, brunit et se fragmente en petits cubes réguliers (c'est ce qu'on appelle la "pourriture cubique"). Le bois perd toute sa résistance mécanique.

**Les conséquences :**
La mérule est dévastatrice. Elle dévore littéralement la structure en bois de votre maison, menaçant la solidité du bâtiment. Sans intervention rapide, les charpentes ou les planchers peuvent s'effondrer. Elle nécessite d'ailleurs une déclaration obligatoire en mairie dans certaines zones.

## 3. Le tableau comparatif

| Caractéristique | Moisissure | Mérule |
| :--- | :--- | :--- |
| **Nourriture** | Matières organiques de surface, poussière | Cellulose du bois |
| **Danger principal** | Santé (voies respiratoires) | Structure du bâtiment (effondrement) |
| **Localisation type** | Surfaces visibles, pièces humides | Endroits confinés, sombres, bois d'œuvre |
| **Aspect** | Taches piquetées, noires/vertes | Cotonneux blanc, puis masse orangée/brune |
| **Croissance** | Lente, reste en surface | Très rapide, traverse les murs et joints |

## 4. Que faire en cas de doute ?

Si vous suspectez la présence de mérule : **ne grattez surtout pas le champignon** et n'utilisez pas d'eau de Javel. Gratter risquerait de disperser les spores dans l'air, et la Javel lui apporte l'eau dont elle a besoin pour accélérer son développement.

**L'intervention d'un expert est urgente.** 
Le traitement de la mérule est un processus lourd qui nécessite :
1. Le repérage précis de l'étendue de l'attaque.
2. Le bûchage et l'élimination des bois infectés.
3. Le traitement fongicide en profondeur des murs (injection).
4. Surtout, la suppression de la source d'humidité et l'assèchement du bâtiment.

Si vous avez repéré des traces suspectes chez vous en Île-de-France, n'attendez pas que la structure de votre maison soit en danger. Les experts BATIHUMI réalisent un diagnostic poussé pour identifier avec certitude le champignon en cause et proposer un traitement curatif garanti.`,
        published: true,
      },
      {
        title:
          "VMI ou VMC : quelle ventilation choisir pour assainir sa maison en Île-de-France ?",
        slug: "vmi-ou-vmc-quelle-ventilation-choisir",
        imageUrl: "/images/article-ventilation.png",
        description:
          "Pour éradiquer les problèmes de condensation et de moisissures, une bonne ventilation est indispensable. Découvrez les différences entre VMC et VMI (Ventilation Mécanique par Insufflation) et choisissez le système adapté à votre logement.",
        content: `La condensation, les moisissures sur les murs, et l'air vicié sont des problèmes récurrents dans de nombreux logements. Pour retrouver un habitat sain, ouvrir les fenêtres 10 minutes par jour ne suffit pas : une ventilation mécanique performante est indispensable.

Mais face aux différentes technologies sur le marché, le choix peut être complexe. Si la VMC (Ventilation Mécanique Contrôlée) est la plus connue, la VMI (Ventilation Mécanique par Insufflation) s'impose aujourd'hui comme une solution redoutablement efficace, particulièrement en rénovation. 

Quelles sont leurs différences et comment choisir le système idéal pour votre maison en Île-de-France ?

## 1. La VMC (Ventilation Mécanique Contrôlée) : le standard par extraction

C'est le système le plus répandu, imposé dans les constructions neuves depuis 1982.

**Le principe : l'extraction**
Le principe de la VMC repose sur la "dépression". Un groupe d'extraction (un moteur souvent situé dans les combles) aspire l'air vicié depuis les pièces humides (cuisine, salle de bain, WC) via des bouches d'extraction. Cette aspiration crée une dépression dans le logement, forçant l'air neuf extérieur à entrer par des grilles d'aération situées sur les fenêtres des pièces de vie (salon, chambres).

**Les types de VMC :**
- **VMC Simple Flux Autoréglable :** Le débit d'air est constant, quelles que soient les conditions météo ou l'humidité intérieure.
- **VMC Simple Flux Hygroréglable :** Le débit s'adapte en fonction du taux d'humidité détecté dans l'air, réduisant les déperditions de chaleur.
- **VMC Double Flux :** Récupère la chaleur de l'air extrait pour réchauffer l'air entrant, améliorant considérablement l'efficacité énergétique, mais nécessite un réseau de gaines important.

**Avantages :** 
Coût abordable (pour le simple flux), norme bien maîtrisée.

**Inconvénients (en rénovation) :**
Nécessite le passage de nombreuses gaines, fait entrer l'air froid de l'extérieur sans le filtrer ni le chauffer (en simple flux), et favorise les infiltrations d'air parasite.

## 2. La VMI (Ventilation Mécanique par Insufflation) : la solution innovante par surpression

Contrairement à la VMC qui extrait l'air, la VMI (ou VPH - Ventilation Positive Hygroréglable) insuffle de l'air neuf dans le logement.

**Le principe : l'insufflation**
L'air extérieur est aspiré par un moteur (souvent installé dans les combles), puis il est filtré et légèrement préchauffé (généralement autour de 15°C) avant d'être insufflé dans les pièces de vie. Cette insufflation crée une légère "surpression" dans le logement. L'air vicié, humide et pollué est alors naturellement chassé vers l'extérieur à travers les grilles d'aération des fenêtres et des bouches d'évacuation dans les pièces humides.

**Avantages majeurs de la VMI :**
- **Filtration de l'air entrant :** Les filtres de la VMI bloquent les pollens, les particules fines et la pollution extérieure, garantissant une excellente qualité d'air intérieur. Idéal pour les personnes allergiques ou asthmatiques.
- **Lutte radicale contre l'humidité :** En chassant l'air humide vers l'extérieur, la VMI règle définitivement les problèmes de condensation et de moisissures.
- **Préchauffage de l'air :** Contrairement à la VMC simple flux qui fait entrer un courant d'air glacial en hiver, la VMI insuffle un air tempéré, améliorant le confort et limitant la sensation de froid.
- **Installation facile en rénovation :** Un seul point central d'insufflation (ou deux selon la surface) suffit, évitant la pose d'un réseau complexe de gaines. L'installation est rapide et peu intrusive.

**Inconvénients :**
Investissement initial supérieur à une VMC simple flux, légère consommation électrique pour le préchauffage de l'air.

## 3. Lequel choisir pour votre projet ?

Le choix entre VMC et VMI dépend de votre situation :

- **Vous faites construire une maison neuve ?** La VMC Double Flux est souvent privilégiée pour atteindre les standards RT2012 / RE2020 grâce à son excellent rendement énergétique.
- **Vous rénovez une maison ancienne sans réseau de ventilation existant ?** La **VMI** est incontestablement la meilleure solution. Elle s'installe facilement sans gros travaux, traite l'air pollué extérieur (très utile en région parisienne) et offre un confort thermique supérieur en évitant les courants d'air froid.
- **Votre maison souffre de condensation persistante malgré une VMC ?** Le passage à une VMI permet souvent de résoudre définitivement le problème grâce à son principe de balayage complet par surpression.

## Conclusion

Ne laissez pas un système de ventilation défaillant compromettre votre santé et la pérennité de votre bâti. Un système performant est le meilleur rempart contre les désordres liés à l'humidité.

Pour déterminer la solution la plus adaptée à la configuration de votre logement et à votre budget, **faites appel aux experts BATIHUMI**. Nous réalisons un bilan ventilation complet et vous conseillons sur l'installation d'une VMC hygroréglable ou d'un système VMI dernière génération.`,
        published: true,
      },
      {
        title:
          "Traitement des remontées capillaires par injection : prix, étapes et efficacité",
        slug: "traitement-remontees-capillaires-injection-prix-etapes",
        imageUrl: "/images/download-1.jpg",
        description:
          "Découvrez tout sur l'injection de résine contre les remontées capillaires en Île-de-France : tarifs moyens, déroulement des travaux, durée d'assèchement et garanties.",
        content: `Les remontées capillaires représentent l'un des problèmes d'humidité les plus destructeurs pour les habitations en Île-de-France, en particulier pour les constructions anciennes dépourvues d'arase étanche. L'eau contenue dans le sol remonte dans la maçonnerie par porosité, transportant des sels minéraux corrosifs.

Heureusement, le traitement par injection de résine hydrofuge s'impose aujourd'hui comme la solution reine pour stopper définitivement ce phénomène. 

## 1. Comment fonctionne l'injection de résine contre l'humidité ?

L'objectif de l'injection est d'insérer au cœur du mur une barrière physique et chimique totally infranchissable par l'eau.

**Le principe technique :**
Une résine hydrophobe (souvent à base de silanes et siloxanes) est injectée sous pression ou par gravité dans des forages réalisés à la base des murs porteurs. Au contact de l'humidité présente dans la maçonnerie, la résine polymérise et se plastifie. Elle bouche l'ensemble des pores et capillaires du matériau (brique, pierre, parpaing, meulière).

Une fois le produit stabilisé, l'eau venant du sol ne peut plus monter : la barrière étanche est créée pour des dizaines d'années.

## 2. Les étapes d'un chantier d'injection réussi

Pour garantir une efficacité maximale, nos techniciens BATIHUMI appliquent une procédure rigoureuse :

1. **Diagnostic et cartographie de l'humidité :** Mesure du taux d'humidité à l'aide d'un humidimètre à pointe ou à carbure pour déterminer la hauteur exacte des remontées.
2. **Préparation des supports :** Piquage des enduits dégradés et nettoyage de la base du mur.
3. **Forage régulier :** Percement de trous d'environ 10 à 14 mm de diamètre, espacés de 10 à 12 cm, à environ 15 cm du sol fini. Les trous sont inclinés à 45° pour optimiser la diffusion.
4. **Injection de la résine hydrofuge :** Injection sous pression contrôlée de la résine jusqu'à saturation complète de la zone.
5. **Obturation des forages :** Rebouchage des trous avec un mortier spécial anti-sel.
6. **Phase d'assèchement :** Le mur commence son assèchement naturel, qui peut durer entre 6 et 12 mois selon l'épaisseur et les matériaux.

## 3. Quel est le prix d'un traitement par injection en Île-de-France ?

Le coût d'un traitement par injection de résine se calcule généralement au mètre linéaire de mur à traiter.

**Fourchettes de prix moyennes :**
- **Au mètre linéaire :** Entre 90 € et 180 € TTC par mètre linéaire, selon l'épaisseur du mur (mur de 20 cm vs mur en meulière de 50 cm) et l'accessibilité.
- **Pour une maison individuelle moyenne (25 à 40 mètres linéaires de murs porteurs) :** Comptez en moyenne entre 2 500 € et 5 000 € TTC.

**Les facteurs qui influencent le tarif :**
- L'épaisseur et le type de maçonnerie (pierre meulière, moellons, briques pleines, béton).
- Le type de résine utilisé (résine concentrée de haute qualité).
- La nécessité de travaux annexes (piquage des plâtres contaminés, pose d'un assécheur ou d'une VMI).

## 4. Pourquoi choisir l'injection plutôt qu'une autre méthode ?

- **Résultat définitif :** Traitement pérenne garanti 10 ans avec assurance décennale.
- **Peu destructif :** Pas besoin de démolir les murs ni de décaisser les fondations extérieures.
- **Adapté au bâti francilien :** Particulièrement efficace sur les pierres meulières et briques typiques de Paris et de la petite couronne (92, 93, 94).

Pour stopper les remontées capillaires avant qu'elles n'endommagent la structure de votre logement, contactez les experts BATIHUMI pour un **diagnostic et un devis gratuits** sur toute l'Île-de-France.`,
        published: true,
      },
      {
        title:
          "Comment traiter et éradiquer le salpêtre sur les murs en pierre ou brique ?",
        slug: "comment-traiter-eradiquer-salpetre-murs-pierre-brique",
        imageUrl: "/images/download.jpg",
        description:
          "Le salpêtre (nitrate de potassium) dégrade vos maçonneries et peintures. Apprenez à reconnaître ce dépôt blanc, comprendre son origine et appliquer le traitement adéquat.",
        content: `Avez-vous remarqué des traces blanches, poudreuses ou cotonneuses au bas de vos murs intérieurs ou sur les parois de votre cave ? Il s'agit très probablement de **salpêtre**, aussi appelé "sel de pierre" (nitrate de potassium).

Au-delà de son aspect particulièrement inesthétique, le salpêtre est le symptôme d'un problème d'humidité profond qui détériore progressivement vos matériaux de construction et nuit à la santé des occupants.

## 1. Qu'est-ce que le salpêtre et d'où vient-il ?

Le salpêtre est un dépôt minéral composé de sels de nitrate. Il se forme lorsque l'eau présente dans le sol remonte dans les murs par **remontée capillaire**. 

En traversant la maçonnerie, cette eau dissout les sels minéraux naturellement contenus dans le sol et les matériaux (briques, mortier, pierres). Lorsque l'eau s'évapore au contact de l'air ambiant, les sels se cristallisent à la surface du mur sous forme de traces blanches.

**Les facteurs aggravants :**
- **L'humidité ascensionnelle constante.**
- **Le manque de ventilation** dans les pièces ou les caves.
- **La présence de matières organiques** à proximité (anciennes étables, fosses, bactéries nitrifiantes).

## 2. Quels sont les dangers du salpêtre ?

### Sur le bâtiment :
Le salpêtre possède un pouvoir hygroscopique élevé : il attire et retient l'humidité de l'air. 
- **Effritement des enduits et plâtres :** Les cristaux de sel augmentent de volume en séchant, faisant éclater les peintures, crépris et papiers peints.
- **Dégradation des maçonneries :** À terme, les joints de ciment ou de chaux se réduisent en poussière, fragilisant la structure.

### Sur la santé :
Vivre dans un logement touché par le salpêtre expose les occupants à un air saturé en poussières de nitrates et moisissures.
- Risques de rhinites, bronchites et crises d'asthme.
- Allergies cutanées et irritations oculaires chez les enfants et personnes sensibles.

## 3. Les étapes pour éliminer le salpêtre définitivement

Nettoyer la surface avec de la brosse ou du vinaigre ne suffit pas : si l'humidité persiste, le salpêtre reviendra en quelques jours. Un traitement efficace comporte 3 phases indispensables.

### Étape 1 : Traiter la cause racine de l'humidité
Pour priver le salpêtre d'eau, il faut stopper les remontées capillaires. La méthode la plus fiable consiste à injecter une **résine hydrofuge** à la base du mur pour créer une arase étanche.

### Étape 2 : Assécher et assainir la pièce
L'installation d'une **ventilation mécanique par insufflation (VMI)** ou d'une VMC performante permet d'évacuer l'excès d'humidité ambiante et d'accélérer l'assèchement des parois.

### Étape 3 : Neutraliser les sels et rénover
- Piquage des plâtres et enduits contaminés jusqu'à la maçonnerie mise à nu.
- Brossage énergique et application d'un **convertisseur ou neutraliseur de sel** spécial.
- Application d'un enduit anti-salpêtre respirant (à base de chaux naturelle) avant la pose de nouveaux revêtements.

## 4. Intervention professionnelle en Île-de-France

Dans les immeubles anciens à Paris (75) ou dans les habitations des Hauts-de-Seine (92), Val-de-Marne (94) et Seine-Saint-Denis (93), les désordres liés au salpêtre sont fréquents.

Les experts BATIHUMI procèdent à un diagnostic gratuit pour analyser la concentration en nitrate de vos murs et vous proposer un plan de traitement garanti 10 ans.`,
        published: true,
      },
      {
        title:
          "Humidité en cave et sous-sol : solutions de cuvelage et ventilation à Paris & Île-de-France",
        slug: "humidite-cave-sous-sol-solutions-cuvelage-ventilation",
        imageUrl: "/images/assechement.jpg",
        description:
          "Votre cave ou sous-sol en Île-de-France est humide ? Découvrez le cuvelage étanche et la ventilation VMI/VMC pour assainir durablement vos espaces enterrés.",
        content: `En Île-de-France, et particulièrement à Paris avec ses caves voûtées haussmanniennes et ses sous-sols en pierre meulière, les espaces enterrés souffrent quasi systématiquement d'humidité. Infiltrations d'eau, suintements, odeurs de renfermé et moisissures empêchent d'utiliser ces mètres carrés précieux pour le stockage ou l'aménagement de pièces de vie.

Comment transformer une cave humide en un espace parfaitement sec et sain ? Voici le guide complet des solutions professionnelles.

## 1. Pourquoi les caves et sous-sols sont-ils si vulnérables ?

Les pièces enterrées ou semi-enterrées sont directement en contact avec la terre. Elles subissent deux pressions majeures :

1. **La pression hydrostatique :** L'eau contenue dans le sol pousse constamment contre les murs de fondation et le sol de la cave, provoquant des suintements et des infiltrations d'eau liquides.
2. **Le manque de ventilation naturelle :** Sans circulation d'air efficace, l'humidité ambiante se condense sur les parois froides, favorisant les moisissures et la pourriture des boiseries.

## 2. Le cuvelage : le bouclier étanche pour vos murs enterrés

Le **cuvelage de cave** est l'action de créer un caisson étanche hermétique à l'intérieur de la pièce enterrée pour résister à la poussée des eaux extérieures.

### Comment déroule un chantier de cuvelage ?
- **Décroutage et préparation :** Décapage complet des anciens enduits dégradés jusqu'à la pierre ou au béton brut.
- **Traitement des infiltrations ponctuelles :** Colmatage immédiat des voies d'eau et fissures avec un ciment prompt à prise rapide.
- **Application des résines et mortiers d'étanchéité :** Application de plusieurs couches croisées d'enduits d'étanchéité à base de résine époxy ou mortiers hydrofuges d'interposition.
- **Réalisation d'une chappe étanche :** Traitement de la jonction mur/sol (solin d'étanchéité) et coulage d'une dalle/chappe étanche si nécessaire.

Le cuvelage garantit une étanchéité totale, même sous pression d'eau importante !

## 3. La ventilation de cave : indispensabe pour chasser le moisi

Faire un cuvelage sans ventilation ne résout que la moitié du problème. Pour assainir l'air ambiant et éviter la stagnation de la buée, une ventilation dédiée est indispensable.

**La VMI (Ventilation Mécanique par Insufflation) spécial cave :**
Contrairement à une simple aération, la VMI préchauffe et filtre l'air extérieur avant de l'insuffler sous pression dans la cave. Cette surpression chasse l'air vicié et l'humidité vers les sorties d'air extérieures. Les odeurs de moisi disparaissent en quelques jours.

## 4. Valorisez votre patrimoine immobilier en Île-de-France

Gagner de la surface saine en sous-sol à Paris ou en proche banlieue (Boulogne, Montreuil, Saint-Denis, Créteil) apporte une plus-value considérable à votre bien immobilier. Qu'il s'agisse d'une cave à vin, d'une buanderie ou d'une salle de cinéma, un traitement par cuvelage et ventilation rend l'espace totalement salubre.

Prenez rendez-vous avec l'équipe **BATIHUMI** pour bénéficier d'un diagnostic d'humidité gratuit de votre cave ou sous-sol en Île-de-France.`,
        published: true,
      },
      {
        title:
          "Toiture qui fuit : comment repérer et réparer une infiltration d'eau par le toit",
        slug: "toiture-qui-fuit-reperer-reparer-infiltration",
        imageUrl: "/images/article-toiture.jpg",
        description:
          "Une fuite de toit peut causer des dégâts majeurs. Découvrez comment détecter l'origine d'une infiltration par la toiture et les solutions pour réparer l'étanchéité de votre maison en Île-de-France.",
        content: `La toiture est le premier rempart de votre maison contre les intempéries. En Île-de-France, avec ses hivers parfois rudes et ses épisodes pluvieux fréquents, la moindre défaillance peut se transformer en véritable cauchemar pour les occupants. L'infiltration d'eau par le toit est l'une des causes majeures d'humidité dans les logements, et ses conséquences peuvent être désastreuses si le problème n'est pas traité rapidement.

## 1. Comment identifier une infiltration d'eau provenant du toit ?

Contrairement aux remontées capillaires qui touchent la base des murs, une fuite de toiture se manifeste généralement par le haut de votre logement. 

**Les signes qui ne trompent pas :**
- **Auréoles et taches brunâtres :** Elles apparaissent sur les plafonds, souvent au niveau des pièces situées directement sous les combles.
- **Peinture qui s'écaille et papier peint qui se décolle :** Dans la partie supérieure de vos murs extérieurs.
- **Gouttes d'eau :** Lors de fortes pluies, l'eau peut perler directement du plafond.
- **Odeur d'humidité et moisissures :** Un développement rapide de moisissures noires dans les angles des plafonds ou sur la charpente dans les combles.
- **Humidité sur les isolants :** Si vous avez accès à vos combles, la laine de verre ou de roche gorgée d'eau est le signe évident d'une fuite.

## 2. Les causes les plus fréquentes d'une toiture non étanche

Une infiltration par le toit ne signifie pas toujours qu'il faut refaire toute la couverture. Le plus souvent, le problème est localisé :

- **Tuiles ou ardoises endommagées :** Déplacées par le vent, fissurées par le gel ou cassées, elles laissent l'eau s'infiltrer.
- **Zinguerie défectueuse :** Les solins (joints d'étanchéité entre les tuiles et les cheminées ou les murs) vieillissent et se fissurent. Les gouttières bouchées par des feuilles mortes peuvent aussi provoquer des débordements sous les tuiles.
- **Faîtage abîmé :** La ligne de jonction supérieure du toit est particulièrement exposée aux vents et à l'usure.
- **Problème de fenêtres de toit (Velux) :** L'étanchéité autour des fenêtres de toit est un point de faiblesse classique.
- **Poutres et charpente affaissées :** Un léger mouvement de la charpente peut décaler la couverture.

## 3. Les dangers d'une toiture fuyante

Laisser une fuite de toit sans traitement, même si elle semble minime, c'est prendre de grands risques :

- **Pour la structure de la maison :** L'eau imbibe la charpente en bois, ce qui favorise l'apparition de champignons lignivores (comme la mérule) et attire les insectes xylophages. À terme, c'est la solidité même de votre toit qui est menacée.
- **Pour l'isolation thermique :** Un isolant mouillé perd la totalité de ses capacités d'isolation. Votre facture de chauffage risque de s'envoler.
- **Pour le réseau électrique :** L'eau qui s'infiltre dans les cloisons ou les plafonds peut atteindre les gaines électriques, provoquant des courts-circuits ou des incendies.
- **Pour la santé :** L'humidité excessive favorise le développement d'acariens et de moisissures, dangereux pour les voies respiratoires.

## 4. Que faire en cas de fuite et comment réparer ?

### Les premiers réflexes :
Si vous constatez une fuite active, la priorité est de limiter les dégâts à l'intérieur. Placez des seaux, épongez l'eau et coupez l'électricité dans la zone concernée si nécessaire. Contactez ensuite immédiatement votre assurance habitation pour déclarer le sinistre.

### L'intervention professionnelle :
La recherche de fuite sur une toiture est complexe. L'eau peut s'infiltrer à un endroit précis et ruisseler sur la charpente avant de tacher votre plafond à plusieurs mètres de distance. 

**Les étapes du traitement :**
1. **Recherche de fuite :** Utilisation de techniques non destructives (caméra thermique, gaz traceur, fumigène) pour localiser l'origine exacte.
2. **Mise en sécurité et bâchage :** Si la réparation immédiate n'est pas possible (par exemple à cause de la météo), le professionnel posera une bâche d'urgence.
3. **Réparation locale :** Remplacement des tuiles, réfection des solins et des joints d'étanchéité, ou réparation des éléments en zinc.
4. **Traitement hydrofuge :** Dans certains cas, l'application d'un traitement hydrofuge sur l'ensemble de la toiture permet de prolonger sa durée de vie en rendant les tuiles auto-nettoyantes et totalement imperméables.
5. **Assèchement intérieur :** Il sera souvent nécessaire d'assécher les combles et de remplacer l'isolant endommagé.

## Conclusion

Une intervention rapide est cruciale pour préserver votre patrimoine immobilier en Île-de-France. Ne montez jamais sur votre toit vous-même, surtout par temps de pluie, le risque de chute est extrêmement élevé.

Faites appel aux experts de **BATIHUMI**. Nous intervenons rapidement pour identifier la source de votre infiltration et vous proposer des réparations durables et garanties, sécurisant ainsi votre habitat pour les décennies à venir.`,
        published: true,
      },
      {
        title:
          "Isoler un mur humide de l'intérieur : pourquoi c'est une grave erreur sans traitement préalable",
        slug: "isoler-mur-humide-interieur-grave-erreur",
        imageUrl: "/images/article-isolation.jpg",
        description:
          "Vous souhaitez isoler un mur froid et humide pour gagner en confort ? Découvrez pourquoi masquer l'humidité derrière un doublage (Placo) est dangereux et quelles sont les vraies solutions.",
        content: `C'est une réaction courante et compréhensible : face à un mur froid, humide, couvert de moisissures ou de taches désagréables, le premier réflexe de nombreux propriétaires en Île-de-France est de vouloir "cacher la misère" et améliorer le confort en posant une isolation par l'intérieur (souvent du Placo avec du polystyrène ou de la laine de verre).

Cependant, isoler un mur qui souffre d'un problème d'humidité non résolu est **l'une des plus graves erreurs en rénovation**. Voici pourquoi cette fausse bonne idée peut se transformer en catastrophe sanitaire et financière.

## 1. Que se passe-t-il quand on isole un mur humide ?

L'humidité dans un mur ne disparaît pas par magie parce qu'on la cache. Qu'elle provienne de remontées capillaires, d'infiltrations ou de condensation, l'eau va continuer à imprégner la maçonnerie.

En ajoutant un complexe isolant devant ce mur, vous créez ce que les experts appellent un **confinement**.

**Le cycle destructeur du confinement :**
- L'humidité bloquée entre le mur porteur d'origine et la nouvelle cloison isolante ne peut plus s'évaporer vers l'intérieur de la pièce.
- Le mur reste gorgé d'eau en permanence. 
- Les matériaux isolants (comme la laine de verre ou la laine de roche) vont absorber cette humidité comme une éponge. Une fois mouillés, ils perdent 100% de leur pouvoir isolant et s'affaissent.
- L'espace confiné, sombre et saturé d'humidité devient un incubateur géant idéal pour la prolifération des moisissures toxiques et surtout, du terrible **mérule** (le champignon lignivore destructeur de maisons).

## 2. Les conséquences à court et moyen terme

Le répit sera de courte durée. En quelques mois à peine, les problèmes vont resurgir, souvent avec une intensité décuplée :

- **Apparition de taches sur le nouveau mur :** L'humidité finira par traverser le placoplâtre.
- **Odeurs nauséabondes de pourriture :** Invisibles derrière la cloison, les moisissures vont dégager des odeurs tenaces dans toute la pièce.
- **Dégradation accélérée du bâti :** Le mur d'origine, ne respirant plus du tout, va se désagréger beaucoup plus vite sous l'action des sels (salpêtre) et du gel hivernal en extérieur.
- **Risque d'effondrement :** Si vous avez des poutres en bois encastrées dans ce mur, elles vont pourrir à une vitesse fulgurante.
- **Perte financière :** Vous devrez non seulement payer pour enfin traiter la cause de l'humidité, mais également payer pour démolir l'isolation que vous venez de faire, et en refaire une nouvelle !

## 3. La règle d'or : Diagnostiquer, Traiter, Assécher, PUIS Isoler

En rénovation thermique, la chronologie des travaux est primordiale. Il ne faut **jamais** isoler avant d'avoir un bâti parfaitement sain et sec.

### Étape 1 : Le Diagnostic Professionnel
Il faut identifier avec précision l'origine de l'eau.
- S'agit-il d'une condensation due à un manque de ventilation ?
- S'agit-il d'infiltrations par une façade poreuse ou fissurée ?
- S'agit-il de remontées capillaires venant du sol ?

### Étape 2 : Le Traitement à la Source
Chaque problème a sa solution spécifique :
- **Pour les remontées capillaires :** Injection de résine hydrofuge à la base des murs pour créer une barrière étanche.
- **Pour les infiltrations :** Réparation des maçonneries, hydrofugation de façade ou cuvelage si le mur est enterré (cave, souplex).
- **Pour la condensation :** Installation d'un système de ventilation performant (VMI ou VMC).

### Étape 3 : L'Assèchement
C'est l'étape la plus souvent oubliée. Après avoir coupé la source d'humidité (par exemple avec des injections), un mur épais en pierre meulière ou en brique peut mettre **de 6 à 18 mois pour s'assécher complètement** à cœur ! L'utilisation d'assécheurs professionnels ou d'une VMI permet d'accélérer ce processus.

### Étape 4 : L'Isolation (enfin !)
Une fois que le mur affiche un taux d'humidité normal (vérifié par un professionnel avec un humidimètre à carbure), vous pouvez procéder à son isolation en toute sérénité. Privilégiez d'ailleurs des isolants biosourcés et respirants (comme la fibre de bois, le chanvre ou le liège) qui gèrent mieux la vapeur d'eau.

## Conclusion

Ne cédez pas à la précipitation face à un mur humide. Le cache-misère coûte toujours plus cher à la fin.

Si vous avez un projet d'isolation thermique en Île-de-France et que vous avez des doutes sur l'humidité de vos murs, faites d'abord intervenir **BATIHUMI**. Nous réaliserons un diagnostic complet et gratuit pour assainir vos fondations avant tous travaux d'embellissement.`,
        published: true,
      },
      {
        title:
          "Les dangers de l'humidité sur la santé : asthme, allergies et risques respiratoires",
        slug: "dangers-humidite-sante-asthme-allergies",
        imageUrl: "/images/article-sante.jpg",
        description:
          "Vivre dans une maison humide n'abîme pas que vos murs, cela détruit aussi votre santé. Découvrez les impacts des moisissures et des acariens sur le système respiratoire et comment assainir votre logement.",
        content: `Lorsque l'on parle des problèmes d'humidité, on pense immédiatement aux taches sur les murs, au papier peint qui se décolle, à la dégradation de la maçonnerie ou à la baisse de la valeur immobilière du bien. Pourtant, l'impact le plus grave et le plus pernicieux de l'humidité concerne un tout autre domaine : **votre santé et celle de votre famille**.

Un logement trop humide (dont le taux d'hygrométrie dépasse durablement les 60-65%) devient rapidement un environnement toxique. En Île-de-France, où les appartements sont parfois mal ventilés, les conséquences sanitaires sont un véritable problème de santé publique.

## 1. Moisissures et spores : les tueurs silencieux de la qualité de l'air

L'humidité stagnante, particulièrement lorsqu'elle est liée à la condensation sur des ponts thermiques, entraîne inévitablement l'apparition de moisissures (ces fameuses taches noires ou verdâtres). 

Les moisissures sont des champignons microscopiques qui se reproduisent en libérant des millions de **spores invisibles** dans l'air ambiant. À chaque inspiration, ces particules pénètrent profondément dans vos voies respiratoires.

**Les conséquences directes :**
- **Allergies respiratoires :** Éternuements fréquents, nez qui coule (rhinite allergique), yeux rouges et larmoyants, toux sèche persistante.
- **Asthme :** L'exposition aux moisissures est l'un des principaux facteurs déclenchants des crises d'asthme. Chez les enfants, grandir dans un environnement humide multiplie par trois le risque de développer un asthme chronique.
- **Infections pulmonaires :** Les spores peuvent irriter les bronches et favoriser les bronchites à répétition. Certaines espèces de moisissures (comme l'Aspergillus ou le Stachybotrys chartarum, la fameuse "moisissure noire toxique") produisent des mycotoxines capables de provoquer de graves intoxications.

## 2. La prolifération exponentielle des acariens

Les acariens sont des arachnides microscopiques présents dans tous les logements (dans la literie, les canapés, les tapis). Mais ce que l'on sait moins, c'est qu'ils ont un besoin vital d'humidité pour survivre et se multiplier. 

Ils absorbent l'eau directement dans l'air ambiant. Si le taux d'humidité de votre chambre dépasse les 65%, la population d'acariens explose. Or, ce sont leurs déjections et leurs cadavres qui sont hautement allergisants.

**Les symptômes liés aux acariens :**
- Réveils difficiles avec le nez bouché.
- Démangeaisons, eczéma et problèmes cutanés.
- Fatigue chronique et troubles du sommeil.

## 3. Le salpêtre et l'intoxication de l'air

Si votre problème d'humidité est dû à des remontées capillaires, vous verrez probablement apparaître du salpêtre (des traces blanchâtres) à la base de vos murs. Le salpêtre est composé de sels de nitrate. Sous forme de poussière en suspension dans l'air, son inhalation irrite sévèrement les muqueuses respiratoires et aggrave les problèmes d'asthme et de bronchite.

## 4. Sensations de froid et maux articulaires

Au-delà de la qualité de l'air, l'humidité modifie la perception thermique. Un air humide est beaucoup plus difficile et plus cher à chauffer. Il absorbe la chaleur de votre corps, créant une désagréable sensation de "froid glacial" même si le thermomètre affiche 20°C.
Vivre dans ce froid humide favorise les rhumes, les angines, mais réveille également les douleurs articulaires, les rhumatismes et l'arthrose, particulièrement chez les personnes âgées.

## 5. Comment protéger votre santé ?

Nettoyer les moisissures à la Javel ne sert à rien si l'air reste humide : elles reviendront en quelques jours. Pour assainir l'environnement et protéger vos poumons, il faut traiter le mal à la racine.

1. **Identifier l'origine :** Remontées capillaires, infiltrations ou manque de ventilation ? Un diagnostic d'expert est nécessaire.
2. **Couper la source d'eau :** Réparation de toiture, cuvelage ou injection de résine.
3. **Installer une ventilation redoutable (VMI) :** C'est la solution ultime pour la santé. Une Ventilation Mécanique par Insufflation filtre l'air extérieur (bloquant la pollution et les pollens) avant de l'insuffler dans la maison. En mettant le logement en surpression, elle chasse l'humidité, les acariens et les pollutions intérieures (COV, radon) vers l'extérieur. Le résultat sur les allergies est souvent spectaculaire.

## Conclusion

Ne sous-estimez jamais les taches noires sur vos murs. Elles sont le symptôme d'un air intérieur dégradé qui attaque silencieusement vos défenses immunitaires. 

Votre santé n'a pas de prix. Si votre maison ou votre appartement en Île-de-France présente des signes d'humidité, contactez **BATIHUMI** pour un diagnostic gratuit. Nous mettrons en place les solutions pour vous rendre une maison saine, sèche, où il fait bon respirer.`,
        published: true,
      },
      {
        title:
          "Infiltration d'eau par la façade : causes, diagnostic et traitement hydrofuge en Île-de-France",
        slug: "infiltration-eau-facade-traitement-hydrofuge-diagnostic",
        imageUrl: "/images/article-facade.jpg",
        description:
          "Votre façade laisse passer l'eau de pluie ? Découvrez comment détecter une infiltration par les murs extérieurs, les risques pour votre maçonnerie et les traitements hydrofuges professionnels en Île-de-France.",
        content: `La façade de votre logement est constamment exposée aux agressions climatiques extérieures : pluie battante, vent, variations brutales de température, pollution atmosphérique urbaine et alternance de gel et dégel. En Île-de-France, où le parc immobilier combine des immeubles anciens en pierre de taille ou brique et des pavillons aux enduits vieillissants, les **infiltrations d'eau par la façade** comptent parmi les désordres les plus destructeurs.

Lorsque les parois extérieures perdent leur étanchéité naturelle, l'eau s'invite au cœur de la maçonnerie avant d'atteindre vos espaces intérieurs. Identifier rapidement l'origine du phénomène et appliquer un traitement adapté est indispensable pour préserver la solidité de votre bâti et votre confort.

## 1. Comment reconnaître une infiltration d'eau par la façade ?

Une infiltration extérieure ne se manifeste pas toujours immédiatement par une fuite visible. Souvent, elle progresse de manière insidieuse avant de traverser toute l'épaisseur du mur.

### Les signes visibles à l'extérieur :
- **Fissures et microfissures :** Traces d'éclatement de l'enduit ou lézardes suivant les joints de maçonnerie.
- **Façade noircie ou verdie :** Développement anormal de mousses, lichens et algues retenant l'humidité.
- **Écaillage ou cloquage du crépi :** L'enduit sonne le creux ou se détache par plaques sous l'effet de l'eau piégée.
- **Joints de mortier friables :** Le mortier entre les briques ou les pierres s'effrite au simple contact du doigt.

### Les répercussions constatées à l'intérieur :
- **Taches d'humidité et auréoles :** Apparition de cernes brunâtres ou jaunâtres sur les murs extérieurs, particulièrement après de fortes averses ou des pluies battantes avec vent d'ouest.
- **Moisissures et décollement de finitions :** Papier peint qui se décolle, peinture qui cloque ou plâtre qui se ramollit.
- **Chute de l'isolation thermique :** Le mur reste glacé au toucher, et la pièce devient difficile à chauffer même avec les radiateurs à plein régime.

## 2. Quelles sont les causes majeures des infiltrations extérieures ?

Une infiltration par la façade découle rarement d'un problème isolé. Les causes les plus fréquentes rencontrées par nos techniciens en région parisienne incluent :

1. **La porosité accrue des matériaux avec l'âge :** Avec les années, les crépis minéraux, les briques et les pierres tendres absorbent l'eau de pluie comme une éponge au lieu de la faire ruisseler.
2. **Les microfissures structurelles :** Les mouvements de terrain (sécheresse et retrait-gonflement des argiles très fréquents dans le 77, le 78, le 91 et le 94) ou les vibrations urbaines créent des brèches microscopiques par lesquelles l'eau s'engouffre.
3. **La défaillance des joints de menuiseries et solins :** Les mastics d'étanchéité entourant les fenêtres et portes extérieures durcissent, se rétractent et créent des voies d'eau directes dans l'isolant.
4. **Les défauts d'évacuation pluviale :** Une gouttière percée ou une descente d'eau pluviale fissurée rejette de grandes quantités d'eau directement contre le mur de façade.

## 3. Les dangers de l'eau dans la maçonnerie

Négliger une façade poreuse entraîne une dégradation exponentielle du logement :
- **L'éclatement par le gel hivernal :** L'eau emprisonnée dans les pores du matériau augmente de 9 % de volume en gelant, faisant éclater la brique, la pierre et l'enduit.
- **La ruine de l'isolation thermique :** Un isolant mouillé (laine de verre, polystyrène, laine de roche) perd immédiatement jusqu'à 80 % de son pouvoir thermique.
- **L'attaque des armatures métalliques :** L'humidité atteint le ferraillage du béton armé, provoquant sa corrosion et mettant en péril la stabilité structurelle de l'édifice.

## 4. Les solutions professionnelles : Traitement hydrofuge et imperméabilisation

Faire un simple coup de peinture de façade classique ne règle en rien le problème : la peinture finira par cloquer et emprisonner l'humidité dans le mur. Le traitement doit stopper l'eau liquide extérieure tout en permettant à la vapeur d'eau intérieure de s'échapper.

### Le traitement hydrofuge de surface incolore :
C'est la solution de choix pour les façades en pierre, brique ou enduit en bon état structurel.
- **Principe :** Application d'une résine hydrofuge de haute technologie (silanes/siloxanes) qui pénètre profondément dans les pores de la maçonnerie.
- **Effet perlant :** L'eau de pluie glisse en perles le long de la paroi sans jamais pouvoir pénétrer.
- **Respirabilité totale :** Le traitement est microporeux : il laisse respirer le mur vers l'extérieur, évitant toute condensation interne.
- **Protection autonettoyante :** Empêche l'adhérence des pollutions urbaines et ralentit drastiquement la réapparition des mousses.

### Les étapes d'un chantier de traitement de façade BATIHUMI :
1. **Diagnostic technique préalable :** Analyse hygrométrique et recherche de fuite non destructive pour confirmer que l'eau vient bien de la façade et non du toit ou du sol.
2. **Nettoyage et démoussage doux :** Débarrasser le support des dépôts atmosphériques, mousses et lichens à basse pression.
3. **Piquage et rebouchage des fissures :** Ouverture des fissures et colmatage à l'aide d'un mastic élastomère respirant spécifique aux façades.
4. **Application de l'hydrofuge :** Pulvérisation uniforme du produit hydrofuge en couches croisées jusqu'à saturation complète du matériau.

## 5. Quel budget prévoir en Île-de-France ?

Le coût d'un traitement hydrofuge de façade dépend de l'état du support, de la hauteur du bâtiment (nécessité ou non d'un échafaudage) et de la surface totale en mètres carrés.
- **Nettoyage, traitement anti-mousse et hydrofuge incolore :** Entre 25 € et 55 € TTC par m².
- **Réfection ciblée des joints et rebouchage de fissures :** Facturé selon le métrage linéaire et la gravité.

Ce traitement s'avère infiniment moins onéreux qu'un ravalement lourd complet et permet de prolonger l'étanchéité de vos murs pour une durée de 10 à 15 ans.

## Conclusion

Une façade saine est le premier bouclier protecteur de votre maison. Si vos murs présentent des traces sombres après la pluie ou si vous ressentez une humidité anormale sur vos cloisons intérieures, agissez sans attendre.

Les experts **BATIHUMI** se déplacent dans toute l'Île-de-France pour réaliser un **diagnostic d'étanchéité gratuit et sans engagement** de votre façade. Protégez votre patrimoine avec des solutions garanties et certifiées.`,
        published: true,
      },
      {
        title:
          "Diagnostic humidité avant achat ou vente immobilière : déroulement, obligations et détection des vices cachés",
        slug: "diagnostic-humidite-achat-vente-immobiliere-deroulement-vices-caches",
        imageUrl: "/images/article-diagnostic.jpg",
        description:
          "Acheter ou vendre un bien avec des doutes sur l'humidité ? Découvrez le déroulement d'un diagnostic d'humidité professionnel, les outils de mesure (humidimètre, carbure, caméra thermique) et vos recours pour vice caché en Île-de-France.",
        content: `L'achat d'un appartement ou d'une maison en Île-de-France représente souvent l'investissement d'une vie. Pourtant, lors des visites immobilières, l'enthousiasme peut vite masquer des défauts majeurs. Parmi eux, **l'humidité est le problème le plus fréquent, le plus coûteux et le plus difficile à déceler pour un non-initié**.

Entre des peintures refaites à la hâte pour masquer des auréoles, des odeurs de moisi camouflées par des parfums d'ambiance et des infiltrations invisibles à l'œil nu, le risque d'acheter un bien sinistré est bien réel. Réaliser un **diagnostic humidité professionnel avant l'achat** est le meilleur moyen d'éviter les mauvaises surprises, de négocier le prix de vente ou de se prémunir contre les litiges pour vice caché.

## 1. Pourquoi demander une expertise humidité avant d'acheter ?

Le dossier de diagnostic technique (DDT) obligatoire fourni par le vendeur (comprenant le DPE, l'amiante, le plomb, l'électricité et les termites) **n'intègre aucun diagnostic officiel mesurant l'humidité des murs ou la présence de salpêtre et de champignons lignivores**.

Faire appel à un spécialiste indépendant de l'humidité avant de signer le compromis de vente vous permet de :
- **Connaître l'état réel du bâti :** Découvrir si des remontées capillaires ou des infiltrations menacent la structure.
- **Chiffrer les travaux avec précision :** Éviter de découvrir après l'emménagement une facture imprévue de 5 000 € à 15 000 € pour assainir les murs ou installer une ventilation.
- **Négocier le prix d'achat :** Disposer d'un devis technique d'expert permet d'appuyer solidement une offre d'achat à la baisse face au vendeur ou à l'agent immobilier.
- **Sécuriser votre investissement :** Confirmer la faisabilité de projets d'aménagement (isolation intérieure, rénovation de souplex ou de combles).

## 2. Humidité et vice caché : Ce que dit la loi française

Selon l'article 1641 du Code civil, le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage que l'acheteur ne l'aurait pas acquise ou en aurait donné un moindre prix.

### Quand l'humidité constitue-t-elle un vice caché ?
- **Le vice doit être antérieur à la vente :** Même si les symptômes éclatent plusieurs mois après la remise des clés.
- **Le vice doit être non apparent :** Une infiltration dissimulée derrière un doublage récent ou repeinte avant la visite ne pouvait pas être décelée par un acheteur profane.
- **La gravité du désordre :** Des remontées capillaires généralisées, la présence de mérule ou un taux d'humidité rendant l'air insalubre sont régulièrement reconnus comme vices cachés par les tribunaux.

**Attention :** La plupart des actes de vente contiennent une clause d'exonération des vices cachés au profit des vendeurs non professionnels. Pour faire condamner le vendeur, l'acheteur doit prouver la mauvaise foi de ce dernier (dissimulation volontaire). Réaliser un diagnostic préventif en amont évite des années de procédures judiciaires et d'expertises contradictoires épuisantes.

## 3. Les signaux d'alarme qui doivent vous alerter lors d'une visite

Même sans matériel technique, plusieurs indices visuels et olfactifs doivent éveiller votre vigilance :
1. **La fraîcheur suspecte des revêtements :** Une seule pièce repeinte à neuf (surtout au rez-de-chaussée ou en sous-sol) peut servir de camouflage temporaire à des moisissures récurrentes.
2. **L'état des plinthes et du bas des murs :** Des plinthes en bois légèrement gondolées, disjointes, ou des vis rouillées indiquent de l'humidité ascensionnelle.
3. **L'odeur de renfermé ou de terre mouillée :** Si les fenêtres sont grandes ouvertes en plein hiver ou si des bougies parfumées brûlent dans chaque coin, méfiez-vous.
4. **La condensation permanente sur les doubles vitrages :** Signe d'une ventilation défaillante (VMC inexistante ou calfeutrée).
5. **Les dépôts blanchâtres au sous-sol ou en cave :** La présence de salpêtre annonce une maçonnerie saturée d'eau sous pression.

## 4. Les outils de mesure professionnels utilisés par l'expert BATIHUMI

Nos spécialistes interviennent avec des instruments de mesure étalonnés de haute précision pour établir une cartographie complète de l'hygrométrie :
- **L'humidimètre capacitif (haute fréquence) :** Analyse l'humidité en profondeur (jusqu'à 4 à 5 cm dans le mur) de manière non destructive, sans percer ni détériorer la finition.
- **L'humidimètre à pointes résistif :** Mesure la résistance électrique des matériaux de surface (plâtre, boiseries, encadrements) pour quantifier précisément le taux d'eau libre.
- **La caméra thermique infrarouge :** Visualise les ponts thermiques, les zones d'évaporation froide et repère les passages d'infiltrations invisibles à l'œil nu à travers les cloisons.
- **Le thermo-hygromètre à calcul de point de rosée :** Mesure la température de l'air ambiant, l'humidité relative et calcule le point de rosée exact dans chaque pièce pour diagnostiquer les risques de condensation.
- **Le test à la bombe au carbure (si nécessaire) :** Seule méthode normalisée reconnue devant les tribunaux pour déterminer le pourcentage d'humidité chimique au cœur de la pierre ou du béton.

## 5. Comment se déroule le diagnostic BATIHUMI en Île-de-France ?

Chez BATIHUMI, nous avons fait le choix de rendre cette expertise **accessible et gratuite** sur l'ensemble de la région parisienne (75, 92, 93, 94, 91, 95, 77, 78).

1. **Prise de rendez-vous rapide sous 24 à 48 h :** Adaptation aux créneaux de visite convenus avec l'agence immobilière ou le vendeur.
2. **Inspection visuelle et relevé métrologique :** Relevé systématique de l'hygrométrie dans chaque pièce critique (cave, rez-de-chaussée, pièces humides, combles).
3. **Identification précise de l'origine :** Condensation, fuite cachée, défaut de ventilation, porosité de façade ou remontées capillaires.
4. **Remise d'un bilan clair et chiffré :** Rapport compréhensible avec préconisations techniques concrètes et devis transparent si des travaux sont requis.

## Conclusion

Ne laissez pas le doute gâcher votre futur projet immobilier. Un diagnostic d'humidité réalisé par des professionnels vous offre la certitude de faire un achat éclairé en toute tranquillité d'esprit.

Vous êtes en cours d'acquisition ou vous constatez des traces suspectes dans votre appartement ou maison ? **Contactez BATIHUMI au 07 68 84 13 24** pour programmer votre diagnostic humidité gratuit en Île-de-France.`,
        published: true,
      },
      {
        title:
          "Infiltrations latérales vs remontées capillaires en sous-sol : comment identifier et traiter la pression hydrostatique ?",
        slug: "infiltrations-laterales-remontees-capillaires-sous-sol-pression-hydrostatique",
        imageUrl: "/images/article-infiltrations-laterales.jpg",
        description:
          "Murs de cave humides ou souplex inondé ? Apprenez à distinguer une infiltration latérale sous pression hydrostatique d'une simple remontée capillaire et découvrez les solutions de cuvelage et drainage en Île-de-France.",
        content: `À Paris et dans toute la région Île-de-France, l'optimisation des mètres carrés a conduit de nombreux propriétaires et copropriétés à aménager des sous-sols, caves voûtées et appartements en souplex. Pourtant, ces espaces situés sous le niveau du sol sont en première ligne face aux agressions de l'eau.

Deux fléaux majeurs sont régulièrement confondus : **les remontées capillaires** et **les infiltrations latérales d'eau sous pression hydrostatique**. 

Bien que leurs conséquences soient similaires (murs mouillés, salpêtre, cloquage des enduits, odeurs insalubres), leurs mécanismes physiques sont radicalement différents. Appliquer un traitement contre les remontées capillaires sur un mur soumis à une infiltration latérale conduit inévitablement à un échec cuisant. Voici le guide complet pour poser le bon diagnostic et adopter le traitement pérenne.

## 1. Deux phénomènes physiques opposés : Ascension vs Pression

Pour choisir le bon traitement, il est essentiel de comprendre d'où vient l'eau et comment elle pénètre dans la maçonnerie.

### Les remontées capillaires : Une poussée verticale
- **Le mécanisme :** L'eau présente dans la nappe ou le sol sous les fondations s'élève verticalement dans les murs par attraction capillaire, à la manière d'un sucre trempé dans une tasse de café.
- **La zone touchée :** L'humidité monte depuis la base du mur jusqu'à une hauteur maximale de 1 m à 1,50 m au-dessus du sol.
- **Les matériaux :** Ce phénomène touche tous les matériaux poreux (pierre de taille, brique pleine, moellon, béton non hydrofugé) non pourvus d'une coupure d'arase étanche.

### Les infiltrations latérales : Une poussée horizontale (pression hydrostatique)
- **Le mécanisme :** L'eau de pluie qui s'infiltre dans le terrain environnant s'accumule contre les parois extérieures des murs enterrés. Sous l'effet de son propre poids et de la gravité, cette masse d'eau exerce une force continue appelée **pression hydrostatique**.
- **La pénétration :** L'eau liquide traverse horizontalement la paroi à travers les microfissures, les joints poreux ou la porosité du matériau pour suinter à l'intérieur du sous-sol.
- **La zone touchée :** L'humidité peut couvrir l'intégralité de la hauteur du mur enterré, parfois jusqu'au plafond de la cave si la terre extérieure arrive à ce niveau.

## 2. Comment distinguer ces deux pathologies lors d'un diagnostic ?

| Critère | Remontées capillaires | Infiltrations latérales |
| :--- | :--- | :--- |
| **Sens de l'eau** | Vertical (du bas vers le haut) | Horizontal (de l'extérieur vers l'intérieur) |
| **Hauteur des traces** | Limitée (rarement plus de 1,5 m) | Sur toute la hauteur en contact avec la terre |
| **Comportement météo** | Humidité constante tout au long de l'année | Pics brutaux et suintements après de fortes pluies |
| **Présence d'eau liquide** | Humidité de contact, mur moite, salpêtre | Gouttes d'eau, ruissellements actifs, flaques au sol |
| **Nature des pièces** | Rez-de-chaussée et sous-sols | Espaces enterrés ou semi-enterrés (caves, souplex) |

En Île-de-France, la nature géologique des sols (terrains argileux qui retiennent l'eau en banlieue, remblais urbains et proximité de la Seine et de la Marne) accentue considérablement la pression hydrostatique sur les fondations anciennes.

## 3. Pourquoi l'injection de résine ne suffit pas contre les infiltrations latérales ?

Une erreur fréquente consiste à vouloir traiter un mur de cave enterré uniquement par **injection de résine hydrofuge**. 

L'injection de résine crée une barrière horizontale étanche efficace pour bloquer la montée de l'eau vers les étages supérieurs. Cependant, elle ne protège en rien la face intérieure du mur contre l'eau qui pousse latéralement depuis la terre extérieure. Si l'on injecte de la résine au bas d'un mur enterré sans cuvelage, l'eau continuera de traverser la paroi à 50 cm, 1 m ou 2 m de haut, rendant l'espace toujours aussi humide et insalubre.

## 4. Les solutions professionnelles contre les infiltrations latérales

Pour vaincre la pression hydrostatique et assainir définitivement un sous-sol ou un souplex, il est nécessaire de créer une barrière étanche capable de résister à la contre-pression.

### Solution 1 : Le cuvelage étanche par l'intérieur (Norme DTU 14.1)
Le cuvelage est la technique de référence pour les pièces enterrées lorsqu'il est impossible de décaisser le terrain extérieur (cas typique des immeubles parisiens mitoyens).
- **Préparation du support :** Piquage des anciens enduits et décapage complet jusqu'à la pierre ou au béton brut.
- **Colmatage des voies d'eau :** Neutralisation immédiate des suintements actifs à l'aide d'un mortier expansif à prise ultra-rapide.
- **Création du solin d'étanchéité :** Réalisation d'une gorge d'étanchéité arrondie (talonnette) à la jonction entre le sol et les murs pour éliminer le point faible classique de pénétration d'eau.
- **Application du revêtement d'imperméabilisation :** Pose de 3 couches croisées d'un enduit minéral hydrofuge d'interposition renforcé de résines polymères, résistant à plusieurs bars de contre-pression d'eau.
- **Chape étanche :** Traitement de la dalle au sol pour former un caisson totalement hermétique ("cuve").

### Solution 2 : Le drainage des eaux (intérieur ou extérieur)
- **Le drainage extérieur :** Lorsque le pavillon est accessible par l'extérieur, pose d'une membrane alvéolée à excroissances et d'un drain agricole en pied de fondation pour évacuer l'eau de ruissellement avant qu'elle ne touche le mur.
- **Le drainage intérieur avec pompe de relevage :** Si la pression de la nappe phréatique sous la dalle est trop forte, création d'une rigole drainante périphérique sous plancher reliée à une cuve de relevage automatique.

### Solution 3 : La ventilation par insufflation (VMI)
L'air confiné des sous-sols favorise la condensation sur les parois froides. Associer le cuvelage à une VMI permet d'insuffler un air neuf tempéré et filtré qui chasse en continu l'humidité résiduelle vers les sorties d'air.

## 5. Une valorisation immobilière majeure pour votre bien

Transformer une cave humide et nauséabonde en une pièce saine (buanderie, salle de sport, bureau, cave à vin régulée) apporte un gain de valeur au mètre carré considérable en Île-de-France, où chaque espace exploitable est précieux.

Pour réussir ce projet, un travail d'ingénierie et d'étanchéité certifié est indispensable. Tous les chantiers de cuvelage réalisés par BATIHUMI sont couverts par une **garantie décennale (assurance décennale 10 ans)** pour vous assurer une tranquillité absolue.

## Conclusion

Face à l'humidité d'un sous-sol, un diagnostic approximatif mène toujours à des dépenses inutiles. Seule une expertise rigoureuse permet de déterminer s'il s'agit de capillarité ou de poussée hydrostatique.

Pour évaluer précisément l'état de votre cave, de votre sous-sol ou de votre souplex en région parisienne, **prenez contact avec BATIHUMI**. Nos experts réalisent un diagnostic d'humidité gratuit et vous proposent une solution technique sur-mesure et pérenne.`,
        published: true,
      },
    ];

    for (const article of newArticles) {
      await ctx.db.insert("articles", article);
    }

    console.log(`Successfully seeded ${newArticles.length} articles.`);
  },
});
