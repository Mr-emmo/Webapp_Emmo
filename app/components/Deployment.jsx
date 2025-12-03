import SectionTitle from "./SectionTitle";

const scenarios = [
  {
    title: "Railway Stations",
    body: "Platform information, train schedules, ticket booking assistance, and station navigation."
  },
  {
    title: "Bus Stands",
    body: "Route information, departure times, fare details, and local transport guidance."
  },
  {
    title: "Airports",
    body: "Flight information, terminal navigation, baggage claim, and tourist information."
  }
];

export default function Deployment() {
  return (
    <section id="deployment" className="py-14 lg:py-20 bg-white">
      <div className="section space-y-10">
        <SectionTitle
          eyebrow="Deployment Scenarios"
          title="EMMO enhances traveler experience across multiple transport hubs."
          subtitle="Deploy the same AI assistant across different nodes in your transport network for a unified experience."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {scenarios.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3">
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
