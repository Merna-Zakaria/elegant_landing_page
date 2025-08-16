import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import location from "@/assets/images/location.png";
import ellipse_1 from "@/assets/images/ellipse-1.png"

export default function ContactSection() {
  return (
    <section className="relative my-20 w-9/12 mx-auto  mt-[200px] px-6 grid grid-cols-1 md:grid-cols-2 ">
      <Image
        src={ellipse_1}
        alt="ellipse_1"
        width={100}
        height={100}
        className="absolute animate-pulse"
        style={{ height: "auto" }}
      />
      <Image
        src={location}
        alt="location"
        width={450}
        height={250}
        className="hidden md:block py-7 px-4"
        style={{ height: "auto" }} />

      <Image
        src={ellipse_1}
        alt="ellipse_1"
        width={100}
        height={100}
        className="absolute animate-pulse bottom-0 left-[30%]"
        style={{ height: "auto" }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
            problem.
          </p>
        </div>

        <Card className="bg-transparent border-0">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#18181C] rounded-xl">
                <Input
                  id="name"
                  placeholder="Enter your Email"
                  className="border-0 focus:border-primary py-7"
                />
              </div>
              <div className="bg-[#18181C] rounded-xl">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Name"
                  className="border-0 py-7 focus:border-primary"
                />
              </div>
            </div>
            <div className="bg-[#18181C] rounded-xl ">
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={7}
                className="focus:border-primary  border-0 py-7 h-28 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
