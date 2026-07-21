import { Plane, GraduationCap, Ticket, BookUser, Globe2, FileCheck } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Travel Agency",
    description:
      "End-to-end trip planning, tour packages, hotel bookings and travel itineraries for holidays and business trips.",
  },
  {
    icon: GraduationCap,
    title: "Education Agency",
    description:
      "Study-abroad counselling, university admissions, course selection and student visa support for global institutions.",
  },
  {
    icon: Ticket,
    title: "Ticket Booking",
    description:
      "Domestic and international flight, train and bus tickets at competitive prices with instant confirmation.",
  },
  {
    icon: BookUser,
    title: "Passport Services",
    description:
      "New passport applications, renewals, corrections and document verification handled quickly and correctly.",
  },
  {
    icon: FileCheck,
    title: "Visa Processing",
    description:
      "Tourist, student and work visa assistance with complete documentation guidance and application filing.",
  },
  {
    icon: Globe2,
    title: "Other Services",
    description:
      "Travel insurance, forex assistance, attestation and general documentation support tailored to your needs.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need, under one roof
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From your first enquiry to your final destination, Sylcity handles it all with care and precision.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
