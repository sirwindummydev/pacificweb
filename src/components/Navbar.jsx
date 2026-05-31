import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wifi, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#features' },
  { label: 'Plans', href: '#plans' },
  { label: 'About', href: '#stats' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (label, href) => {
    setActiveLink(label)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong border-b border-white/[0.06] shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick('Home', '#home')}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src="/pacweb_icon_green.png"
                  alt="PACIFICWEB logo"
                  className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-wide text-white">
                  PACIFIC<span className="text-brand-400">WEB</span>
                </span>
                <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase">
                  Internet Services
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeLink === link.label
                      ? 'text-brand-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeLink === link.label && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-brand-500/10 rounded-lg border border-brand-500/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('Contact', '#contact')}
                className="btn-primary text-sm"
              >
                Get Connected
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden glass p-2 rounded-lg border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-strong border-b border-white/[0.06] shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                    activeLink === link.label
                      ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Wifi size={16} className={activeLink === link.label ? 'text-brand-400' : 'text-slate-500'} />
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => handleNavClick('Contact', '#contact')}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get Connected <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
