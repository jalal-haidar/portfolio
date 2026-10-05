import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#09090b",
        color: "#fafafa",
        padding: 72,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          color: "#34d399",
          fontSize: 28,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 14, background: "#34d399" }} />
        {profile.status}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#d4d4d8", lineHeight: 1.3 }}>
          {profile.tagline}
        </div>
      </div>
      <div style={{ fontSize: 28, color: "#a1a1aa" }}>{profile.stackLine}</div>
    </div>,
    size,
  );
}
