import { ImageResponse } from "next/og";

export const alt =
  "Revive Laser Clinic — Laser & Skin Specialists in Medway and Kent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(140deg, #162a17 0%, #223b24 52%, #0e1c0f 100%)",
          color: "#f7f3ed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f5b833",
            fontWeight: 600,
          }}
        >
          Revive Laser Clinic
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Laser &amp; Skin Specialists in Medway and Kent
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#ede6da",
              opacity: 0.85,
              maxWidth: 880,
            }}
          >
            Laser hair removal, tattoo removal &amp; advanced skin treatments
            with free consultations and expert aftercare.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            color: "#ede6da",
          }}
        >
          <span style={{ color: "#f5b833", marginRight: 16 }}>●</span>
          2 East Street, Snodland, Kent ME6 5BA
        </div>
      </div>
    ),
    { ...size }
  );
}
