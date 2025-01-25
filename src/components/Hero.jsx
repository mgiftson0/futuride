import { useEffect } from 'react';
import Header from './Header';
import heroImage from '../assets/HeroImg.jpg';
import ScrollReveal from 'scrollreveal';

const Hero = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal-header', {
      duration: 1000,
      delay: 200,
      origin: 'top',
      distance: '50px',
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.reveal-paragraph', {
      duration: 1000,
      delay: 400,
      origin: 'bottom',
      distance: '50px',
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.reveal-button', {
      duration: 1000,
      delay: 600,
      origin: 'bottom',
      distance: '50px',
      easing: 'ease-out',
    });
  }, []);

  return (
    <section
      className="h-[900px] sm:h-[900px] bg-cover bg-center bg-no-repeat flex flex-col justify-between w-full"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Header Component */}
      <Header />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center text-white mt-[-450px] sm:mt-[-450px] px-4">
        <h1
          className="text-4xl sm:text-6xl font-normal leading-none reveal-header"
          style={{ fontFamily: 'Georgia, serif', textAlign: 'center' }}
        >
          Unveiling the Future: <br />BMW's Vision
        </h1>
        <p className="text-sm sm:text-lg text-gray-300 mt-3 px-2 sm:px-0 reveal-paragraph">
          Discover the epitome of luxury and innovation with our latest BMW models, designed to redefine
          <br className="hidden sm:block" />
          the standards of automotive excellence and push the boundaries of engineering and design.
        </p>
        <button className="px-6 py-3 mt-3 bg-[#000061] rounded-md text-white hover:bg-blue-700 text-sm sm:text-base reveal-button">
          Explore Now 
        </button>
      </div>
    </section>
  );
};

export default Hero;
