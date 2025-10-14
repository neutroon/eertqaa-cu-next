import type { Metadata } from "next";
import { Cairo, Amiri, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

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
  title: "eertqaa - برامج تدريبية معتمدة من جامعة عين شمس",
  description:
    "انضم إلى برامجنا التدريبية المتخصصة واحصل على شهادة مختومة بختم النسر من جامعة عين شمس. برامج أونلاين عبر زوم أو حضورياً في الجامعة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${amiri.variable} ${notoSansArabic.variable} font-cairo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
