import Stats from "./Stats";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section pt-10 pb-16 lg:pt-14 lg:pb-24 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 items-center">
      <div className="space-y-8">
        <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
          New • AI-powered travel concierge robot
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Meet <span className="text-emerald-600">EMMO</span>, your
            AI Travel Robot.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            EMMO is a friendly autonomous robot that guides travellers in real
            time, answers questions in multiple languages, and helps operators
            deliver delightful experiences across airports, malls, stations and
            smart venues.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-white shadow-xl hover:bg-emerald-600 transition-colors"
          >
            Talk to Sales
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 transition-colors"
          >
            See how it works
          </a>
        </div>

        <Stats />
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-b from-emerald-100/70 to-sky-50 blur-2xl" />

          <div className="relative card rounded-[2.2rem] p-6 flex flex-col items-center gap-6">
            <div className="relative w-52 h-72 sm:w-64 sm:h-80 overflow-hidden rounded-[1.8rem] shadow-xl">
              <Image
                src="/images/Screenshot_20250928-174233.Photos.png"
                alt="EMMO Robot"
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

              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
                Live demo ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
