export function DisciplinesSection() {
  const disciplines = [
    {
      title: "MUAY THAI",
      image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCfUh4RAQc1TYIMkgEsbp_92aGL9rLQO6HOOFs7jtzU0bZd5jOv4AumO6EpXQnMWGpnN_eSkVGKJ6fTahb8UhN97ZS6VnVoOS_41NIOlkBcJ6hjhQxuIXxUOExh4kqolUOKj0Hw6q4JhhmfVsnqT4EpODK3C-JjdsR-noFAj78V8HSJfeWej13bhcbC56QonoP7-xO9T9tEIjNe6GJnvxjAvWcvOx1zuKCjuooFFHuFJPzr2fdRexvbL4U-Psm1K7vVbNLDRS1TqGGj",
      description:
          "The Art of Eight Limbs. Traditionell thailändsk boxning med fokus på knän, armbågar och explosivitet.",
      span: "md:col-span-8",
    },
    {
      title: "MORGONFYS",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgjkBB5Z33gQDDvQ4OrL89gFN5IvB1qvJYi50oIsvqCuHHqeM9s0_1hDVBWWz8XVh0czzMRaVCFKm6p3StpU5Ui-i9iH6f7IROXEaghCHwuToPcUtWRNAEhTpWlfXiDJrHp0OCWfVmsp5a9cetT-bWMDh-qqt8ls0Wqk2FOeqoliikyleCzDeShYp4Jla7v41zeWOP3a48TSvZOA3T7_M-tD3RDeS2haTs2OZjwBqM5TZdgR2ks_FS76uBlOZQBBjl1e2aFalcY6Yo",
      description: "",
      span: "md:col-span-4",
    },
    {
      title: "LUNCH THAI2",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDht6Nt5dabBGwfr_3EIVBp0IEtc7iGI_3AAAT0kNpW-4f4pR-HHjqYl2WDvqB_P5ZAnXPEgj5E-dHm17w28pLREBNS6TJhcUNY59JaVIBBk0YTgfD5KrK9zAYNOEtzA2i2GSFNjnnRIsH_Nbyjz-WCwb2A--KmT6giACHw2JHm3HxUBewkNx3CT-RhlwQluUpPcn9x43NBIujpVeZoFu3oMWKkFwMCdM2YRv-8teck-wKxDfeuDwCfdDNe5eXyU5YujtbyGMxBocur",
      description: "",
      span: "md:col-span-4",
    },
    {
      title: "JUNIOR",
      image: 
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBeu_jAwAxfV3jTu-R7G7jT_jD_9uRrYA-Iv3ThR6E7YFUkuV6pf2uEbuiA3LJDw8IltdN7O27MHiAIeRrfYy-q1a_kswqjICbfwlkMeGL1rEz8beAwjytisJkNC0qJYaHOiHDFE7MDb_fF_DPvBgr27mceOVCWldyGO5Tnqf-CKpMSlQ__RN_js90AwZ0Dw1CMGHyjZjB0D7bm-ZMLfI2MQkkI9JDDWe2-imnUjRN6rCzgV5plxGUTp1jKAIcN5uZY4TLc8vq4DS4J",
      description:
        "The Art of Eight Limbs. Traditionell thailändsk boxning med fokus på knän, armbågar och explosivitet.",
      span: "md:col-span-8",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-label-md text-primary-container uppercase tracking-widest text-sm">
          Våra Program
        </span>
        <h2 className="font-display-lg text-4xl md:text-5xl uppercase mt-4 font-bold">
          DÄR TEKNIK MÖTER KRAFT
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
        {disciplines.map((discipline, idx) => (
          <div
            key={idx}
            className={`${discipline.span} group relative overflow-hidden bg-surface-container border border-outline-variant rounded-sm hover:border-primary-container transition-colors`}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover noir-filter opacity-60 group-hover:scale-105 transition-transform duration-700"
              src={discipline.image}
              alt={discipline.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-10">
              <h3 className="font-display-lg text-4xl uppercase">
                {discipline.title}
              </h3>
              {discipline.description && (
                <p className="max-w-md text-on-surface-variant font-body-md mt-2">
                  {discipline.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

