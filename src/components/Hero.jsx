import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, Globe } from 'lucide-react'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 10,
}))

const badges = [
  { icon: Zap, label: '10 Gbps Max Speed' },
  { icon: Shield, label: '99.9% Uptime SLA' },
  { icon: Globe, label: 'Nationwide Coverage' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-950 grid-bg" />

      {/* Glow orbs */}
      <div className="orb w-[600px] h-[600px] top-[-200px] left-1/2 -translate-x-1/2 bg-brand-600/20" />
      <div className="orb w-[400px] h-[400px] top-1/2 right-[-100px] bg-brand-500/10" style={{ animationDelay: '3s' }} />
      <div className="orb w-[300px] h-[300px] bottom-0 left-[-50px] bg-emerald-500/10" style={{ animationDelay: '5s' }} />

      {/* Gradient fade top */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-dark-950 to-transparent" />
      {/* Gradient fade bottom */}
      <div className="absolute bottom-0 inset-x-0 h-60 bg-gradient-to-t from-dark-950 to-transparent" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <span className="glass border border-brand-500/30 text-brand-400 text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse-slow" />
                Now serving 50+ cities nationwide
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-bold text-5xl md:text-6xl xl:text-7xl leading-[1.08] tracking-tight">
                <span className="text-white">Ang Internet</span>
                <br />
                <span className="text-white">ng </span>
                <span className="text-gradient">Batangeño</span>
              </h1>
              <p className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-slate-400 mt-3">
                Fast<span className="mx-2 text-brand-500">·</span>Reliable<span className="mx-2 text-brand-500">·</span>Secure
              </p>
            </motion.div>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              PACIFICWEB delivers blazing-fast fiber internet for homes and businesses.
              Experience unrivaled connectivity with zero downtime and dedicated 24/7 support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#plans" className="btn-primary text-base px-8 py-4">
                View Plans
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary text-base px-8 py-4">
                <Play size={16} className="fill-current" />
                Check Coverage
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 glass border border-white/8 rounded-full px-4 py-2"
                >
                  <Icon size={14} className="text-brand-400" />
                  <span className="text-slate-300 text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Signal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Main visual card */}
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              {/* Outer signal rings */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="signal-ring absolute border border-brand-500/20 rounded-full"
                  style={{
                    width: `${i * 120}px`,
                    height: `${i * 120}px`,
                    animationDelay: `${(i - 1) * 0.6}s`,
                  }}
                />
              ))}

              {/* Glass card center */}
              <div className="relative z-10 glass-strong border border-brand-500/20 rounded-3xl p-10 glow-green text-center">
                <img
                  src="/pacweb_icon_green.png"
                  alt="PACIFICWEB"
                  className="w-20 h-20 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-float"
                />
                <div className="text-3xl font-display font-bold text-white">10 Gbps</div>
                <div className="text-brand-400 text-sm font-medium mt-1">Max Download Speed</div>

                {/* Speed bar */}
                <div className="mt-4 w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full"
                  />
                </div>
                <div className="text-xs text-slate-500 mt-1">Network Utilization: 92%</div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass border border-brand-500/20 rounded-2xl px-4 py-3"
              >
                <div className="text-brand-400 font-bold text-lg">99.9%</div>
                <div className="text-slate-400 text-xs">Uptime SLA</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass border border-brand-500/20 rounded-2xl px-4 py-3"
              >
                <div className="text-brand-400 font-bold text-lg">{'<1ms'}</div>
                <div className="text-slate-400 text-xs">Avg Latency</div>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 3, -8] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-16 glass border border-brand-500/20 rounded-2xl px-4 py-3 -translate-y-1/2"
              >
                <div className="text-brand-400 font-bold text-lg">50+</div>
                <div className="text-slate-400 text-xs">Cities Covered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-12 bg-gradient-to-b from-brand-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
