import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { label: "Trips assisted", value: "50,000+" },
  { label: "Daily interactions", value: "150+" },
  { label: "Cities supported", value: "100+" },
  { label: "Uptime reliability", value: "98%" },
];

const capabilities = [
  {
    title: "Intelligent Itinerary Planning",
    description:
      "Generates optimized travel plans based on user preferences, time, and budget.",
  },
  {
    title: "Real-Time Translation",
    description:
      "Bridges language gaps with instant speech and text translation for travelers.",
  },
  {
    title: "24/7 Travel Support",
    description:
      "Always-on guidance for navigation, bookings, and local information requests.",
  },
  {
    title: "Smart Recommendations",
    description:
      "Suggests attractions, restaurants, and activities tailored to the traveler profile.",
  },
  {
    title: "Budget Optimization",
    description:
      "Compares routes and options to keep travel costs under control without compromise.",
  },
  {
    title: "Emergency Assistance",
    description:
      "Quick access to emergency contacts, local authorities, and nearest help centers.",
  },
];

const specs = [
  {
    title: "Hardware",
    description:
      "Quad‑core ARM processor, 8GB RAM, 256GB NVMe storage, Wi‑Fi 6, Bluetooth 5.2, LTE-ready.",
  },
  {
    title: "Sensors & Mobility",
    description:
      "Depth cameras, LIDAR module (optional), microphone array, speaker, autonomous drive base.",
  },
  {
    title: "AI & Software",
    description:
      "On-device wake word detection, cloud LLM integration, multi-modal understanding, OTA updates.",
  },
  {
    title: "Security",
    description:
      "End-to-end encrypted cloud channel, role-based access control, local data isolation.",
  },
  {
    title: "Fleet Management",
    description:
      "Centralized dashboard for monitoring status, usage analytics, and software rollout.",
  },
  {
    title: "Language Support",
    description:
      "Supports 30+ languages with configurable domain-specific vocabulary packs.",
  },
];

const deployments = [
  {
    title: "Tourism Platforms",
    description:
      "Deploy in city tourism centers and travel desks to deliver guided experiences at scale.",
    icon: "🚌",
  },
  {
    title: "Star Hotels",
    description:
      "Offer lobby, concierge, and in-room digital assistance with personalized guest journeys.",
    icon: "🏨",
  },
  {
    title: "Airports",
    description:
      "Guide passengers from check-in to boarding with wayfinding and flight information.",
    icon: "✈️",
  },
];

