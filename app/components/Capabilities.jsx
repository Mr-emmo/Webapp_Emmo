import SectionTitle from "./SectionTitle";

const features = [
  {
    title: "Intelligent Itinerary Planning",
    body: "Understands natural language queries to suggest routes, timings and nearby facilities for each traveller profile."
  },
  {
    title: "Real‑time Translation",
    body: "Supports multi-lingual voice and text translation to bridge communication between staff and visitors."
  },
  {
    title: "24/7 Venue Support",
    body: "Autonomous navigation lets EMMO patrol lobbies and gates while answering FAQs and guiding visitors."
  },
  {
    title: "Smart Recommendations",
    body: "Upsell food, retail and services by nudging travellers with context-aware offers at the right moment."
  },
  {
    title: "Ticket & Booking Guidance",
    body: "Explains booking steps, scans QR codes and directs users to counters or kiosks when human help is needed."
  },
  {
    title: "Safety & Emergency Assistance",
    body: "Broadcasts safety instructions and pushes critical alerts to travellers in emergencies."
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-14 lg:py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="section space-y-10">
        <SectionTitle
          eyebrow="Powerful Capabilities"
          title="A single robot, multiple travel experiences."
          subtitle="EMMO combines natural language understanding, indoor navigation and venue integrations so guests always know what to do next."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-emerald-50" />
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
