const stats = [
  { label: "Happy Travelers", value: "50,000+" },
  { label: "Locations Deployed", value: "150+" },
  { label: "Languages", value: "100+" },
  { label: "User Satisfaction", value: "98%" }
];

export default function Stats() {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-soft"
        >
          <dt className="text-[11px] font-medium text-slate-500">
            {item.label}
          </dt>
          <dd className="text-base sm:text-lg font-semibold text-primary">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
