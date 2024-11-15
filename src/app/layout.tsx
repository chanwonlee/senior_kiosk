import "./globals.css";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
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