import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Zap, Star, Building2, Home } from "lucide-react";

const homePlans = [
  {
    name: "Basic",
    speed: "Up to 50 Mbps",
    price: 999,
    description: "Perfect for light browsing and streaming",
    features: [
      { text: "100 Mbps download", included: true },
      { text: "50 Mbps upload", included: true },
      { text: "Wi-Fi 6 router included", included: true },
      { text: "Unlimited data", included: true },
      { text: "Email support", included: true },
      { text: "Static IP address", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Basic",
    popular: false,
    badge: null,
  },
  {
    name: "Standard",
    speed: "Up to 100 Mbps",
    price: 1299,
    description: "Ideal for families and remote workers",
    features: [
      { text: "500 Mbps download", included: true },
      { text: "500 Mbps upload", included: true },
      { text: "Wi-Fi 7 mesh router included", included: true },
      { text: "Unlimited data", included: true },
      { text: "24/7 phone & chat support", included: true },
      { text: "Static IP address", included: true },
      { text: "Priority support", included: false },
    ],
    cta: "Get Standard",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    speed: "Up to 150 Mbps",
    price: 1499,
    description: "Maximum performance for power users",
    features: [
      { text: "1 Gbps download", included: true },
      { text: "1 Gbps upload", included: true },
      { text: "Wi-Fi 7 mesh router included", included: true },
      { text: "Unlimited data", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Static IP address", included: true },
      { text: "Dedicated technician", included: true },
    ],
    cta: "Get Premium",
    popular: false,
    badge: "Best Value",
  },
];

const businessPlans = [
  {
    name: "Starter",
    speed: "Up to 500 Mbps",
    price: 1699,
    description: "Small teams and startups",
    features: [
      { text: "500 Mbps symmetric", included: true },
      { text: "5 static IP addresses", included: true },
      { text: "Business-grade router", included: true },
      { text: "SLA 99.9% uptime", included: true },
      { text: "Business support hours", included: true },
      { text: "Failover protection", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Starter",
    popular: false,
    badge: null,
  },
  {
    name: "Professional",
    speed: "2 Gbps",
    price: 1999,
    description: "Growing businesses and enterprises",
    features: [
      { text: "2 Gbps symmetric", included: true },
      { text: "20 static IP addresses", included: true },
      { text: "Enterprise-grade router", included: true },
      { text: "SLA 99.99% uptime", included: true },
      { text: "24/7 business support", included: true },
      { text: "Failover protection", included: true },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Professional",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    speed: "10 Gbps",
    price: 2999,
    description: "Large-scale operations, custom SLA",
    features: [
      { text: "10 Gbps symmetric", included: true },
      { text: "Unlimited static IPs", included: true },
      { text: "Custom network equipment", included: true },
      { text: "Custom SLA guarantee", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Automatic failover", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
    badge: "Enterprise",
  },
];

function PlanCard({ plan, index, inView }) {
  const { name, speed, price, description, features, cta, popular, badge } =
    plan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        popular
          ? "border-2 border-brand-500 glow-green-strong bg-gradient-to-b from-brand-950/80 to-dark-800/60 scale-[1.02]"
          : "glass border border-white/8 card-hover"
      }`}
    >
      {/* Popular badge */}
      {badge && (
        <div
          className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold rounded-bl-xl tracking-wide ${
            popular ? "bg-brand-500 text-white" : "bg-white/10 text-slate-300"
          }`}
        >
          {badge === "Most Popular" && (
            <Star size={10} className="inline mr-1 fill-current" />
          )}
          {badge}
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Plan header */}
        <div className="mb-6">
          <div
            className={`text-sm font-semibold uppercase tracking-widest mb-2 ${popular ? "text-brand-400" : "text-slate-500"}`}
          >
            {name}
          </div>
          <div className="flex items-end gap-1 mb-2">
            <span className="text-slate-400 text-lg font-medium">₱</span>
            <span className="font-display font-bold text-5xl text-white tabular-nums">
              {price}
            </span>
            <span className="text-slate-500 text-sm mb-2">/mo</span>
          </div>
          <div
            className={`flex items-center gap-2 font-semibold text-lg ${popular ? "text-brand-300" : "text-slate-200"}`}
          >
            <Zap
              size={18}
              className={popular ? "text-brand-400" : "text-slate-400"}
            />
            {speed}
          </div>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Divider */}
        <div
          className={`border-t mb-6 ${popular ? "border-brand-500/30" : "border-white/[0.06]"}`}
        />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {features.map(({ text, included }) => (
            <li key={text} className="flex items-start gap-3">
              <span
                className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                  included
                    ? popular
                      ? "bg-brand-500/20 text-brand-400"
                      : "bg-brand-900/40 text-brand-500"
                    : "bg-white/5 text-slate-600"
                }`}
              >
                {included ? <Check size={12} /> : <X size={12} />}
              </span>
              <span
                className={`text-sm ${included ? "text-slate-300" : "text-slate-600 line-through"}`}
              >
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`mt-8 w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-200 ${
            popular
              ? "bg-brand-500 hover:bg-brand-400 text-white"
              : "glass border border-white/10 hover:border-brand-500/40 text-white hover:bg-brand-500/10"
          }`}
          style={popular ? { boxShadow: "0 0 20px rgba(34,197,94,0.3)" } : {}}
        >
          {cta}
        </a>
      </div>
    </motion.div>
  );
}

export default function Plans() {
  const [tab, setTab] = useState("home");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const plans = tab === "home" ? homePlans : businessPlans;

  return (
    <section id="plans" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
      <div className="orb w-[600px] h-[400px] top-0 right-[-200px] bg-brand-700/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass border border-brand-500/30 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
          >
            Pricing Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle max-w-xl mx-auto mb-10"
          >
            No hidden fees. No contracts required. Cancel anytime with 30 days
            notice.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex glass border border-white/10 rounded-xl p-1"
          >
            <button
              onClick={() => setTab("home")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === "home"
                  ? "bg-brand-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Home size={16} /> Residential
            </button>
            <button
              onClick={() => setTab("business")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === "business"
                  ? "bg-brand-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 size={16} /> Business
            </button>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          All plans include free installation, professional setup, and a 30-day
          money-back guarantee.
          <br />
          Prices shown in Philippine Pesos (₱). Taxes and fees may apply.
        </motion.p>
      </div>
    </section>
  );
}
