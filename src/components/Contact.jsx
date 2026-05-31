import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "1-800-PACWEB",
    sub: "Toll-free, 24/7",
    href: "tel:1800PACWEB",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@pacificweb.ph",
    sub: "Response within 2 hours",
    href: "mailto:support@pacificweb.ph",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Alabang, Muntinlupa City",
    sub: "Alabang Town Center, 3rd Floor, Alabang, Muntinlupa City",
    href: null,
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "24 / 7 / 365",
    sub: "Always here for you",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "residential",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const inputClass =
    "w-full bg-dark-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:border-brand-500/50 transition-all duration-200";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
      <div className="orb w-[500px] h-[500px] top-1/2 left-[-150px] -translate-y-1/2 bg-brand-700/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass border border-brand-500/30 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Let's Get You <span className="text-gradient">Connected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle max-w-xl mx-auto"
          >
            Ready to sign up or have questions? Fill in the form and we'll get
            back to you within 2 hours — guaranteed.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <div
                key={label}
                className="glass border border-white/8 rounded-2xl p-5 flex items-start gap-4 card-hover"
              >
                <div className="w-11 h-11 bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="font-semibold text-white hover:text-brand-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="font-semibold text-white">{value}</div>
                  )}
                  <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}

            {/* Coverage checker note */}
            <div className="glass-strong border border-brand-500/20 rounded-2xl p-5 mt-2">
              <div className="text-brand-400 font-semibold text-sm mb-1">
                Check Your Coverage
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Call us with your address or mention it in the message form and
                we'll instantly verify if PACIFICWEB service is available at
                your location.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong border border-white/8 rounded-2xl p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-brand-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out! Our team will contact you within
                    2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        type: "residential",
                        message: "",
                      });
                    }}
                    className="btn-secondary text-sm mt-2"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                        Full Name <span className="text-brand-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Juan Dela Cruz"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                        Email Address <span className="text-brand-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="juan@email.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+63 9XX XXX XXXX"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                        Connection Type{" "}
                        <span className="text-brand-500">*</span>
                      </label>
                      <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      >
                        <option value="residential">Residential</option>
                        <option value="business">Business</option>
                        <option value="enterprise">Enterprise</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                      Your Message <span className="text-brand-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us your address, preferred plan, or any questions you have..."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-slate-600 text-xs">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-brand-500 hover:underline">
                      Privacy Policy
                    </a>
                    . We'll never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
