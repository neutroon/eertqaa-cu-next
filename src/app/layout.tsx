import type { Metadata } from "next";
import { Cairo, Amiri, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MetaPixel from "@/app/components/MetaPixel";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "برامج تدريبية معتمدة من جامعة القاهرة",
  description:
    "انضم إلى برامجنا التدريبية المتخصصة واحصل على شهادة مختومة بختم النسر من جامعة القاهرة. برامج أونلاين عبر زوم أو حضورياً في الجامعة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID!;

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* <!-- Meta Pixel Code --> */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* <!-- End Meta Pixel Code -->   */}
      </head>
      <body
        className={`${cairo.variable} ${amiri.variable} ${notoSansArabic.variable} font-cairo antialiased`}
      >
        <MetaPixel pixelId={pixelId} />

        {children}
      </body>
    </html>
  );
}
