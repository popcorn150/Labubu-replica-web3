import { Bubblegum_Sans, Luckiest_Guy } from "next/font/google"

// For the main playful font (similar to Beachday aesthetic)
export const bubblegumSans = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bubblegum",
})

// For extra bold headings
export const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-luckiest",
})
