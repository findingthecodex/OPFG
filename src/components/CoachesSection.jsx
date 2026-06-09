export function CoachesSection() {
  const coaches = [
    {
      name: 'ERIK "THE VIKING" SVENSSON',
      title: "Huvudcoach MMA & Grappling",
      bio: "15 års erfarenhet i UFC och proffsligor världen över.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDaS4lmEkdHmD8uAKsxqx4JMe8eqsrWpYjI1IkiiaPOP8BGlwH9ivatl4x2WaqiFYRRjzzicGa9snTaZVBp9xlGCOehCCX7xYFIGkaagzdEwXvE4yogR2E72o1jRkq9Sp9dN9mq4IAgqJSz7X_XEXCQP9AaxOVI7ZymnTup4dlPOLi2-M_kfvhpMYIKJcgAY3_aHe9mfldDHXQIdOtR7c7gBQnVqq2EspqTGOEVPy8gF5Lz8ZVp5BXGMJyZ8wKY8warsRfblpXlupcz",
    },
    {
      name: 'SARAH "STORM" LINDBERG',
      title: "Instruktör Muay Thai",
      bio: "Flerfaldig SM-mästare med fokus på teknisk precision och intensitet.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLj3Mo95osMHm1HKv0-wFAEXmllTk9zlfIYXUR3fYp0U6BJNkAc0ff_cBsM634erEyAoHMRdAI3E3nhTI6srCizm2j7IBoxzxZHkdM51EooIj9omYN3mASco477et5NtQYGqFymgymlHNsxOV7sPfUHDy9lb2z8w9TarJv-q6rZkBBBfKLUtm5_KaQ1F5po5yNIo_1gkF6TPAar42ycsHGA9ryt-NPQq6PPt9oM4f4TExyPnvOUn_GHW2VfuZ15REHvIT9ypoUM7XC",
    },
    {
      name: "MARCUS RUIZ",
      title: "Instruktör Klassisk Boxning",
      bio: "Specialist på fotarbete och defensiva strategier för elitboxare.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVmIBxbDh-0w_V5WDtPXNmJQrGH6abT71ExFS8dz_Jo2Swqlx27cdCu_-LN3JdQU4qDRQB38vf1khDvxLVqehwe-Egi8BWehq9RaFuoImYBbl86ldh0jCvOa-sbFTXc0Uf-Efi7dyLwdGDbAB52X6yp7UYLdsJ2z_aDAPDXwb3xubv3gy3VQbptBPLHvfPY3tqzSco5WfevD749i_cKhDzqgW23uqsq20_bEeO8b_H7kGOT_8mkeYrRqCGTzYrkadCW_WOy3ci0LjZ",
    },
  ];

  return (
    <section className="bg-surface-container-low py-20">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-4xl md:text-5xl uppercase mb-4 font-bold">
            MÖT DINA COACHER
          </h2>
          <div className="w-24 h-1 bg-primary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coaches.map((coach, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-surface">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={coach.image}
                  alt={coach.name}
                />
              </div>
              <h4 className="font-display-lg text-headline-md uppercase text-primary-container">
                {coach.name}
              </h4>
              <p className="font-label-md text-on-surface-variant uppercase mt-1">
                {coach.title}
              </p>
              <p className="mt-4 font-body-md text-on-surface-variant">
                {coach.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

