import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import LastSection from '../components/LastSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Sponsors  />
      <ThirdSection />
    <hr />
      <FourthSection />
      <FifthSection />
      <LastSection />
      <br/>
      <Footer />
    </div>
  );
};

export default Home;
