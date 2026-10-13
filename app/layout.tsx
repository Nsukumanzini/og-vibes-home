import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ogvibes.co.za"),
  title: {
    default: "OG Vibes | Your campus, connected",
    template: "%s | OG Vibes",
  },
  description:
    "Discover OG Vibes, the connected academic, social and campus experience built for students by OG Technologies.",
  applicationName: "OG Vibes",
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "OG Vibes",
    title: "OG Vibes | Your campus, connected",
    description:
      "Learning, official campus information and student connections in one modern experience.",
    images: [{ url: "/brand/campus.jpg", alt: "OG Vibes campus experience" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en"><body>{children}</body></html>;
}
