import SectionTitle from "./SectionTitle";

const features = [
  {
    title: "Intelligent Itinerary Planning",
    body: "AI-powered route optimization and personalized travel suggestions based on your preferences."
  },
  {
    title: "Real-Time Translation",
    body: "Break language barriers with instant translation in 100+ languages."
  },
  {
    title: "24/7 Travel Support",
    body: "Get instant answers to travel questions anytime, anywhere."
  },
  {
    title: "Smart Recommendations",
    body: "Discover hidden gems and local favorites with AI-curated suggestions."
  },
  {
    title: "Budget Optimization",
    body: "Find the best deals and optimize your travel spending automatically."
  },
  {
    title: "Emergency Assistance",
    body: "Quick access to emergency services and support in any location."
  }
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-14 lg:py-20 bg-gradient-to-b from-white to-primary/5"
    >
      <div className="section space-y-10">
        <SectionTitle
          eyebrow="Powerful Capabilities"
          title="Advanced features designed for seamless public transport assistance."
          subtitle="EMMO combines voice AI, navigation and integrations with transport systems to keep every traveler informed and confident."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card relative overflow-hidden">
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
