const Sponsors = () => {
    const sponsors = [
      {
        // name: "Mercedes",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
      },
      {
        // name: "Porsche",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Porsche_logo.svg/800px-Porsche_logo.svg.png",
      },
      {
        // name: "Audi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Audi_Logo.svg",
      },
      {
        // name: "Tesla",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      },
    ];
  
    return (
      <section className="py-12" style={{ backgroundColor: "#093381" }}>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-screen-lg mx-auto">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col items-center w-20 h-16 sm:w-28 sm:h-20"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                className="h-8 w-auto sm:h-10 object-contain"
              />
              <p
                className="text-white text-xs sm:text-sm mt-1 text-center"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Sponsors;
  