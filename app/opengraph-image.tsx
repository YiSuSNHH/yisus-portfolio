import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nguyen Huy Hung - Technical Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f8f7f3",
          color: "#1d222b",
          display: "flex",
          height: "100%",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #d9d9d3",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#f2ead6",
                border: "2px solid #b17d22",
                borderRadius: "10px",
                color: "#795515",
                display: "flex",
                fontFamily: "monospace",
                fontSize: "28px",
                fontWeight: 700,
                height: "72px",
                justifyContent: "center",
                letterSpacing: "-4px",
                width: "72px",
              }}
            >
              NH
            </div>
            <div
              style={{
                color: "#6d727a",
                display: "flex",
                fontFamily: "monospace",
                fontSize: "20px",
              }}
            >
              PORTFOLIO / 2026
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#9a6b1b",
                display: "flex",
                fontFamily: "monospace",
                fontSize: "22px",
                letterSpacing: "3px",
                marginBottom: "20px",
              }}
            >
              TECHNICAL ENGINEER
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "72px",
                fontWeight: 700,
                letterSpacing: "-4px",
              }}
            >
              Nguyen Huy Hung
            </div>
            <div
              style={{
                color: "#5b616b",
                display: "flex",
                fontSize: "28px",
                marginTop: "20px",
              }}
            >
              Domain-driven systems for education and finance.
            </div>
          </div>

          <div
            style={{
              borderTop: "2px solid #d9d9d3",
              color: "#5b616b",
              display: "flex",
              fontFamily: "monospace",
              fontSize: "20px",
              justifyContent: "space-between",
              paddingTop: "22px",
            }}
          >
            <div style={{ display: "flex" }}>SPRING BOOT / LARAVEL / POSTGRESQL</div>
            <div style={{ display: "flex" }}>HO CHI MINH CITY, VN</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
