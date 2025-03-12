import {
  DesignMarquee,
  Discuss,
  Experince,
  Header,
  HireMe,
  Portfolio,
  Services,
  Tabs,
  Testimonials,
} from "./_components";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Experince />
      <HireMe />
      <Portfolio />
      <Tabs />
      <Testimonials />
      <DesignMarquee />
      <Discuss />
      {/* <Blog /> */}
    </>
  );
}
