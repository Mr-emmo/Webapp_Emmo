export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="section flex flex-col sm:flex-row items-center justify-between gap-3 py-4 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} EMMO Robotics. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-700">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-700">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
