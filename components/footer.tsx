import Image from "next/image";
import whiteLogo from "@/assets/images/whiteLogo.svg";
import twitter from "@/assets/images/twitter.svg";
import linkedin from "@/assets/images/linkedin.svg";
import copilot from "@/assets/images/icon.svg";

const footerSections = [
  {
    title: "Sections",
    links: ["Home", "Features", "Pricing", "FAQs"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Jobs", "Press"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Events", "Help Centre"],
  },
]

export default function Footer() {
  return (
    <footer className="flex justify-center  ">
      <div className="bg-[#18181C] w-full ">
        <div className="w-10/12 mx-auto py-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-12 ">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={whiteLogo}
                  alt="logo"
                  width={50}
                  height={50}
                  style={{ height: "auto" }} 
                />
              </div>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                A good design is not only aesthetically
                <br />
                pleasing, but also functional. It should be
                <br />
                able to solve the problem.
              </p>
            </div>

            {/* Footer sections */}
            <div className="grid grid-cols-3 ">
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
          </div>
        </div>
        <div className=" bg-black">
          {/* Bottom section */}
          <div className="w-10/12 mx-auto py-8 flex flex-col md:flex-row justify-between items-center pt-8 ">
            <p className="font-mono text-sm text-muted-foreground mb-4 md:mb-0">© 2025 Squid. All rights reserved.</p>

            <div className="flex items-center gap-4">
              {[twitter, linkedin, copilot].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-muted/20 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Image
                    src={social}
                    alt="logo"
                    width={18}
                    height={18}
                    style={{ height: "auto" }} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
