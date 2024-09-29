
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import { ServiceSection } from "./ServiceSection";
import { Testimonial } from "./Testimonial";
import Faq from "./Faq";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <Banner/>
      <ServiceSection/>
      <Testimonial/>
      <AboutUs/>
      <Projects/>
      <Faq/>
    </div>
  );
}
