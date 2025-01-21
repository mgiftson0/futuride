import bgImage from '../assets/LastSection-bg.jpg';

const LastSection = () => {
  return (
    <section
      className="h-[900px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black px-6 py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="rounded-md p-6 md:p-10 text-center relative"
        style={{ transform: 'translateY(-270px)' }} 
      >
        <h2
          className="text-4xl font-bold mb-6"
          style={{ fontFamily: 'Georgia, serif', color: 'black' }} 
        >
          Introducing the Future of <br/> Mobility with BMW
        </h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-md text-lg" 
          style={{ fontFamily: 'Gill Sans, sans-serif' }}
        >
          Book a Test 
        </button>
      </div>
    </section>
  );
};

export default LastSection;
