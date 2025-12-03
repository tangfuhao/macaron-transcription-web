import Link from "next/link";
import { Mic, Shield, Smartphone, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              M
            </div>
            <span>Macaron</span>
          </div>
          <nav>
            <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Transcription made simple.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Fast, accurate, and secure voice transcription directly on your device. 
                Capture every word with Macaron.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a 
                  href="#" 
                  className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 shadow-[0_0_20px_-5px_var(--color-primary)]"
                >
                  <Download className="w-5 h-5" />
                  Get on Google Play
                </a>
              </div>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Mic className="w-6 h-6 text-primary" />}
                title="High Accuracy"
                description="Advanced speech recognition technology ensures every detail is captured correctly."
              />
              <FeatureCard 
                icon={<Shield className="w-6 h-6 text-primary" />}
                title="Private & Secure"
                description="Your recordings and transcriptions stay on your device. We respect your privacy."
              />
              <FeatureCard 
                icon={<Smartphone className="w-6 h-6 text-primary" />}
                title="Easy to Use"
                description="Clean, intuitive interface designed for efficiency. Start transcribing in seconds."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Macaron Transcription. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
