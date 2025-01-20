import Header from './Header'; // Adjust the path if necessary
import heroImage from '../assets/HeroImg.jpg';

const Hero = () => {
  return (
    <section
      className="h-[100vh] bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Header Component */}
      <Header />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Ride</h1>
        <p className="text-lg mb-6">The best cars, the best deals, just for you.</p>
        <button className="px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
