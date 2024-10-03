import type { Metadata } from "next";
import {Rubik} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./(Home)/Navbar";
import Footer from "./(Home)/Footer";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeXave",
  description: "CodeXave is a tech startup offering top-notch web development, digital marketing, SEO, and app development services to help your business thrive in the digital world.",
  keywords: [
    "CodeXave",
    "web development",
    "digital marketing",
    "SEO services",
    "app development",
    "tech startup",
    "business solutions",
    "website design",
    "mobile app development",
    "online marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
