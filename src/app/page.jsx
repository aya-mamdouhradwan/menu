import Navbar from "./component/navbar";
import Body from "./component/body";
import Hero from"./component/hero";
import Find from"./component/find";
import Opinion from "./component/opinion";
import Subscribe from "./component/subscribe";
import Foot from "./component/foot";

export default function Home() {
  return (
    <div className="page">
       <Navbar />
      <div id="home">
      <Hero/>
      </div>
      <div id="minu">
      <Body/>
      </div>
      <div id="find">
      <Find/>
      </div>
      <div id="feedback">
        <Opinion/>
      </div>
      <div id="subscribe">
        <Subscribe/>
      </div>
      <Foot/>
    </div>
  );
}
