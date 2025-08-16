import Image from "next/image";
import { Button } from "@/components/ui/button"
import  DashboardMockup  from "./dashboard-mockup"
import ellipse_1 from "@/assets/images/ellipse-1.png"
import ellipse_2 from "@/assets/images/ellipse-2.svg"
import ellipse_3 from "@/assets/images/ellipse-3.png"
import Subtract from "@/assets/images/Subtract.svg"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-10 overflow-hidden">
      <Image
        src={ellipse_1}
        alt="ellipse_1"
        width={100}
        height={100}
        className="absolute top-28 right-14 animate-pulse"
        style={{ height: "auto" }} 
      />
      <Image
        src={ellipse_3}
        alt="ellipse_3"
        width={100}
        height={100}
        className="absolute top-0 animate-pulse"
        style={{ height: "auto" }} 
      />
      <Image
        src={ellipse_2}
        alt="ellipse_2"
        width={400}
        height={400}
        className="absolute top-0 animate-pulse"
        style={{ height: "auto" }} 
      />
      <Image
        src={ellipse_3}
        alt="ellipse_3"
        width={100}
        height={100}
        className="absolute top-60 left-14 animate-pulse"
        style={{ height: "auto" }} 
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Beautiful Landing Page
          <br />
          Design for You
        </h1>

        <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
        </p>

        <Button
          size="lg"
          className="mb-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-3"
        >
          Download Template
        </Button>
      </div>

      <div className="relative w-full mx-auto">
        <Image
          src={Subtract}
          alt="Subtract"
          className="w-full h-auto relative mt-[200px] mb-[583px] sm:mb-0"
          style={{ height: "auto" }} 
        />
        <DashboardMockup />
      </div>
    </section>
  )
}
