import { Card } from "@/components/ui/card"
import Image from "next/image";
import circle from "@/assets/images/circle.png"
import bars from "@/assets/images/bars.png"

export function DashboardMockup() {
  return (
    <div className="flex justify-center z-10 ">
      <Card className=" md:w-2xl w-8/12 absolute top-0 lg:top-16 bg-card/80  bg-darkGray border-border/50 p-6 rounded-2xl shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Left sidebar */}
          <div className="space-y-4 ">
            <div className="space-y-2 bg-lightGray border-border/50 p-6 rounded-2xl h-full">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-3 bg-muted/50 rounded animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Center content */}
          <div className="space-y-4 ">
            {/* Circular progress */}
            <div className="bg-lightGray border-border/50 p-6 rounded-2xl">
              <Image
                src={circle}
                alt="ellipse_3"
                width={250}
                height={250}
              />
            </div>

            <div className="bg-lightGray border-border/50 p-6 rounded-2xl">
              <div className="space-y-2 bg-lightGray border-border/50 p-6 rounded-2xl">
                {[1].map((i) => (
                  <div key={i} className="h-3 bg-muted/50 rounded animate-pulse"></div>
                ))}
              </div>
              <Image
                src={bars}
                alt="bar"
                width={250}
                height={250}
              />
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-4 ">
            {/* User avatars */}
            <div className="space-y-3 bg-lightGray border-border/50 p-6 rounded-2xl">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                  <div className="flex-1 h-2 bg-muted/50 rounded"></div>
                </div>
              ))}
            </div>
            <div className="bg-lightGray border-border/50 p-6 rounded-2xl h-24 hidden sm:block"></div>
          </div>
        </div>
      </Card>
    </div>
  )
}
