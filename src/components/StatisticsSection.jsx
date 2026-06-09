export function StatisticsSection() {
  const stats = [
    { value: "500+", label: "MATCHER VUNNA" },
    { value: "12", label: "PROFFSCOACHER" },
    { value: "25", label: "DISCIPLINER" },
    { value: "4.9", label: "SNITTBETYG" },
  ];

  return (
    <section className="bg-surface-container-lowest py-16 border-y border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="font-display-lg text-5xl text-primary-container">
              {stat.value}
            </div>
            <div className="font-label-md text-on-surface-variant uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

