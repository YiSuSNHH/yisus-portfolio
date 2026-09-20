import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#1d222b",
          borderRadius: "32px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#f2ead6",
            border: "4px solid #c69233",
            borderRadius: "18px",
            color: "#795515",
            display: "flex",
            fontFamily: "monospace",
            fontSize: "52px",
            fontWeight: 700,
            height: "112px",
            justifyContent: "center",
            letterSpacing: "-8px",
            paddingRight: "8px",
            width: "112px",
          }}
        >
          NH
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
