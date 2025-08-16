import Image from "next/image";
import {CTASection} from "@/components/cta-section"
import comp1 from "@/assets/images/_1.png";
import comp2 from "@/assets/images/_2.png";
import comp3 from "@/assets/images/_3.png";
import comp4 from "@/assets/images/_4.png";
import comp5 from "@/assets/images/_5.png";
import comp6 from "@/assets/images/_6.png";

const companies = [comp1, comp2, comp3, comp4, comp5, comp6]

export function CompaniesSection() {
  return (
    <section className="py-20 pb-52 bg-[#18181C] relative">
      <div className="mx-auto w-9/12 text-center ">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-12">
          Companies we Worked
          <br />
          With in Since 2015
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex align-middle justify-center bg-black py-7 h-[75px] rounded-2xl cursor-pointer"
            >
              <Image
                src={company}
                alt="icon"
                width={60}
                height={60} />
            </div>

          ))}
        </div>
      </div>
        <div className="absolute w-full">
         <CTASection />
        </div>
    </section>
  )
}
