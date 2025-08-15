import { Button } from "@/components/ui/button"

const floatingIcons = [
  { icon: "⚙️", position: "top-10 left-10", delay: "0s" },
  { icon: "💡", position: "top-20 right-20", delay: "0.5s" },
  { icon: "🎨", position: "bottom-32 left-16", delay: "1s" },
  { icon: "📊", position: "bottom-20 right-10", delay: "1.5s" },
  { icon: "🚀", position: "top-1/2 left-8", delay: "2s" },
]

export function GuideSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Floating icons */}
          <div className="relative h-96 lg:h-[500px]">
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce`}
                style={{ animationDelay: item.delay, animationDuration: "3s" }}
              >
                <span className="text-lg">{item.icon}</span>
              </div>
            ))}

            {/* Central glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              We're here to guide and help you at all times
            </h2>
            <p className="font-mono text-lg text-muted-foreground mb-8 leading-relaxed">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
