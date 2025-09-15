import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import MainNavbar from "@/components/main-navbar";
import ThemeToggle from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erim Cerrahoglu",
  description: "Personal portfolio website of Erim Cerrahoglu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundBeams />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div>
            <MainNavbar />
            {children}
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
