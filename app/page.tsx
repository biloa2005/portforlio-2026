import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Navbar from "./components/accueil/Navbar";
import About from "./components/accueil/About";
import FeaturedProjects from "./components/accueil/FeaturedProjects";

export default function Home() {
 
  return (
   <div className="">
 <Navbar/>
 <About/>
 <FeaturedProjects/>
   </div>
  
  );
}
