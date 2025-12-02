import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "01",
    title: "Voice Interaction",
    body: "Travellers talk naturally to EMMO using their preferred language. Wake‑word and touch options are supported."
  },
  {
    number: "02",
    title: "AI Reasoning",
    body: "Speech is transcribed, translated if needed and processed by AI models that understand intent and venue context."
  },
  {
    number: "03",
    title: "Instant Assistance",
    body: "EMMO responds with voice, on‑screen cards or navigation instructions, and can escalate to human staff when required."
  }
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-14 lg:py-20 bg-gradient-to-b from-emerald-50/50 to-slate-50"
    >
      <div className="section space-y-10">
        <SectionTitle
          eyebrow="How EMMO Works"
          title="From question to action in three simple steps."
          subtitle="A tightly integrated pipeline from microphones and sensors to AI services and venue systems."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="card flex flex-col gap-4">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                {step.number}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
