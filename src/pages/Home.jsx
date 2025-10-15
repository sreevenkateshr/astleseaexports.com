import Hero from "../components/home/Hero";
import Aboutus from "../components/home/Aboutus"
import Servicesection from "../components/home/Servicesection"
import Testimonals from "../components/home/Testimonals"
// import Ourproducts from "../components/home/Ourproducts"
import FaqSection from "../components/home/FaqSection"
import Internationalexports from "../components/home/Internationalexports";

function Home() {
  return (
  <>
   <Hero />
   <Aboutus />
   <Servicesection />
  <Testimonals />
  {/* <Ourproducts /> */}
  <FaqSection />
  <Internationalexports />
  </>
  );
}

export default Home;
