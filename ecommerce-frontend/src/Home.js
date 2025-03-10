import React from "react";

import HeroSec from "./components/HeroSec";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  
  
  const data={
    name: "Ecommerce store"
  };
    
    return (<><HeroSec myData={data} />
    <FeatureProduct/>
    <Services /><Trusted /></>)
    
 
  
  };

  


export default Home;