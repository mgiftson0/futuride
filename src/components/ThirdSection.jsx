import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import bgImage from '../assets/ThirdSection-bg.jpg';

const ThirdSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.third-section-title', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
      opacity: 0,
    });

    ScrollReveal().reveal('.third-section-paragraph', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 600,
      opacity: 0,
    });
  }, []);

  return (
    <section
      className="h-[600px] sm:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-3xl mt-[-250px] sm:mt-[-300px]">
        <h2
          className="text-5xl sm:text-4xl mb-5 third-section-title"
          style={{
            fontFamily: 'Georgia, serif',
            color: 'rgba(0, 0, 0, 0.85)',
          }}
        >
          The Pinnacle Of Automotive Design
        </h2>
        <p
          className="text-sm sm:text-base mb-6 third-section-paragraph"
          style={{
            fontFamily: 'Trebuchet MS, sans-serif',
            color: 'rgba(0, 0, 0, 0.7)',
          }}
        >
          Immerse yourself in the elegance and sophistication of our latest car range, 
          where design meets functionality 
          in a seamless blend. These cars are not just a means of transportation but a 
          statement of style, luxury, and 
          cutting-edge technology.
        </p>
      </div>
    </section>
  );
};

export default ThirdSection;
