import "./App.css";
import ContactSection from "./sections/Contact";
import FAQ from "./sections/Faq";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HeroArea from "./sections/HeroArea";
import MoreDetails from "./sections/MoreDetails";
import Portfolio from "./sections/Portfolio";
import Review from "./sections/Review";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Work from "./sections/Work";

function App() {
  return (
    <>
      <Header />
      <HeroArea />
      <Services />
      <MoreDetails />
      <Portfolio />
      <Work />
      <Review />
      <Team />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
