import { MetadataRoute } from "next";
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nguyen Huy Hung - Technical Engineer",
    short_name: "Nguyen Huy Hung",
    description:
      "Technical Engineer translating business requirements into domain models, specs, and scalable systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7f3",
    theme_color: "#1d222b",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "/apple-icon?<generated>",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  };
}
