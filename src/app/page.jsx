import Navbar from "./component/navbar";
import Body from "./component/body";
import Hero from"./component/hero";
import Find from"./component/find";
import Opinion from "./component/opinion";
import Subscribe from "./component/subscribe";
import Foot from "./component/foot";
import AnimatedSection from "./component/animation";

export default function Home() {
  return (
    <div className="page">
      
       <Navbar />
       
      <div id="home">
      <AnimatedSection>
      <Hero/>
      </AnimatedSection>
      </div>
      <div id="minu">
      <Body/>
      </div>
      <div id="find">
      <AnimatedSection>
      <Find/>
      </AnimatedSection>
      </div>
      <div id="feedback">
      <AnimatedSection>
        <Opinion/>
        </AnimatedSection>
      </div>
      <div id="subscribe">
      <AnimatedSection>
        <Subscribe/>
        </AnimatedSection>
      </div>
      <AnimatedSection>
      <Foot/>
      </AnimatedSection>
    </div>
  );
}
