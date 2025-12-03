export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="section py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-slate-900 font-bold text-sm">
              E
            </span>
            <span className="font-semibold">EMMO AI</span>
          </div>
          <p className="text-[12px] text-slate-400">
            AI-Powered Smart Assistant Robot for Public Transport
          </p>
        </div>

        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} EMMO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
