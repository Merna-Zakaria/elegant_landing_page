import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import location from "@/assets/images/location.png";

export function ContactSection() {
  return (
    <section className="my-20 w-9/12 mx-auto  mt-[200px] px-6 grid grid-cols-1 md:grid-cols-2 ">
         <Image
          src={location}
          alt="location"
          width={400}
          height={250}
          className="hidden md:block" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
            problem.
          </p>
        </div>

        <Card className="bg-card border-border p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
                className="bg-input border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
