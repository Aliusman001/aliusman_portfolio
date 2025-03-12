import Marquee from "react-fast-marquee";
import Content from "./Content";

function DesignMarquee() {
  return (
    <div className="bg-dark-primary h-[9.1875rem] mb-20 flex  items-center overflow-hidden">
      <div className="h-[3.9375rem] bg-white w-full 2xl:-rotate-[1.4deg] -rotate-[2.5deg] ">
        <Marquee autoFill speed={300}>
          <Content title="App Design" />
          <Content title="Dashboard" />
          <Content title="Wirefreme" />
          <Content title="User Research" />
          <Content title="UI/UX Design" />
        </Marquee>
      </div>
    </div>
  );
}

export default DesignMarquee;
