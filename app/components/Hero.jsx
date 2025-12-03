import Stats from "./Stats";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section pt-10 pb-16 lg:pt-14 lg:pb-24 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 items-center">
      <div className="space-y-8">
        <p className="inline-flex items-center rounded-full bg-primary/5 px-4 py-2 text-[11px] font-medium text-primary border border-primary/20 gap-2">
          <span>🚉 🚌 ✈️</span>
          <span>Smart Public Transport Assistant</span>
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Meet EMMO <span className="text-primary">AI Travel Robot</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            An autonomous, AI-powered smart assistant robot designed to
            revolutionize travel experiences at railway stations, bus stands,
            and airports. EMMO provides real-time voice-based assistance in
            multiple languages, offering transportation info, emergency
            support, navigation, and tourist guidance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-teal-600 transition-colors"
          >
            Request Demo
          </a>

          <a
            href="#capabilities"
            className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-xs font-medium text-primary bg-white hover:bg-primary/5 transition-colors"
          >
            Explore Features
          </a>
        </div>

        <Stats />
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-b from-primary/10 to-sky-50 blur-2xl" />

          <div className="relative card rounded-[2.2rem] p-6 flex flex-col items-center gap-6">
            <div className="relative w-52 h-72 sm:w-64 sm:h-80 overflow-hidden rounded-[1.8rem] shadow-xl bg-slate-900">
              <Image
                src="/images/Screenshot_20250928-174233.Photos.png"
                alt="EMMO Travel Robot"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full flex items-center justify-between text-xs text-slate-600">
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  EMMO v2.1
                </p>
                <p>Battery 96% • Online</p>
              </div>

              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary border border-primary/20">
                Voice Enabled
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
