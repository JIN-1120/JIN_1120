import type { Metadata } from "next";
import { Dela_Gothic_One, Noto_Sans_TC, Klee_One } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic",
  subsets: ["latin"],
  weight: "400",
});

const kleeOne = Klee_One({
  variable: "--font-klee",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "李榮晉 | 扯鈴表演者",
  description: "李榮晉的扯鈴表演個人網站 — 演出精華、拿手技法與邀約合作資訊",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${delaGothicOne.variable} ${kleeOne.variable} ${notoSansTC.variable} h-full antialiased`}
    >
      <body className="font-body flex min-h-full flex-col overflow-x-hidden bg-[#fff6e6] text-[#241c14]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
