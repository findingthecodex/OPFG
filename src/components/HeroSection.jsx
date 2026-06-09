export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero martial arts"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida/AP1WRLsnrOz0DxrQH_aoPb57I1xwkwfQO2aRUWwH0Hh_CUHaJw6YMOaRuHt-B8iMJPGiTa7ppC0hQuXvHT-qGy7My6ZUFKBpaneJyYuMpWTYATrEuWAMP11ycQoYqsEJbwjZ7cjrXvmDhfc9e7lXRNcqHW9hRk4NTwzaH-VyZgo0Px5rvJdythye55a1wkjHFmIhulCqI7keaakafF8PRf3DMgHQwy-0U3Mtfb8Mk9O1zWnQAL5szvg5IxT4gFi5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>
      <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="font-display-lg text-6xl md:text-display-lg uppercase leading-none mb-6 animate-fade-in-up">
            MÄSTARE <br />
            <span className="text-primary-container">SKAPAS HÄR</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-lg border-l-4 border-primary-container pl-6">
            Warrior Spirit Academy är mer än ett gym. Vi är en smedja för
            disciplin, uthållighet och teknisk excellens inom modern kampsport.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-primary-container text-white px-10 py-4 font-display-lg text-headline-md tracking-wider hover:bg-white hover:text-primary-container transition-all duration-300">
              BÖRJA TRÄNA
            </button>
            <button className="border border-white text-white px-10 py-4 font-display-lg text-headline-md tracking-wider hover:bg-white hover:text-black transition-all duration-300">
              SE SCHEMA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

