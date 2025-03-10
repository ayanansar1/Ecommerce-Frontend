import HeroSection from "./components/HeroSec";
import { useProductContext } from "./context/Productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Ayan Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;