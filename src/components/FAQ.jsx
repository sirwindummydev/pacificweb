import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How fast is installation?',
    a: 'Most residential installations are completed within 1–3 business days after you sign up. Our certified technicians will call to schedule a time that works for you. Business installations may take 3–5 business days depending on site requirements.',
  },
  {
    q: 'Is there a data cap or throttling?',
    a: 'No. All PACIFICWEB plans come with truly unlimited data, and we never throttle your speed based on usage. What you sign up for is what you get — consistently, every day.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No contracts required! Our plans are month-to-month. You can cancel anytime with 30 days written notice. We also offer discounted rates for 12- and 24-month commitments if you prefer.',
  },
  {
    q: 'What equipment is included?',
    a: 'Every plan includes a free Wi-Fi router and modem. Standard and Premium plans come with a Wi-Fi 7 mesh-capable router. Business plans include enterprise-grade equipment suited to your network needs.',
  },
  {
    q: 'Is PACIFICWEB available in my area?',
    a: 'We currently serve 50+ cities across the Philippines, with coverage expanding quarterly. Use our coverage checker on this page or call us at 1-800-PACWEB to verify availability at your specific address.',
  },
  {
    q: 'What happens if my internet goes down?',
    a: 'Contact our 24/7 support team immediately. We run remote diagnostics first, and if the issue cannot be resolved remotely, a technician is dispatched — typically within 4 hours for residential and 2 hours for business customers.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Absolutely. You can change your plan at any time through our customer portal or by calling our support team. Changes take effect on your next billing cycle, and there are no fees for plan changes.',
  },
  {
    q: 'Do you offer static IP addresses?',
    a: 'Standard and Premium residential plans include one free static IP. Business plans include multiple static IPs (5 for Starter, 20 for Professional, unlimited for Enterprise). Additional IPs are available on request.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`glass border rounded-xl overflow-hidden transition-colors duration-300 ${
        open ? 'border-brand-500/30' : 'border-white/[0.07]'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm transition-colors duration-200 ${open ? 'text-brand-400' : 'text-white group-hover:text-brand-300'}`}>
          {item.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
          open ? 'bg-brand-500/20 text-brand-400' : 'bg-white/5 text-slate-400'
        }`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const half = Math.ceil(faqs.length / 2)
  const col1 = faqs.slice(0, half)
  const col2 = faqs.slice(half)

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass border border-brand-500/30 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Questions?{' '}
            <span className="text-gradient">We've Got Answers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle max-w-xl mx-auto"
          >
            Everything you need to know before switching to PACIFICWEB.
            Can't find your answer? Our team is always happy to help.
          </motion.p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {col1.map((item, i) => (
              <FAQItem key={item.q} item={item} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((item, i) => (
              <FAQItem key={item.q} item={item} index={i + half} />
            ))}
          </div>
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center glass border border-white/8 rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Our support team is available 24/7 to help you make the best choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1800PACWEB" className="btn-secondary text-sm px-8 py-3">
              Call 1-800-PACWEB
            </a>
            <a href="#contact" className="btn-primary text-sm px-8 py-3">
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
