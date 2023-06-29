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
} from "./components";

const App = () => (
  <div className="bg-blackish w-full overflow-hidden">
    <div className="px-6 sm:px-16 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-blackish flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-blackish flex justify-center items-start px-6 s,:px-16">
      <div className="xl:max-w-[1280px] w-full">
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
);

export default App;
