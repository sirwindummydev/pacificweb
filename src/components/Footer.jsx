import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Wifi } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Residential Internet', href: '#plans' },
    { label: 'Business Internet', href: '#plans' },
    { label: 'Enterprise Solutions', href: '#plans' },
    { label: 'Coverage Map', href: '#contact' },
    { label: 'Speed Test', href: '#' },
  ],
  Company: [
    { label: 'About PACIFICWEB', href: '#stats' },
    { label: 'Our Network', href: '#features' },
    { label: 'Careers', href: '#' },
    { label: 'Press & Media', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '#faq' },
    { label: 'Contact Support', href: '#contact' },
    { label: 'Check Outage Status', href: '#' },
    { label: 'Technical FAQ', href: '#faq' },
    { label: 'Community Forum', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Acceptable Use Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'NTC Compliance', href: '#' },
  ],
}

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/[0.05]">
      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <img
                src="/pacweb_icon_green.png"
                alt="PACIFICWEB"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="leading-none">
                <div className="font-display font-bold text-xl text-white tracking-wide">
                  PACIFIC<span className="text-brand-400">WEB</span>
                </div>
                <div className="text-[10px] text-slate-600 tracking-widest uppercase mt-0.5">
                  Internet Services
                </div>
              </div>
            </a>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Philippines' most trusted fiber internet provider. Delivering lightning-fast,
              reliable connectivity to homes and businesses since 2009.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* NTC badge */}
            <div className="flex items-center gap-2 glass border border-white/8 rounded-xl px-4 py-3 w-fit">
              <Wifi size={16} className="text-brand-400" />
              <div>
                <div className="text-white text-xs font-semibold">NTC Certified</div>
                <div className="text-slate-600 text-[10px]">Reg. No. PW-2009-0147</div>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-slate-500 hover:text-brand-400 text-sm transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} PACIFICWEB Internet Services. All rights reserved.
            <br className="sm:hidden" />
            {' '}PACIFICWEB is a registered trademark in the Philippines.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-brand-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
