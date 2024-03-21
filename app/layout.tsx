import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Head from "next/head";

const ibmPlexSans = IBM_Plex_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Coffee Connoisseur",
  description: "Discover the best coffee shops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%0A%20%20%3Ctext%20y%3D%22.9em%22%20font-size%3D%2290%22%3E%E2%98%95%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
        />
      </Head>
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
