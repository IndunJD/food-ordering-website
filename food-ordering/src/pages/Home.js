import {
    Navbar,
    Hero,
    Stats,
    Serve,
    Popular,
    Chefs,
    Testimonials,
    Mobile,
    Newsletter,
    Footer,
  } from "../components";
  
  const Home = () => {
    return (
      <div className="bg-blackish w-full overflow-hidden">
        <div className="px-6 sm:px-16 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
  
        <div className="App">
          <div className="bg-blackish flex justify-center items-start px-6 s,:px-16">
            <div className="xl:max-w-[1280px] w-full">
              <Hero />
              <Stats />
              <Serve />
              <Popular />
              <Chefs />
              <Testimonials />
              <Mobile />
              <Newsletter />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  