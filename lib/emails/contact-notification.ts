import { emailRow, emailShell, escapeHtml } from "@/lib/emails/shared";
import type { ContactInput } from "@/lib/validations/contact";

export function contactNotificationEmail(data: ContactInput) {
  const name = escapeHtml(data.name);
  const phone = escapeHtml(data.phone);
  const email = escapeHtml(data.email);
  const service = escapeHtml(data.service);
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  const bodyHtml = `
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
      ${emailRow("Nom", name)}
      ${emailRow("Téléphone", `<a href="tel:${phone}" style="color:#1d4ed8;text-decoration:none;">${phone}</a>`)}
      ${emailRow("Email", `<a href="mailto:${email}" style="color:#1d4ed8;text-decoration:none;">${email}</a>`)}
      ${emailRow("Type de problème", service)}
    </table>
    <div style="padding:18px 0 6px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1d4ed8;">
        Message
      </p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;">
        ${message}
      </p>
    </div>
    <a
      href="mailto:${email}"
      style="display:inline-block;margin-top:14px;background-color:#172554;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:999px;"
    >
      Répondre à ${name}
    </a>
  `;

  return emailShell({
    eyebrow: "Batihumi",
    title: "Nouvelle demande de contact",
    bodyHtml,
    footerNote: "Reçu depuis le formulaire de contact de batihumi.com",
  });
}
