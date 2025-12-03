import SectionTitle from "./SectionTitle";

const specs = [
  {
    label: "Dimensions & Build",
    value:
      "Compact indoor-friendly footprint with impact-resistant body, rounded edges and low-noise wheels for public spaces."
  },
  {
    label: "Sensors & Awareness",
    value:
      "360° LiDAR + depth cameras for obstacle avoidance, RGB camera for interaction, microphones and speaker array."
  },
  {
    label: "Computation",
    value:
      "On-board edge compute with dedicated AI acceleration, Wi‑Fi / 5G support and secure cloud connection."
  },
  {
    label: "Autonomy & Charging",
    value:
      "8–10 hours of mixed operation with auto‑dock charging between missions and smart battery health monitoring."
  },
  {
    label: "Software & Integrations",
    value:
      "Customizable skills for each venue, REST APIs and webhooks to integrate with ticketing, CRM and signage."
  },
  {
    label: "Multi‑language Support",
    value:
      "Pre‑trained on major global languages with add‑on support packs to localize flows for your region."
  }
];

export default function Specs() {
  return (
    <section id="specs" className="py-14 lg:py-20">
      <div className="section grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-start">
        <div className="order-2 lg:order-1 space-y-6">
          <SectionTitle
            eyebrow="Technical Specifications"
            title="Built with safety, uptime and scalability in mind."
            subtitle="High‑reliability hardware paired with cloud software that can be updated over the air as your venue evolves."
            align="left"
          />
          <div className="space-y-3">
            {specs.map((item) => (
              <details
                key={item.label}
                className="group rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-soft/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-900">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="text-xs text-slate-500 hidden group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.value}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-b from-emerald-100/70 via-white to-sky-50 blur-2xl" />
            <div className="relative card rounded-[2.4rem] px-10 py-12 flex flex-col items-center gap-8">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 overflow-hidden rounded-[2rem] shadow-xl">
  <Image
    src="/images/robot-platform.png"
    alt="Robot Platform"
    fill
    className="object-cover rounded-[2rem]"
    priority
  />
</div>

              <div className="text-center space-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-500">
                  Robot Platform
                </p>
                <p className="text-sm text-slate-500">
                  Visual for illustration only. Final industrial design can be
                  customized for your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
