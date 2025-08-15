const footerSections = [
  {
    title: "Sections",
    links: ["Home", "Features", "Pricing", "FAQs", "About"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Events", "Help Centre", "Tutorials"],
  },
  {
    title: "Social",
    links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList"],
  },
]

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-foreground font-semibold text-lg">Squid</span>
            </div>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem.
            </p>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-sans font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="font-mono text-sm text-muted-foreground mb-4 md:mb-0">© 2024 Squid. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 bg-muted/20 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-xs text-muted-foreground hover:text-primary">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
