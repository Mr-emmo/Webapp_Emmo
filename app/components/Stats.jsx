const stats = [
  { label: "Travellers served", value: "50,000+" },
  { label: "Venues deployed", value: "150+" },
  { label: "Supported languages", value: "10+" },
  { label: "Customer satisfaction", value: "98%" }
];

export default function Stats() {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-soft/40"
        >
          <dt className="text-[11px] font-medium text-slate-500">
            {item.label}
          </dt>
          <dd className="text-base sm:text-lg font-semibold text-slate-900">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
