import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, MapPin, Wifi, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: 250000, suffix: '+', label: 'Happy Customers', description: 'Homes and businesses connected' },
  { icon: MapPin, value: 50, suffix: '+', label: 'Cities Covered', description: 'And expanding every quarter' },
  { icon: Wifi, value: 99.9, suffix: '%', label: 'Uptime Guarantee', description: 'Enterprise-grade SLA' },
  { icon: Award, value: 15, suffix: '+', label: 'Years of Service', description: 'Trusted since 2009' },
]

function useCounter(target, isFloat = false, duration = 2000, active = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const end = Date.now() + duration
    const timer = setInterval(() => {
      const now = Date.now()
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = isFloat
        ? parseFloat((eased * target).toFixed(1))
        : Math.floor(eased * target)
      setCount(current)
      if (now >= end) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, isFloat, active])

  return count
}

function StatCard({ stat, index, inView }) {
  const { icon: Icon, value, suffix, label, description } = stat
  const isFloat = !Number.isInteger(value)
  const count = useCounter(value, isFloat, 2000, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative glass card-hover border border-white/8 rounded-2xl p-8 text-center group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-brand-500/60 to-transparent" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-500/10 border border-brand-500/20 rounded-2xl mb-5">
          <Icon size={26} className="text-brand-400" />
        </div>

        <div className="font-display font-bold text-5xl text-white mb-2 tabular-nums">
          {isFloat ? count.toFixed(1) : count.toLocaleString()}
          <span className="text-brand-400">{suffix}</span>
        </div>

        <div className="font-semibold text-white text-lg mb-1">{label}</div>
        <div className="text-slate-500 text-sm">{description}</div>
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass border border-brand-500/30 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
          >
            By The Numbers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Trusted by Hundreds of{' '}
            <span className="text-gradient">Thousands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle max-w-xl mx-auto"
          >
            Our numbers speak louder than promises. Here's what over a decade of reliable
            service looks like.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-strong border border-brand-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 glow-green"
        >
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Ready to experience the difference?
            </h3>
            <p className="text-slate-400 text-sm">
              Join 250,000+ satisfied customers already on the PACIFICWEB network.
            </p>
          </div>
          <a href="#plans" className="btn-primary text-base px-8 py-4 shrink-0">
            See Our Plans
          </a>
        </motion.div>
      </div>
    </section>
  )
}
