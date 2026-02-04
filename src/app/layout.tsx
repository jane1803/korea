import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "아리아드네 | 우리기관 맞춤형 설치형 AI 디자인 비서",
  description:
    "복잡한 규정은 AI가 지키고, 감각적인 스타일은 전문가가 더해주는 우리 기관 맞춤형, 설치형 AI 디자인 비서.",
  openGraph: {
    title: "아리아드네 | 설치형 AI 디자인 비서",
    description:
      "규정 준수 자동화 + 디자이너 스타일 + 10분 전문가 터치로 공공기관 디자인 제작 시간을 1분으로.",
    type: "website"
  },
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

