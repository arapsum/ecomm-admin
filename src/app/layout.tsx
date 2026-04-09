import type { Metadata } from "next";
import { Oxanium, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-sans" });

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cyber Dashboard",
  description:
    "Cyber Dashboard is the management web client for Cyber, an e-commerce platform built on top of the Internet Computer. It provides a user-friendly interface for managing your Cyber store, including product management, order tracking, and customer support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        oxanium.variable,
        shareTechMono.variable,
      )}
    >
      <body className="flex flex-col min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
