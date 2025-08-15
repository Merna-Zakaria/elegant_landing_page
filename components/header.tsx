import Image from "next/image";
import { Button } from "@/components/ui/button"
import Logo from "@/assets/images/logo.svg"


export function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
        src={Logo}
        alt="logo"
        width={100} 
        height={100} 
        priority // Optional: preloads image for faster LCP
      />
      </div>

      <div className="flex">
        <nav className="hidden md:flex px-4 py-1">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Home
        </a>
      </nav>

      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
       Download Template
      </Button>
      </div>
    </header>
  )
}
