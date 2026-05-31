import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Work-From-Home Professional',
    location: 'Quezon City',
    avatar: 'MS',
    rating: 5,
    text: "Switched to PACIFICWEB six months ago and never looked back. My video calls are crystal clear, downloads are instant, and not a single outage since I signed up. The installation team was professional and quick.",
    plan: 'Standard 500 Mbps',
  },
  {
    name: 'Carlo Reyes',
    role: 'Small Business Owner',
    location: 'Makati City',
    avatar: 'CR',
    rating: 5,
    text: "As a restaurant owner, reliable internet is non-negotiable. Our POS, deliveries, and reservations all run on PACIFICWEB. The business plan is worth every peso — their support team even called to check on us after heavy rains.",
    plan: 'Business Professional',
  },
  {
    name: 'Janine Lim',
    role: 'Content Creator & Streamer',
    location: 'Cebu City',
    avatar: 'JL',
    rating: 5,
    text: "I stream 4K content daily and upload huge video files constantly. The symmetric speeds on the Premium plan are a game-changer. My stream has never dropped and my upload speeds are faster than most big city ISPs.",
    plan: 'Premium 1 Gbps',
  },
  {
    name: 'Mark Dela Cruz',
    role: 'IT Manager',
    location: 'Davao City',
    avatar: 'MD',
    rating: 5,
    text: "We manage 200+ workstations across three floors. PACIFICWEB's enterprise setup was flawless. The dedicated account manager actually understands our needs and responds within minutes. Highly recommended for businesses.",
    plan: 'Enterprise 10 Gbps',
  },
  {
    name: 'Rina Tan',
    role: 'Nursing Student',
    location: 'Manila',
    avatar: 'RT',
    rating: 5,
    text: "The Basic plan is perfect for my budget and more than enough for streaming lectures, studying online, and video calls with family. Setup was super easy, and the router actually covers my whole apartment!",
    plan: 'Basic 100 Mbps',
  },
  {
    name: 'Emilio Vasquez',
    role: 'Architect',
    location: 'Paranaque',
    avatar: 'EV',
    rating: 5,
    text: "I regularly send massive CAD and BIM files to clients around the world. With PACIFICWEB's gigabit upload speeds, what used to take 30 minutes now takes under 2 minutes. It's transformed how I collaborate with clients.",
    plan: 'Premium 1 Gbps',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="glass card-hover border border-white/8 rounded-2xl p-7 flex flex-col gap-5 h-full">
      <div className="flex items-start justify-between">
        <StarRating rating={testimonial.rating} />
        <Quote size={24} className="text-brand-600/40" />
      </div>

      <p className="text-slate-300 text-sm leading-relaxed flex-1">
        "{testimonial.text}"
      </p>

      <div className="pt-4 border-t border-white/[0.06] flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
          <div className="text-slate-500 text-xs">{testimonial.role} · {testimonial.location}</div>
        </div>
        <span className="ml-auto text-[10px] font-semibold text-brand-500/80 bg-brand-500/10 border border-brand-500/20 px-2 py-1 rounded-full whitespace-nowrap">
          {testimonial.plan}
        </span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-800/30 to-dark-950" />
      <div className="orb w-[400px] h-[400px] bottom-0 left-0 bg-brand-700/8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass border border-brand-500/30 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
          >
            Customer Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Real People,{' '}
            <span className="text-gradient">Real Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle max-w-xl mx-auto"
          >
            Join thousands of satisfied customers who rely on PACIFICWEB every day.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {visible.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="glass border border-white/10 p-2.5 rounded-xl disabled:opacity-30 hover:border-brand-500/30 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === page ? 'bg-brand-400 w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="glass border border-white/10 p-2.5 rounded-xl disabled:opacity-30 hover:border-brand-500/30 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 glass border border-white/8 rounded-2xl py-8 px-10"
        >
          <div className="text-center">
            <div className="font-display font-bold text-5xl text-white">4.9</div>
            <StarRating rating={5} />
            <div className="text-slate-500 text-xs mt-1">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-white/[0.06] hidden sm:block" />
          <div className="text-center">
            <div className="font-display font-bold text-5xl text-white">98%</div>
            <div className="text-brand-400 text-sm font-medium mt-1">Satisfaction Rate</div>
            <div className="text-slate-500 text-xs mt-1">Based on customer surveys</div>
          </div>
          <div className="w-px h-16 bg-white/[0.06] hidden sm:block" />
          <div className="text-center">
            <div className="font-display font-bold text-5xl text-white">250K+</div>
            <div className="text-brand-400 text-sm font-medium mt-1">Reviews Collected</div>
            <div className="text-slate-500 text-xs mt-1">Across all platforms</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
