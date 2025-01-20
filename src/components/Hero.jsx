import Header from './Header'; 
import heroImage from '../assets/HeroImg.jpg';

const Hero = () => {
  return (
    <section
      className="h-[900px] bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Header Component */}
      <Header />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center text-white mt-[-450px]">
        <h1 
          className="text-6xl font-normal leading-none"
          style={{ fontFamily: 'Georgia, serif', textAlign: 'center' }}
        >
          Unveiling the Future: <br/>BMW's Vision
        </h1>
        <p className="text-lg text-gray-300 mt-3">
            Discover the epitome of luxury and innovation with our latest BMW models, designed to redefine <br/> the standards of automotive excellence and push the boundaries of engineering and design.
            </p>
        <button className="px-6 py-3 mt-3 bg-[#000061] rounded-md text-white hover:bg-blue-700">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
