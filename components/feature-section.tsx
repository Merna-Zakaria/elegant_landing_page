import Image from "next/image";
import { Card } from "@/components/ui/card"
import feature1 from "@/assets/images/feature1.png";
import feature2 from "@/assets/images/feature2.png";
import feature3 from "@/assets/images/feature3.png";
import feature4 from "@/assets/images/feature4.png";
import feature5 from "@/assets/images/feature5.png";
import feature6 from "@/assets/images/feature6.png";

const features = [
  {
    icon: feature1,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: feature2,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: feature3,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: feature4,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: feature5,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
  {
    icon: feature6,
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
  },
]

export default function FeatureSection() {
  return (
    <section className="w-full flex justify-center ">
      <div className="md:w-10/12 w-8/12">
        <div className="mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">Feature Boxes</h2>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
            problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 text-center gray p-6 hover:border-primary/50 transition-colors group">
              <div className="w-full flex justify-center mb-4">
                <div className="cursor-pointer flex justify-center align-middle w-24 py-6 bg-[#222228] rounded-3xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary ">
                  <Image
                    src={feature.icon}
                    alt="icon"
                    width={45}
                    height={45}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              {/* <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div> */}
              <h3 className="font-sans text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="font-mono text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
