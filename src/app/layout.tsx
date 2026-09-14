import type { Metadata } from "next";
import Effects from "@/components/Effects";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.headline} @ ${site.company}`,
  description: site.metaDescription,
  openGraph: {
    title: `${site.name} — Software Engineer`,
    description: site.metaDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap"
          rel="stylesheet"
        />
        {/* Runs before first paint: marks that JS is live, so the scroll-reveal
            styles only apply when something is there to reveal them. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-on')",
          }}
        />
      </head>
      <body className="grid-bg font-sans">
        {children}
        <Effects />
      </body>
    </html>
  );
}
