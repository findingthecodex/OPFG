export function StatisticsSection() {
  const stats = [
    { value: "500+", label: "MATCHER VUNNA" },
    { value: "12", label: "PROFFSCOACHER" },
    { value: "25", label: "DISCIPLINER" },
    { value: "4.9", label: "SNITTBETYG" },
  ];

  return (
    <section className="bg-surface-container-lowest py-16 border-y border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="font-display-lg text-4xl md:text-5xl text-primary-container font-bold">
              {stat.value}
            </div>
            <div className="font-label-md text-on-surface-variant uppercase text-sm mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

