import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "1",
    title: "Voice Activation",
    body: "Simply speak to EMMO in your preferred language to start the conversation."
  },
  {
    number: "2",
    title: "AI Processing",
    body: "Advanced AI understands your query and retrieves real-time information."
  },
  {
    number: "3",
    title: "Instant Assistance",
    body: "Get immediate answers with visual and voice guidance to your destination."
  }
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-14 lg:py-20 bg-primary/5"
    >
      <div className="section space-y-10">
        <SectionTitle
          eyebrow="How EMMO Works"
          title="Simple interaction for instant assistance."
          subtitle="From voice input to real-time answers, EMMO keeps every step clear and intuitive."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="card flex flex-col gap-4">
              <div className="mx-auto flex flex-col items-center justify-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {step.number}
                </div>
              </div>
              <div className="space-y-2 text-center">
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
