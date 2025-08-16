import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ellipse_1 from "@/assets/images/ellipse-1.png"
import map from "@/assets/images/map.png";

export function CTASection() {
  return (
    <section className="py-20 px-6  mx-auto w-9/12">
      <Card className=" relative grid grid-cols-1 md:grid-cols-2  bg-gradient-to-r from-primary to-secondary p-8 py-10 md:p-12 rounded-3xl">
        <div className="relative z-10 text-center sm:text-left text-primary-foreground">
          <p className="font-mono text-sm mb-2 opacity-90">Love our Our Tool?</p>
          <h2 className="font-sans text-2xl md:text-3xl font-bold mb-6">
            Feel Free to Join our
            <br />
            15 Days Free Trial
          </h2>
          <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
            Download Template
          </Button>
        </div>
        <div className="relative">
          <Image
        src={ellipse_1}
        alt="ellipse_1"
        width={100}
        height={100}
        priority
        className="absolute animate-pulse"
      />
        <Image
          src={map}
          alt="logo"
          width={600}
          height={250}
          className="absolute z-50 right-[-115px]" />
          <Image
        src={ellipse_1}
        alt="ellipse_1"
        width={100}
        height={100}
        priority
        className="absolute animate-pulse"
      />
        </div>

      </Card>
    </section>
  )
}
