import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-toggle";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansSerifFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const monospaceFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Entre com sua conta",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${sansSerifFont.variable} ${monospaceFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
