import SectionTitle from "./SectionTitle";
import Image from "next/image";

const specs = [
  {
    label: "7-inch Display",
    value: "High-resolution touchscreen for intuitive interaction."
  },
  {
    label: "HD Camera",
    value: "Computer vision for navigation and user recognition."
  },
  {
    label: "Voice Interface",
    value: "Natural language processing in regional languages."
  },
  {
    label: "Multi-Sensor Array",
    value: "Advanced sensors for obstacle detection and navigation."
  },
  {
    label: "Autonomous Movement",
    value: "Self-navigating with intelligent path planning."
  },
  {
    label: "Multi-Language Support",
    value: "National and regional language capabilities."
  }
];

export default function Specs() {
  return (
    <section id="specs" className="py-14 lg:py-20 bg-primary/5">
      <div className="section grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-start">
        <div className="order-2 lg:order-1 space-y-6">
          <SectionTitle
            eyebrow="Technical Specifications"
            title="Built with cutting-edge technology for reliable performance."
            subtitle="EMMO is engineered to operate safely in busy public spaces while staying connected to your transport infrastructure."
            align="left"
          />
          <div className="space-y-3">
            {specs.map((item) => (
              <details
                key={item.label}
                className="group rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl"
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
            <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-b from-white via-primary/10 to-white blur-2xl" />

            <div className="relative card rounded-[2.4rem] px-10 py-12 flex flex-col items-center gap-8">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 overflow-hidden rounded-[2rem] shadow-xl bg-slate-900">
                <Image
                  src="/images/Screenshot_20250928-174233.Photos.png"
                  alt="EMMO Robot Platform"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-center space-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
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
