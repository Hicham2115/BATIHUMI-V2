import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  phone: z.string().trim().min(6, "Numéro de téléphone invalide").max(20),
  email: z.string().trim().email("Email invalide"),
  service: z.string().trim().min(1, "Veuillez sélectionner une option").max(100),
  message: z.string().trim().min(1, "Le message est requis").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
