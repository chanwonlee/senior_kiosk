'use client'
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const setDynamicHeight = () => {
      const vh = window.innerHeight * 0.01; // 1%의 뷰포트 높이
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.body.style.height = "-webkit-fill-available";
    }

    setDynamicHeight();
    window.addEventListener("resize", setDynamicHeight);

    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, []);

  return (
    <html>
    <body className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="content-container">{children}</div>
    </body>
    </html>
  );
}