import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { seoByLocale } from "@/i18n/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type OgImageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Image({ params }: OgImageProps) {
  const { locale } = await params;
  const resolvedLocale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const seo = seoByLocale[resolvedLocale];

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FFFEF5 0%, #F0F4F8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              background: "linear-gradient(135deg, #FFE599 0%, #D4AF37 50%, #B8860B 100%)",
              borderRadius: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              border: "4px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              fontSize: "48px",
              fontWeight: "bold",
            }}
          >
            YS
          </div>

          <div
            style={{
              fontSize: "68px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #102A43 0%, #D4AF37 50%, #102A43 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "16px",
            }}
          >
            YiSuS
          </div>

          <div
            style={{
              fontSize: "34px",
              color: "#486581",
              marginBottom: "16px",
            }}
          >
            {resolvedLocale === "vi" ? "Nguyen Huy Hung" : "Nguyen Huy Hung"}
          </div>

          <div
            style={{
              fontSize: "26px",
              color: "#627D98",
              maxWidth: "900px",
              textAlign: "center",
            }}
          >
            {seo.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
