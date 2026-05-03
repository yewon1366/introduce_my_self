import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "장예원 소개",
  description: "안녕하세요, 장예원입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerifKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
