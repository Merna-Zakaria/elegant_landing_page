import { Button } from "@/components/ui/button"
import Image from "next/image";
import WImg from "@/assets/images/w.png";
import purpleCircle from "@/assets/images/purpleCircle.svg";
import monky from "@/assets/images/monky.png";
import flower from "@/assets/images/flower.png";
import whiteLogo from "@/assets/images/whiteLogo.svg";


const floatingIcons = [
  { icon: "⚙️", position: "top-10 left-10", delay: "0s" },
  { icon: "💡", position: "top-20 right-20", delay: "0.5s" },
  { icon: "🎨", position: "bottom-32 left-16", delay: "1s" },
  { icon: "📊", position: "bottom-20 right-10", delay: "1.5s" },
  { icon: "🚀", position: "top-1/2 left-8", delay: "2s" },
]

export default function GuideSection() {
  return (
    <section className="md:w-10/12 w-9/12 mx-auto py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left side - Floating icons */}
          <div className="relative h-96 lg:h-[500px] col-span-2 bg-[url('/orbits.svg')] bg-cover bg-center w-full">
            <Image
              src={whiteLogo}
              alt="logo"
              width={50}
              height={50}
              className="md:w-[70px] lg:w-[80px] absolute animate-pulse top-[44%] left-[38%] sm:left-[44%]"
              style={{ height: "auto" }} 
            />
              <Image
              src={purpleCircle}
              alt="icon"
              width={40}
              height={40}
              className="lg:w-[60px] absolute animate-bounce top-[14%] sm:top-[1%] left-[38%] sm:left-[44%]"
              style={{ height: "auto" }} 
            />
              <Image
              src={monky}
              alt="icon"
              width={100}
              height={100}
              className="w-[50px] lg:w-[60px] absolute animate-pulse top-[30%] sm:right-[17%] right-[3%]"
              style={{ height: "auto" }} 
            />
             <Image
              src={purpleCircle}
              alt="icon"
              width={40}
              height={40}
              className="lg:w-[60px] absolute animate-bounce bottom-[20%] sm:bottom-[2%] right-[20%] sm:right-[44%]"
              style={{ height: "auto" }} 
            />
              <Image
              src={WImg}
              alt="icon"
              width={100}
              height={100}
              className="w-[50px] lg:w-[60px] absolute animate-pulse bottom-[24%] sm:left-[17%] left-[3%]"
              style={{ height: "auto" }} 
            />
             <Image
              src={purpleCircle}
              alt="icon"
              width={40}
              height={40}
              className="lg:w-[60px] absolute animate-bounce top-[42%] sm:top-[38%] left-[-7%] sm:left-[15%]"
              style={{ height: "auto" }} 
            />
               <Image
              src={flower}
              alt="icon"
              width={100}
              height={100}
              className="w-[50px] lg:w-[60px] absolute animate-pulse top-[17%] sm:left-[22%] left-[10%]"
              style={{ height: "auto" }} 
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="font-sans text-2xl md:text-4xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
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
