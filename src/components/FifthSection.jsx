import img1 from '../assets/Img1.jpg';
import img2 from '../assets/Img2.jpg';
import img3 from '../assets/Img3.jpg';
import img4 from '../assets/Img4.jpg';

const FifthSection = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="h-[370px] bg-[#093381] flex flex-col items-center justify-center text-white px-6 py-8">
      <h2
        className="text-3xl font-bold mb-6"
        style={{ fontFamily: 'Times, Times New Roman, serif' }}
      >
        Next-Generation Vehicle
      </h2>
      <div className="flex gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="h-[200px] w-[250px] object-cover rounded-md bg-white"
          />
        ))}
      </div>
    </section>
  );
};

export default FifthSection;
