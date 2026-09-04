import type { ContactInput } from "@/lib/validations/contact";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1d4ed8;">
          ${label}
        </p>
        <p style="margin:0;font-size:15px;color:#0f172a;">
          ${value}
        </p>
      </td>
    </tr>
  `;
}

export function contactNotificationEmail(data: ContactInput) {
  const name = escapeHtml(data.name);
  const phone = escapeHtml(data.phone);
  const email = escapeHtml(data.email);
  const service = escapeHtml(data.service);
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `
    <div style="background-color:#f1f5f9;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:560px;margin:0 auto;">
        <tr>
          <td style="background-color:#172554;border-radius:16px 16px 0 0;padding:28px 32px;">
            <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#7dd3fc;">
              Batihumi
            </p>
            <h1 style="margin:8px 0 0;font-size:20px;font-weight:800;color:#ffffff;">
              Nouvelle demande de contact
            </h1>
          </td>
        </tr>
        <tr>
          <td style="background-color:#ffffff;padding:8px 32px 8px;">
            <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
              ${row("Nom", name)}
              ${row("Téléphone", `<a href="tel:${phone}" style="color:#1d4ed8;text-decoration:none;">${phone}</a>`)}
              ${row("Email", `<a href="mailto:${email}" style="color:#1d4ed8;text-decoration:none;">${email}</a>`)}
              ${row("Type de problème", service)}
            </table>
            <div style="padding:18px 0 6px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1d4ed8;">
                Message
              </p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;">
                ${message}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background-color:#ffffff;border-radius:0 0 16px 16px;padding:20px 32px 28px;">
            <a
              href="mailto:${email}"
              style="display:inline-block;background-color:#172554;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:999px;"
            >
              Répondre à ${name}
            </a>
          </td>
        </tr>
      </table>
      <p style="max-width:560px;margin:16px auto 0;text-align:center;font-size:12px;color:#94a3b8;">
        Reçu depuis le formulaire de contact de batihumi.com
      </p>
    </div>
  `;
}
