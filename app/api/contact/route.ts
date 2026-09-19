import { Resend } from "resend";

import { contactNotificationEmail } from "@/lib/emails/contact-notification";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  try {
    const body = contactSchema.parse(await req.json());

    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;
    if (!resendApiKey || !to) {
      throw new Error("Email service is not configured");
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: "Batihumi <notifications@batihumi.com>",
      to,
      replyTo: body.email,
      subject: `Nouvelle demande de contact — ${body.name}`,
      html: contactNotificationEmail(body),
    });

    if (error) {
      throw new Error(error.message);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Une erreur est survenue",
      },
      { status: 400 },
    );
  }
}
