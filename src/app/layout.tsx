import Header from "@/components/Header/header";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <AuthProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
