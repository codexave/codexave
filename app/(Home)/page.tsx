
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import { ServiceSection } from "./ServiceSection";
import { Testimonial } from "./Testimonial";
import Faq from "./Faq";

export default function Home() {
  return (
    <div>
      <Banner/>
      <ServiceSection/>
      <Testimonial/>
      <AboutUs/>
      <Faq/>
    </div>
  );
}
