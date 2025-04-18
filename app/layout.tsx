import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Amiri, Tajawal } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "المرشد السياحي | دليلك الشامل للسياحة في المملكة العربية السعودية",
  description: "استكشف أجمل المدن والمعالم السياحية والفعاليات في المملكة العربية السعودية مع المرشد السياحي المتكامل",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} ${amiri.variable} font-sans bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
