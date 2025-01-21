import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';


const Home = () => {
  return (
    <div>
      <Hero />
      <Sponsors  />
      <ThirdSection />
    <hr />
      <FourthSection />
      <FifthSection />

    </div>
  );
};

export default Home;
