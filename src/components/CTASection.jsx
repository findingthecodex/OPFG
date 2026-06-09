export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIQZLbfUFRkBGEsMXpedX7-Evkr0fm7tkPqDqmsesG1PHUdGOeDGF2SJZSYxx0RuucGVBtvCJFKsscvupVZHlxU2aXk9cdjqGS8qb-QFn8Otj4PtEmWMC5d9GWLD0UyUOnOj8pmK3SSH_W4U0RLQ0YakNuMY5jrg_5f5fTh-ZhlVBg_0u-V0FD_m7nK58Vvz1DFTRG3zJ57-tdSdbcIBZ-pi9lo5CkadnES0aefUbrT4vryBfB46tME74KF9O8gHV7KtgzrzW6OPaL"
          alt="Background"
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="font-display-lg text-4xl md:text-6xl uppercase leading-tight mb-8 font-bold">
          ÄR DU REDO ATT HITTA DIN <br />
          <span className="text-primary-container">KRIGARSKJÄL?</span>
        </h2>
        <p className="font-body-lg mb-10 text-base md:text-lg">
          Ta första steget mot en starkare version av dig själv. Vi erbjuder
          provträning för alla nya medlemmar.
        </p>
        <div className="inline-block p-1 border-2 border-primary-container">
          <button className="bg-primary-container text-white px-12 md:px-16 py-4 md:py-6 font-bold text-lg md:text-xl tracking-widest hover:bg-white hover:text-primary-container transition-all duration-500 uppercase">
            BOKA PROVTRÄNING NU
          </button>
        </div>
      </div>
    </section>
  );
}

