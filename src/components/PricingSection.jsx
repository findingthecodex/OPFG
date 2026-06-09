export function PricingSection() {
  const plans = [
    {
      type: "STANDARD",
      title: "BAS",
      price: "599",
      features: [
        "Tillgång till alla gruppass",
        "Öppet gym 06:00 - 22:00",
        "Omklädningsrum & Bastu",
      ],
      popular: false,
      highlight: false,
    },
    {
      type: "ADVANCED",
      title: "MMA ELITE",
      price: "899",
      features: [
        "Allt i Bas-paketet",
        "Avancerad sparring & teknik",
        "Träningsplanering (Kvittal)",
        "10% rabatt i Academy Store",
      ],
      popular: true,
      highlight: true,
    },
    {
      type: "VIP",
      title: "PRIVATE ACCESS",
      price: "2499",
      features: [
        "Allt i MMA Elite",
        "2 PT-pass i veckan",
        "Personlig kostrådgivning",
        "Exklusiv lounge access",
      ],
      popular: false,
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display-lg text-4xl md:text-5xl uppercase mb-4 font-bold">
          VÄLJ DIN NIVÅ
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto text-base md:text-lg">
          Vi har paket som passar alla från nybörjare till professionella
          fighters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              plan.highlight
                ? "bg-primary-container text-white p-10 scale-105 shadow-2xl relative z-10 border-none"
                : "bg-surface-container border border-outline-variant p-10 hover:border-primary-container transition-colors duration-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-white text-primary-container px-4 py-1 font-label-md uppercase">
                MEST POPULÄR
              </div>
            )}
            <span
              className={`font-label-md uppercase tracking-widest ${
                plan.highlight ? "text-on-primary-container" : "text-on-surface-variant"
              }`}
            >
              {plan.type}
            </span>
            <h3 className="font-display-lg text-headline-md mt-2 uppercase">
              {plan.title}
            </h3>
            <div className="my-8 flex items-baseline">
              <span className="font-display-lg text-5xl">{plan.price}</span>
              <span
                className={`ml-2 font-label-md ${
                  plan.highlight ? "text-on-primary-container" : "text-on-surface-variant"
                }`}
              >
                SEK / MÅN
              </span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-4 font-label-md uppercase tracking-widest transition-all duration-300 ${
                plan.highlight
                  ? "bg-white text-primary-container hover:brightness-110"
                  : "border border-white hover:bg-white hover:text-black"
              }`}
            >
              VÄLJ PAKET
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

