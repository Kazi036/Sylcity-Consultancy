import Image from "next/image"
import { CheckCircle2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = ["Visa & Passport Support", "Study Abroad Guidance", "Best Flight Deals"]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          

          <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Welcome to Sylcity
          </h1>

          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Sylcity Consultancy makes travel, studying abroad, ticket booking and passport services
            simple and stress-free. One trusted team handling all your documentation and journeys.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="#contact" />} nativeButton={false} size="lg">
              Book a Free Consultation
            </Button>
            <Button render={<a href="#services" />} nativeButton={false} size="lg" variant="outline">
              Explore Services
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
        <div className="relative h-[450px] overflow-hidden rounded-2xl border border-border shadow-lg">
  <Image
    src="/images/Rman.png"
    alt="Traveler holding a passport in a modern airport departure lounge"
    fill
    priority
    className="object-cover"
  />
          </div>
        </div>
      </div>
    </section>
  )
}
