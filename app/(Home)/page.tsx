
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Service from "./Service";
import { ServiceSection } from "./ServiceSection";
import { Testimonial } from "./Testimonial";

export default function Home() {
  return (
    <div>
      <Banner/>
      <ServiceSection/>
      <Testimonial/>
      <AboutUs/>
    </div>
  );
}
