import { Clock, Users, Award, HeadphonesIcon } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Experienced & Certified",
    description: "A qualified team with years of experience across travel, education and documentation.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround on visas, passports and bookings so you never miss a deadline.",
  },
  {
    icon: Users,
    title: "Personalised Guidance",
    description: "Every client gets a dedicated advisor and a plan built around their goals.",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable Support",
    description: "Clear communication and responsive support from enquiry to completion.",
  },
]

const stats = [
  { value: "490+", label: "Clients Served" },
  { value: "10+", label: "Countries Covered" },
  { value: "95%", label: "Success Rate" },
  { value: "2+", label: "Years Experience" },
]

export function WhyUs() {
  return (
    <section id="why-us" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight md:text-4xl">
              A partner you can trust with every journey
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We combine local expertise with global reach to deliver honest advice, transparent
              pricing and dependable service every step of the way.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <reason.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 font-semibold">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <p className="font-serif text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
