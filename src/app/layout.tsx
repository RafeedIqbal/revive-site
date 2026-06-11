import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://revive-site-bay.vercel.app";
const siteName = "Revive Laser Clinic";
const description =
  "Revive Laser Clinic in Snodland offers laser hair removal, tattoo removal and advanced skin treatments with free consultations and expert aftercare.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Revive Laser Clinic | Laser & Skin Specialists in Medway and Kent",
    template: "%s | Revive Laser Clinic",
  },
  description,
  applicationName: siteName,
  keywords: [
    "laser hair removal",
    "tattoo removal",
    "microneedling",
    "CACI facial",
    "skin treatments",
    "laser clinic Kent",
    "laser clinic Medway",
    "Snodland",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: "Revive Laser Clinic | Laser & Skin Specialists in Medway and Kent",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Revive Laser Clinic | Laser & Skin Specialists in Medway and Kent",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${hankenGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: siteName,
              description,
              url: siteUrl,
              image: `${siteUrl}/opengraph-image`,
              telephone: "+441634245988",
              email: "ally.revivelaser@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 East Street",
                addressLocality: "Snodland",
                addressRegion: "Kent",
                postalCode: "ME6 5BA",
                addressCountry: "GB",
              },
              areaServed: ["Medway", "Kent", "Snodland"],
              sameAs: ["https://instagram.com/revivelaser"],
              medicalSpecialty: "DermatologyAndDermatopathology",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
