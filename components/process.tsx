const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Share your goals with our advisors. We assess your needs and recommend the best options.",
  },
  {
    number: "02",
    title: "Planning & Documents",
    description:
      "We prepare a clear plan and help you gather and verify every required document.",
  },
  {
    number: "03",
    title: "Processing",
    description:
      "We handle applications, bookings and filings, keeping you updated at each stage.",
  },
  {
    number: "04",
    title: "You're Ready",
    description:
      "Receive your tickets, approvals or documents and set off with complete confidence.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#cf3524]">
            How It Works
          </p>

          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight md:text-4xl">
            A simple, transparent process
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-[#5c5c61] bg-[#4d4d52] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#cf3524] hover:shadow-2xl"
            >
              <span className="font-serif text-5xl font-bold text-[#cf3524]">
                {step.number}
              </span>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-white">
  {step.title}
</h3>

              <p className="text-sm leading-relaxed text-gray-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}