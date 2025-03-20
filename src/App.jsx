import './App.css'
import Header from "./sections/Header";
import HeroArea from "./sections/HeroArea";
import MoreDetails from "./sections/MoreDetails";
import Portfolio from './sections/Portfolio';
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Header />
      <HeroArea />
      <Services />
      <MoreDetails />
      <Portfolio />
    </>
  );
}

export default App
