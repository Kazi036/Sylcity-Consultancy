"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+8801345-155171" },
  { icon: Mail, label: "Email", value: "sylcityinfo@gmail.com" },
  { icon: MapPin, label: "Office", value: "Rang Mohol Tower 4th Floor (Lift 3rd), Bandar Bazar, Sylhet, Bangladesh, 3100" },
]

const services = [
  "Tour & Tourism",
  "Education Consultancy",
  "Ticket Booking",
  "Passport Services",
  "Visa Processing",
  "Other",
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</p>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s plan your next step together
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Reach out for a free, no-obligation consultation. Our team will get back to you within
              one business day.
            </p>

            <ul className="mt-8 space-y-5">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <detail.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Thank you!</h3>
                <p className="text-muted-foreground">
                  Your request has been received. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
