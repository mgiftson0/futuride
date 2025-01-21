import bgImage from '../assets/FourthSection-bg.jpg';

const FourthSection = () => {
  return (
    <section
      className="h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center text-white px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 ml-20 sm:ml-40">
          {/* First Header and Paragraph */}
          <div className="mb-60 pl-8 sm:pl-12">
            <h2
              className="text-3xl sm:text-2xl font-bold mb-4"
              style={{ fontFamily: 'Trebuchet MS, sans-serif' }}
            >
              A Legacy of Innovation
            </h2>
            <p
              className="text-sm sm:text-base max-w-lg text-gray-300"
              style={{
                fontFamily: 'Trebuchet MS, sans-serif',
                lineHeight: '1.8',
              }}
            >
              With decades of experience in crafting automobiles that blend 
              performance with luxury.
            </p>
          </div>

          {/* Second Header and Paragraph */}
          <div className="pl-8 sm:pl-12">
            <h2
              className="text-3xl sm:text-2xl font-bold mb-4"
              style={{ fontFamily: 'Trebuchet MS, sans-serif' }}
            >
              Driving the Future
            </h2>
            <p
              className="text-xs sm:text-sm max-w-lg text-gray-300"
              style={{
                fontFamily: 'Trebuchet MS, sans-serif',
                lineHeight: '1.8',
              }}
            >
              We believe in a future where every journey is an experience of luxury, 
              efficiency, and sustainability. Our cars are designed with this vision in mind.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6">
          <div className="mb-16">
            <h2 
              className="text-4xl sm:text-3xl font-bold mb-6 text-black"
              style={{ fontFamily: 'Gill Sans, sans-serif' }}
            >
              The Pinnacle of <br /> Automotive Design
            </h2>
            <p
              className="text-lg sm:text-base max-w-lg text-black"
              style={{
                fontFamily: 'Trebuchet MS, sans-serif',
                lineHeight: '1.8',
              }}
            >
              Our collection represents the ultimate in automotive craftsmanship, where every detail is 
              carefully considered to provide drivers with an experience that transcends the ordinary.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-md">
            <input
              type="text"
              placeholder="Environmental Stewardship"
              className="w-full p-4 rounded-md text-black"
            />
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-md font-bold"
              style={{ fontFamily: 'Trebuchet MS, sans-serif' }}
            >
              book a test
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