const steps = [
  {
    step: 1,
    title: "Voice Interaction",
    description:
      "Guests talk naturally to EMMO using their preferred language and simple voice commands.",
  },
  {
    step: 2,
    title: "AI Processing",
    description:
      "Requests are processed in real time using on-device intelligence and secure cloud AI.",
  },
  {
    step: 3,
    title: "Instant Assistance",
    description:
      "EMMO responds with spoken guidance, visual cards, or QR codes for quick actions.",
  },
];

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formResult, setFormResult] = useState(null);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();
      if (res.ok) {
        setFormResult({ ok: true, message: data.message || "Submitted!" });
        setFormState({ name: "", email: "", company: "", message: "" });
      } else {
        setFormResult({ ok: false, message: data.message || "Something went wrong." });
      }
    } catch (err) {
      setFormResult({ ok: false, message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f4fbff] to-[#e5f5ff] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="section-container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-emmo-teal flex items-center justify-center text-white font-bold text-xl shadow-md">
              E
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-emmo-dark">
                EMMO
              </div>
              <div className="text-xs text-slate-500">AI Travel Robotics</div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#capabilities" className="hover:text-emmo-teal">
              Capabilities
            </a>
            <a href="#specs" className="hover:text-emmo-teal">
              Specs
            </a>
            <a href="#deploy" className="hover:text-emmo-teal">
              Deployment
            </a>
            <a href="#how" className="hover:text-emmo-teal">
              How it works
            </a>
            <a href="#contact" className="hover:text-emmo-teal">
              Contact
            </a>
          </nav>
          <div className="flex gap-2">
            <button className="hidden sm:inline-flex rounded-full border border-emmo-teal/40 px-4 py-1.5 text-xs font-medium text-emmo-teal hover:bg-emmo-teal/5 transition">
              Download Deck
            </button>
            <button className="inline-flex rounded-full bg-emmo-teal px-4 py-1.5 text-xs font-medium text-white shadow-md hover:shadow-lg hover:-translate-y-[1px] transition">
              Request Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="section-container pt-10 pb-16 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100 mb-4"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              AI Travel Assistant Robot · On‑prem & Cloud
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-emmo-dark"
            >
              Meet{" "}
              <span className="text-emmo-teal">
                EMMO
              </span>{" "}
              — Your AI Travel Robot Companion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl"
            >
              EMMO transforms travel spaces into intelligent, always-available
              help desks. From city tourism centers to airports and hotels, EMMO
              guides guests, answers questions, and removes language barriers —
              all using natural voice conversations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <button className="rounded-full bg-emmo-teal px-6 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg hover:-translate-y-[1px] transition">
                Talk to Sales
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-medium text-slate-700 hover:border-emmo-teal/60 hover:text-emmo-teal transition">
                Explore Docs
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/80 border border-slate-100 shadow-sm px-3 py-3"
                >
                  <div className="text-base font-semibold text-emmo-dark">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-slate-500">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Robot mock card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-emmo-teal/10 blur-3xl rounded-full" />
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-2xl p-6 w-64 sm:w-72">
                <div className="h-40 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-950 flex flex-col items-center justify-center gap-3">
                  <div className="h-16 w-28 rounded-3xl border border-slate-700 bg-slate-900 flex items-center justify-center shadow-inner relative">
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-emmo-teal shadow-md" />
                      <div className="h-4 w-4 rounded-full bg-emmo-teal shadow-md" />
                    </div>
                    <div className="absolute inset-x-6 bottom-3 h-[2px] bg-gradient-to-r from-transparent via-emmo-teal/60 to-transparent" />
                  </div>
                  <div className="h-20 w-24 rounded-2xl bg-slate-800 border border-slate-700" />
                  <div className="flex gap-4 mt-1">
                    <div className="h-5 w-5 rounded-full bg-slate-800 border border-emmo-teal shadow-[0_0_15px_rgba(43,213,197,0.6)]" />
                    <div className="h-5 w-5 rounded-full bg-slate-800 border border-emmo-teal shadow-[0_0_15px_rgba(43,213,197,0.6)]" />
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center text-[11px] text-slate-300">
                  <div>
                    <div className="font-medium text-white">EMMO Travel Unit</div>
                    <div className="text-[10px] text-slate-400">
                      Online · Docked · v1.4.2
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 text-[10px]">
                    Ready
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Capabilities */}
        <section
          id="capabilities"
          className="bg-white py-12 sm:py-16 border-y border-slate-100"
        >
          <div className="section-container">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-emmo-dark">
                Powerful Capabilities
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                EMMO combines advanced dialogue AI, navigation, and multi-language support
                to deliver delightful travel experiences on the ground.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col gap-2"
                >
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emmo-teal/10 text-emmo-teal text-lg">
                    ✨
                  </div>
                  <div className="font-semibold text-sm text-emmo-dark">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section id="specs" className="py-12 sm:py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-semibold text-emmo-dark">
                  Technical Specifications
                </h2>
                <p className="mt-2 text-sm text-slate-600 max-w-lg">
                  Built with enterprise-grade safety and reliability, EMMO is designed
                  for continuous operation in demanding public environments.
                </p>
                <div className="mt-6 space-y-3">
                  {specs.map((item) => (
                    <details
                      key={item.title}
                      className="group rounded-xl border border-slate-100 bg-white shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-emmo-dark">
                          {item.title}
                        </span>
                        <span className="text-xs text-slate-400 group-open:hidden">
                          +
                        </span>
                        <span className="text-xs text-slate-400 hidden group-open:inline">
                          -
                        </span>
                      </summary>
                      <div className="px-4 pb-3 text-xs text-slate-600">
                        {item.description}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-64 sm:w-72">
                  <div className="absolute -inset-6 bg-emmo-teal/20 blur-3xl rounded-full" />
                  <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-2xl p-6 flex flex-col items-center gap-4">
                    <div className="text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-400/40 px-3 py-1 rounded-full">
                      Designed for 24/7 operation
                    </div>
                    <div className="h-40 w-32 rounded-3xl bg-slate-800 border border-slate-600" />
                    <div className="w-full flex justify-between text-[10px] text-slate-300">
                      <span>Battery: 12 hrs</span>
                      <span>Auto-dock charging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section
          id="deploy"
          className="bg-white py-12 sm:py-16 border-y border-slate-100"
        >
          <div className="section-container">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-emmo-dark">
                Deployment Scenarios
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                EMMO can be deployed as a single pilot unit or a fully managed fleet
                across travel, hospitality, and public spaces.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {deployments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col gap-2"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emmo-teal/10 text-lg">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-sm text-emmo-dark">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-12 sm:py-16">
          <div className="section-container">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-emmo-dark">
                How EMMO Works
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                A tightly integrated voice + vision + cloud AI stack built specifically
                for travel and hospitality environments.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-slate-100 bg-white shadow-sm p-5 flex flex-col gap-3"
                >
                  <div className="absolute -top-3 left-4 h-6 w-6 rounded-full bg-emmo-teal text-white text-xs flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <div className="mt-2 font-semibold text-sm text-emmo-dark">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-white py-12 sm:py-16 border-t border-slate-100"
        >
          <div className="section-container grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-emmo-dark">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-md">
                Interested in deploying EMMO in your airport, hotel, or city? Share a few
                details and our team will reach out with a tailored demo and pilot plan.
              </p>
              <ul className="mt-5 space-y-2 text-xs text-slate-600">
                <li>• Support for custom integrations (booking engines, CRMs, kiosks)</li>
                <li>• On-prem, private cloud, and hybrid deployment options</li>
                <li>• Flexible commercial models for pilots and full rollouts</li>
              </ul>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 shadow-sm p-5 space-y-3"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-emmo-teal focus:ring-1 focus:ring-emmo-teal/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-emmo-teal focus:ring-1 focus:ring-emmo-teal/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-emmo-teal focus:ring-1 focus:ring-emmo-teal/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    How do you plan to use EMMO? *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-emmo-teal focus:ring-1 focus:ring-emmo-teal/40 resize-none"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="text-[11px] text-slate-500">
                    By submitting, you agree to be contacted about EMMO deployments.
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-emmo-teal px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-[1px] disabled:opacity-60 disabled:hover:translate-y-0 transition"
                  >
                    {submitting ? "Sending..." : "Submit"}
                  </button>
                </div>
                {formResult && (
                  <div
                    className={`text-xs mt-1 ${
                      formResult.ok ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {formResult.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-100 py-4 text-[11px] text-slate-500 bg-slate-50/60">
          <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>© {new Date().getFullYear()} EMMO Robotics Labs. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emmo-teal">
                Privacy
              </a>
              <a href="#" className="hover:text-emmo-teal">
                Terms
              </a>
              <a href="#" className="hover:text-emmo-teal">
                Status
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
