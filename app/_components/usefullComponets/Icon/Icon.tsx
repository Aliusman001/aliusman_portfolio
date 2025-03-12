function Icon({
  titleClassName,
  className,
}: {
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={`flex justify-center items-center cursor-pointer gap-3 group ${
        className ? className : ""
      }`}
    >
      <span className="bg-primary mt-1 w-[2.875rem] h-[2.875rem] rounded-full text-white flex justify-center items-center ">
        <span className="font-bold text-small">AU</span>
      </span>
      <div className="group-hover:mb-4">
        <span className="uppercase group-hover:translate-y-0 translate-y-5 766-780:translate-y-2  block lg:text-sm text-gray-400 h-0 text-xs  animation font-normal">
          Made By
        </span>
        <span
          className={`uppercase animation bg-black block z-50 translate-y-0  group-hover:translate-y-5 relative lg:text-3xl 766-780:text-base text-[22px] text-white font-bold ${
            titleClassName ? titleClassName : ""
          }`}
        >
          Ali Usman
        </span>
      </div>
    </div>
  );
}

export default Icon;
