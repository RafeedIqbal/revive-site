import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Revive Laser Clinic",
    short_name: "Revive",
    description:
      "Laser hair removal, tattoo removal and advanced skin treatments in Snodland, Kent.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ed",
    theme_color: "#162a17",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
