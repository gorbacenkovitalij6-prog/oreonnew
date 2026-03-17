import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { siteConfig } from "@/config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ОРЕОН - Авто из Европы с доставкой по РФ",
  description: "Автомобили из Европы под ключ. Подбор, доставка, растаможка. Более 13 лет на рынке, 1000+ довольных клиентов. Экономия до 30%.",
  keywords: "авто из европы, автомобили из европы, пригон авто, растаможка авто, ОРЕОН",
  authors: [{ name: "ОРЕОН" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ОРЕОН - Авто из Европы с доставкой по РФ",
    description: "Автомобили из Европы под ключ. Подбор, доставка, растаможка. Более 13 лет на рынке, 1000+ довольных клиентов. Экономия до 30%.",
    url: "https://auto-europe-site.netlify.app",
    siteName: "ОРЕОН - Авто из Европы",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "https://i.ibb.co/99MMvGWQ/Gemini-Generated-Image-c24usmc24usmc24u.jpg",
        width: 1200,
        height: 630,
        alt: "ОРЕОН - Автомобили из Европы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ОРЕОН - Авто из Европы с доставкой по РФ",
    description: "Автомобили из Европы под ключ. Подбор, доставка, растаможка. Более 13 лет на рынке, 1000+ довольных клиентов.",
    images: ["https://i.ibb.co/99MMvGWQ/Gemini-Generated-Image-c24usmc24usmc24u.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        {siteConfig.yandexMetricaId && (
          <Script id="yandex-metrica" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${siteConfig.yandexMetricaId}, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });
            `}
          </Script>
        )}
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
