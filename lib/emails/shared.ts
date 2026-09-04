export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function emailRow(label: string, value: string) {
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

export function emailShell(options: {
  eyebrow: string;
  title: string;
  bodyHtml: string;
  footerNote: string;
}) {
  return `
    <div style="background-color:#f1f5f9;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:560px;margin:0 auto;">
        <tr>
          <td style="background-color:#172554;border-radius:16px 16px 0 0;padding:28px 32px;">
            <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#7dd3fc;">
              ${options.eyebrow}
            </p>
            <h1 style="margin:8px 0 0;font-size:20px;font-weight:800;color:#ffffff;">
              ${options.title}
            </h1>
          </td>
        </tr>
        <tr>
          <td style="background-color:#ffffff;padding:8px 32px 28px;">
            ${options.bodyHtml}
          </td>
        </tr>
      </table>
      <p style="max-width:560px;margin:16px auto 0;text-align:center;font-size:12px;color:#94a3b8;">
        ${options.footerNote}
      </p>
    </div>
  `;
}
