import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, ShieldCheck, MapPin, Headphones, Router, ArrowUpDown, Globe2, Clock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast Speeds',
    description: 'Experience fiber-optic speeds up to 10 Gbps. Stream 4K, game competitively, and download files in seconds with zero buffering.',
    gradient: 'from-yellow-500/20 to-brand-500/20',
    border: 'border-yellow-500/20',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: ShieldCheck,
    title: '99.9% Uptime Guarantee',
    description: 'Backed by our enterprise-grade SLA. Our redundant network infrastructure ensures your connection stays online around the clock.',
    gradient: 'from-brand-500/20 to-emerald-500/20',
    border: 'border-brand-500/20',
    iconBg: 'bg-brand-500/10',
    iconColor: 'text-brand-400',
  },
  {
    icon: Globe2,
    title: 'Nationwide Coverage',
    description: 'Serving over 50 cities and expanding. Our dense fiber network reaches both urban centers and suburban communities.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Real humans, real answers — any time of day. Our certified network technicians are available by phone, chat, and on-site.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/20',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Router,
    title: 'Free Equipment',
    description: 'Get our latest Wi-Fi 7 router and modem at no extra cost. Enjoy whole-home coverage with mesh network expansion options.',
    gradient: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/20',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
  },
  {
    icon: ArrowUpDown,
    title: 'Symmetric Upload',
    description: 'Upload as fast as you download. Perfect for video conferencing, cloud backup, content creators, and remote work professionals.',
    gradient: 'from-teal-500/20 to-brand-500/20',
    border: 'border-teal-500/20',
    iconBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { icon: Icon, title, description, gradient, border, iconBg, iconColor } = feature

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass card-hover border ${border} rounded-2xl p-7 relative overflow-hidden group`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-12 h-12 ${iconBg} rounded-xl mb-5`}>
          <Icon size={24} className={iconColor} />
        </div>
        <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass border border-brand-500/30 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
          >
            Why PACIFICWEB
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Everything You Need to{' '}
            <span className="text-gradient">Stay Connected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle max-w-2xl mx-auto"
          >
            Built on a state-of-the-art fiber network, PACIFICWEB delivers more than just internet —
            it delivers peace of mind.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
