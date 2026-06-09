export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline-variant glass-nav">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <span className="font-display-lg text-headline-md text-primary-container tracking-tighter uppercase">
          WARRIOR SPIRIT
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
            CLASSES
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-label-md"
            href="#"
          >
            TRAINERS
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-label-md"
            href="#"
          >
            SCHEDULE
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-label-md"
            href="#"
          >
            MEMBERSHIP
          </a>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 font-display-lg text-label-md hover:brightness-110 active:scale-95 transition-all duration-300">
          JOIN ACADEMY
        </button>
      </div>
    </nav>
  );
}

