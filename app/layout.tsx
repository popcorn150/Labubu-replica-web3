import type React from "react"
import "./globals.css"
import { bubblegumSans, luckiestGuy } from "./fonts"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "LABUBU - The Original Fun Token on Solana",
  description: "Join the LABUBU community and be part of the fun token revolution on Solana",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bubblegumSans.variable} ${luckiestGuy.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
