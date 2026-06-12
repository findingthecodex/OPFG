export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant glass-nav">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-7xl mx-auto w-full">
        <span className="font-display-lg text-headline-md text-primary-container tracking-tighter uppercase">
          Odenplan Fightgym
        </span>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="text-primary-container border-b-2 border-primary-container pb-1 font-label-md"
            href="#"
          >
            HOME
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-label-md"
            href="#"
          >
            KLASSER
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-label-md"
            href="#"
          >
            TRÄNARE
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-label-md"
            href="#"
          >
            SCHEMA
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-label-md"
            href="#"
          >
            MEDLEMSKAP
          </a>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 font-display-lg text-label-md hover:brightness-110 active:scale-95 transition-all duration-300">
          BLI MEDLEM
        </button>
      </div>
    </nav>
  );
}

