import { Resend } from "resend";

import { contactNotificationEmail } from "@/lib/emails/contact-notification";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";

async function sendToCrm(lead: ContactInput) {
  const url = process.env.CRM_INTAKE_URL;
  const secret = process.env.CRM_INTAKE_SECRET;
  if (!url || !secret) {
    console.error("CRM intake is not configured");
    return;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Intake-Secret": secret,
      },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.error("CRM intake failed", res.status, await res.text());
    }
  } catch (error) {
    console.error("CRM intake error", error);
  }
}

export async function POST(req: Request) {
  try {
    const body = contactSchema.parse(await req.json());

    await sendToCrm(body);

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
