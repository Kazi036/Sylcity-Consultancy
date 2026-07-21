import { Plane } from "lucide-react"

const footerLinks = {
  Services: ["Travel Agency", "Education Agency", "Ticket Booking", "Passport Services"],
  Company: ["About Us", "Why Choose Us", "Process", "Contact"],
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Plane className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold">Sylcity Consultancy</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              Your trusted partner for travel, education, ticket booking, passport and visa
              services. One team, complete peace of mind.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-background/70 transition-colors hover:text-background">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-6 text-sm text-background/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sylcity Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-background">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-background">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
