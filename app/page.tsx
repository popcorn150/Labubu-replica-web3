import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Twitter, Facebook, Copy } from "lucide-react"
import Image from "next/image"

const fontStyles = {
  bubblegum: "font-sans",
  luckiest: "font-luckiest",
}

export default function LabubuLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-pink-300 font-bubblegum">
      {/* Header */}
      <header className="w-full px-4 py-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-600">LABUBU</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#what" className="hover:text-pink-600 transition-colors">
              What is a LABUBU?
            </a>
            <a href="#about" className="hover:text-pink-600 transition-colors">
              About Us
            </a>
            <a href="#how" className="hover:text-pink-600 transition-colors">
              How to LABUBU
            </a>
            <a href="#tokenomics" className="hover:text-pink-600 transition-colors">
              Tokenomics
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 mb-4 drop-shadow-lg font-luckiest">
            LABUBU
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">the original fun token on solana</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold">
              View Chart
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg font-bold"
            >
              Community
            </Button>
          </div>

          <div className="bg-black/80 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-mono">
            <span>4DwmzDLkWwCqLu1FqNSbSdTmAkLDQGqumps</span>
            <Copy className="w-4 h-4 cursor-pointer hover:text-pink-300" />
          </div>

          {/* Mascot Image */}
          <div className="mt-12">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="LABUBU Mascot"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Exchanges Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-12">EXCHANGES WE ARE ON</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {["Bitget", "BingX", "Gate.io", "BitMart", "LBANK"].map((exchange) => (
              <div
                key={exchange}
                className="bg-white/50 backdrop-blur-sm rounded-lg p-4 w-24 h-16 flex items-center justify-center"
              >
                <span className="font-bold text-gray-700">{exchange}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mt-8">
            {["Weex", "Biconomy", "Raydium", "MEXC Global", "CoinW"].map((exchange) => (
              <div
                key={exchange}
                className="bg-white/50 backdrop-blur-sm rounded-lg p-4 w-24 h-16 flex items-center justify-center"
              >
                <span className="font-bold text-gray-700 text-sm">{exchange}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is LABUBU Section */}
      <section id="what" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="LABUBU Character"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6 font-luckiest">
                WHAT IS A LABUBU?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Labubu is a character in a series of stories called "The Monsters" by Hong Kong born artist Kasing Lung.
                Inspired by Nordic fairy tales, he created this universe in 2015, with characters modelled after elves,
                trolls and monsters.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From bustling Asian cities to the streets of Europe, Labubu has transcended borders, uniting fans of all
                ages in a shared love for this endearing toy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6 font-luckiest">
                WHO WE ARE
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Labubu is a character in a series of stories called "The Monsters" by Hong Kong born artist Kasing Lung.
                Inspired by Nordic fairy tales, he created this universe in 2015, with characters modelled after elves,
                trolls and monsters.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From bustling Asian cities to the streets of Europe, Labubu has transcended borders, uniting fans of all
                ages in a shared love for this endearing toy.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="LABUBU Team"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to LABUBU Section */}
      <section id="how" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-12 font-luckiest">
            HOW TO $LABUBU
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "STEP 1", title: "Download Phantom", icon: "📱" },
              { step: "STEP 2", title: "Buy $1 worth $SOL", icon: "💰" },
              { step: "STEP 3", title: "Go to Raydium or Jupiter & Swap!", icon: "🔄" },
              { step: "STEP 4", title: "Welcome to LABUBU!", icon: "🎉" },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white/70 backdrop-blur-sm border-2 border-pink-200 hover:border-pink-400 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-pink-600 mb-2">{item.step}</h3>
                <p className="text-gray-700 font-semibold">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-12 font-luckiest">
            TOKENOMICS
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white/70 backdrop-blur-sm border-2 border-pink-200">
              <h3 className="text-3xl font-black text-pink-600 mb-2">0%</h3>
              <p className="text-xl font-bold text-gray-700">FEES</p>
            </Card>
            <Card className="p-8 bg-white/70 backdrop-blur-sm border-2 border-pink-200">
              <h3 className="text-3xl font-black text-purple-600 mb-2">100%</h3>
              <p className="text-xl font-bold text-gray-700">COMMUNITY</p>
            </Card>
            <Card className="p-8 bg-white/70 backdrop-blur-sm border-2 border-pink-200">
              <h3 className="text-3xl font-black text-pink-600 mb-2">LP</h3>
              <p className="text-xl font-bold text-gray-700">LOCKED</p>
            </Card>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-black text-gray-800 mb-2">SUPPLY:</h3>
            <p className="text-3xl font-black text-pink-600">1,000,000,000</p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-12 font-luckiest">
            JOIN US
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2">
              <Twitter className="w-5 h-5" />
              Twitter
            </Button>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2">
              <Facebook className="w-5 h-5" />
              Facebook
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-pink-300/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-black text-pink-600 mb-6">LABUBU</div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
            <a href="#" className="hover:text-pink-600 transition-colors">
              Tokenomics
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              How it Works
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              Contacts
            </a>
          </div>
          <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Disclaimer: $LABUBU is a meme coin with no intrinsic value or expectation of financial return. There is no
            formal team or roadmap. The coin is completely useless and for entertainment purposes only. By purchasing
            $LABUBU, you acknowledge that you are participating in a speculative and high-risk investment that could
            result in the total loss of your investment.
          </p>
        </div>
      </footer>
    </div>
  )
}
