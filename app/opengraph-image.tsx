import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#172554",
        backgroundImage:
          "radial-gradient(circle at 85% 20%, rgba(56,189,248,0.35), transparent 55%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            width: 76,
            height: 76,
            borderRadius: 18,
            backgroundColor: "#0f172a",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50% 50% 50% 0",
              backgroundColor: "#38bdf8",
              transform: "rotate(-45deg)",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          BATIHUMI
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 56,
          maxWidth: 920,
        }}
      >
        <span
          style={{
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          Expert anti-humidité en Île-de-France
        </span>
        <span style={{ marginTop: 28, fontSize: 30, color: "#bae6fd" }}>
          Diagnostic gratuit sous 48h · Garantie décennale
        </span>
      </div>
    </div>,
    { ...size },
  );
}
