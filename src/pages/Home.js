import Catering from "../components/Home/Catering";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero/Hero";
import Reservation from "../components/Home/Reservation";
import Story from "../components/Home/Story";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Catering />
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
