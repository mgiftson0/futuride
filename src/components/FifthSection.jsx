import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import img1 from '../assets/Img1.jpg';
import img2 from '../assets/Img2.jpg';
import img3 from '../assets/Img3.jpg';
import img4 from '../assets/Img4.jpg';

const FifthSection = () => {
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const headerConfig = {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      opacity: 0,
    };

    const imagesConfig = {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      opacity: 0,
      interval: 200, 
    };

    ScrollReveal().reveal('.fifth-section-header', headerConfig);
    ScrollReveal().reveal('.fifth-section-image', imagesConfig);
  }, []);

  return (
    <section className="h-[370px] bg-white flex items-center justify-center px-6 py-8">
      <div
        className="container mx-auto bg-[#093381] rounded-md p-4 md:p-8 flex flex-col items-center"
        style={{ margin: '10px' }}
      >
        <h2
          className="text-3xl font-bold mb-6 fifth-section-header text-white text-center"
          style={{ fontFamily: 'Times, Times New Roman, serif' }}
        >
          Next-Generation Vehicles
        </h2>
        <div className="flex gap-6 justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="h-[200px] w-[250px] object-cover rounded-md bg-white fifth-section-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
