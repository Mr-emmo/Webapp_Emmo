import Stats from "./Stats";

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
            EMMO is a friendly autonomous robot that guides travellers in
            real time, answers questions in multiple languages, and helps
            operators deliver delightful experiences across airports, malls,
            stations and smart venues.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-white shadow-soft hover:bg-emerald-600 transition-colors"
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
            <div className="rounded-[1.8rem] bg-slate-900 w-40 h-48 sm:w-52 sm:h-60 flex items-center justify-center overflow-hidden">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-14 rounded-[1.2rem] bg-slate-800 flex items-center justify-center border border-slate-700">
                  <div className="w-14 h-9 rounded-[1rem] border border-slate-600 flex items-center justify-center bg-slate-900">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                      <span className="w-2 h-2 rounded-full bg-cyan-400/60" />
                    </div>
                  </div>
                </div>
                <div className="w-16 h-[3.6rem] rounded-[1.6rem] bg-slate-800 border border-slate-700" />
                <div className="w-24 h-3 rounded-full bg-slate-800 border border-slate-700" />
              </div>
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
