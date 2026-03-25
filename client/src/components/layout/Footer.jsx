import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const serviceAreas = [
  'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
  'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'Dallas, TX',
  'Miami, FL', 'Seattle, WA',
]

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-orange rounded-xl flex items-center justify-center">
                <Truck size={18} className="text-white" />
              </div>
              <div>
                <span className="font-bold text-xl leading-none block">Swift</span>
                <span className="text-brand-orange font-bold text-xl leading-none block -mt-0.5">Move</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              America's trusted moving partner since 2004. Licensed, insured, and committed to making your move smooth.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-brand-navy-700 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-400">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                ['Services', '#services'],
                ['How It Works', '#how-it-works'],
                ['Why Choose Us', '#why-us'],
                ['Testimonials', '#testimonials'],
                ['Coverage Map', '#coverage'],
                ['Get a Quote', '#quote'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/70 hover:text-brand-orange transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-400">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/70 hover:text-brand-orange transition-colors cursor-pointer">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-400">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+18005551234" className="flex items-center gap-3 text-sm text-white/70 hover:text-brand-orange transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-brand-navy-700 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <Phone size={14} />
                  </div>
                  (800) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hello@swiftmove.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-brand-orange transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-brand-navy-700 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <Mail size={14} />
                  </div>
                  hello@swiftmove.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <div className="w-8 h-8 rounded-lg bg-brand-navy-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <span>123 Moving Ave, Suite 400<br />New York, NY 10001</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-navy-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">© 2026 SwiftMove LLC. All rights reserved. USDOT #1234567</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'License Info'].map((link) => (
              <a key={link} href="#" className="text-sm text-white/70 hover:text-brand-orange transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
