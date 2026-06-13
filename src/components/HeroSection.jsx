import heroImage from "../assets/images/opfg1.png";

export function HeroSection() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero martial arts"
          className="w-full h-full object-cover"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent"></div>
      </div>
      <div className="relative z-10 px-6 md:px-16 w-full max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="font-display-lg text-5xl md:text-7xl uppercase leading-tight mb-6 animate-fade-in-up font-bold">
            MÄSTARE <br />
            <span className="text-primary-container">SKAPAS HÄR</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-lg border-l-4 border-primary-container pl-6 text-base md:text-lg">
            Warrior Spirit Academy är mer än ett gym. Vi är en smedja för
            disciplin, uthållighet och teknisk excellens inom modern kampsport.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-primary-container text-white px-10 py-4 font-bold text-lg md:text-xl tracking-wider hover:bg-white hover:text-primary-container transition-all duration-300">
              BÖRJA TRÄNA
            </button>
            <button className="border-2 border-white text-white px-10 py-4 font-bold text-lg md:text-xl tracking-wider hover:bg-white hover:text-black transition-all duration-300">
              SE SCHEMA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

