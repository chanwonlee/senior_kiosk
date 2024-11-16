"use client"
import "./globals.css";
import {useEffect} from "react";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // 동적 높이 업데이트 함수
    const setDynamicHeight = () => {
      const vh = window.innerHeight * 0.01; // 1%의 뷰포트 높이
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // 초기 설정 및 리사이즈 이벤트 등록
    setDynamicHeight();
    window.addEventListener("resize", setDynamicHeight);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, []);
  return (
    <html>
    
    <body className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="content-container">
      {children}
    </div>
    </body>
    </html>
  );
}