import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-3xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern id="world-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#world-pattern)" />
              {/* Simplified world map outline */}
              <path
                d="M50 80 Q100 60 150 80 T250 70 Q300 75 350 80"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 text-center text-primary-foreground">
            <p className="font-mono text-sm mb-2 opacity-90">CONTACT OUR TEAM</p>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6">
              Feel Free to Join our
              <br />
              15 Days Free Trial
            </h2>
            <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Download Template
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
