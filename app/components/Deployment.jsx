import SectionTitle from "./SectionTitle";

const scenarios = [
  {
    title: "Railway & Metro Stations",
    body: "Guide passengers to platforms, washrooms and ticket counters while answering FAQs about schedules and delays."
  },
  {
    title: "Malls & Smart Venues",
    body: "Boost footfall to stores, manage visitor flow during events and provide hands‑free indoor navigation."
  },
  {
    title: "Airports",
    body: "Assist with wayfinding from check‑in to boarding gates, highlight duty‑free offers and support irregular operations."
  }
];

export default function Deployment() {
  return (
    <section id="deployment" className="py-14 lg:py-20 bg-white">
      <div className="section space-y-10">
        <SectionTitle
          eyebrow="Deployment Scenarios"
          title="Designed for busy, high‑footfall environments."
          subtitle="Start with a single pilot robot and scale to a fleet connected to your operations dashboard."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {scenarios.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">
                {item.title[0]}
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
