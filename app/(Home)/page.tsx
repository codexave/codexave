import Image from "next/image";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Service from "./Service";
import AboutUs from "./AboutUs";
import { CanvasRevealEffectDemo } from "./TechStack";

export default function Home() {
  return (
    <div>
      <Banner/>
      <CanvasRevealEffectDemo/>
      <AboutUs/>
    </div>
  );
}
