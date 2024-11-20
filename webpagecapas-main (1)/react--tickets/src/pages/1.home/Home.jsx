import Navbar from "../../components/header/Navbar";
import Cards from "../../components/cards/Cards";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Comsec from "../../components/comsec/Comsec";
import Quote from "../../components/quote/Quote";
import Partners from "../../components/partners/Partners";
import Separation from "../../components/carousel/Separation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Separation />
      <Cards />
      <Quote />
      <Partners />
      <Comsec />
      <Footer />
    </div>
  );
};

export default Home;
