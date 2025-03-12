import SwiperSvg from "../../svg/SwiperSvg";

function SwiperBtns() {
  return (
    <>
      <div className="custom-prev  bg-white z-50 -translate-y-1/2 absolute animation !top-[43%] rounded-full sm:w-[64px] w-[54px]  aspect-square border border-white left-0 -translate-x-1/2">
        <div className="relative top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 flex justify-center items-center rounded-full bg-primary sm:w-[50px] w-[40px]  aspect-square">
          <SwiperSvg />
        </div>
      </div>

      {/* Right Navigation Button */}
      <div className="custom-next bg-white  z-50 -translate-y-1/2 absolute animation !top-[43%] rounded-full  sm:w-[64px] w-[54px]  aspect-square border border-white right-0 translate-x-1/2">
        <div className="relative top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 flex justify-center items-center rounded-full bg-secondary sm:w-[50px] w-[40px]  aspect-square">
          <SwiperSvg className="!rotate-0" />
        </div>
      </div>
    </>
  );
}

export default SwiperBtns;
