export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="max-w-xs">
          <span className="font-display-lg text-headline-md text-on-surface tracking-tighter uppercase">
            WARRIOR SPIRIT
          </span>
          <p className="mt-4 font-body-md text-on-surface-variant">
            Vi bygger karaktär, disciplin och teknisk kunskap i hjärtat av
            staden. Alltid redo, aldrig besegrad.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-primary-container uppercase">
              NAVIGERING
            </span>
            <a
              className="text-on-surface-variant hover:text-primary-container transition-colors"
              href="#"
            >
              Hem
            </a>
            <a
              className="text-on-surface-variant hover:text-primary-container transition-colors"
              href="#"
            >
              Om oss
            </a>
            <a
              className="text-on-surface-variant hover:text-primary-container transition-colors"
              href="#"
            >
              Pass-schema
            </a>
            <a
              className="text-on-surface-variant hover:text-primary-container transition-colors"
              href="#"
            >
              Priser
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-primary-container uppercase">
              JURIDIK
            </span>
            <a
              className="text-on-surface-variant hover:text-primary-container transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant hover:text-primary-container transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-surface-variant hover:text-primary-container transition-colors"
              href="#"
            >
              Medlemsregler
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-primary-container uppercase">
              KONTAKT
            </span>
            <p className="text-on-surface-variant">Storgatan 12, Stockholm</p>
            <p className="text-on-surface-variant">info@warriorspirit.se</p>
            <p className="text-on-surface-variant">08-123 45 67</p>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop pb-10 flex justify-between items-center border-t border-outline-variant/30 pt-10">
        <span className="font-label-md text-on-surface-variant text-xs opacity-60">
          © 2024 WARRIOR SPIRIT ACADEMY. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-4">
          <a
            className="text-on-surface-variant hover:text-primary-container transition-transform hover:-translate-y-1"
            href="#"
          >
            <span className="material-symbols-outlined">social_leaderboard</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary-container transition-transform hover:-translate-y-1"
            href="#"
          >
            <span className="material-symbols-outlined">public</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary-container transition-transform hover:-translate-y-1"
            href="#"
          >
            <span className="material-symbols-outlined">camera</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

