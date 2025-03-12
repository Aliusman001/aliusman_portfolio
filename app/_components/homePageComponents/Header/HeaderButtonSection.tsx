import { Dispatch, SetStateAction } from "react";

interface HeaderButtonSectionProps {
  protfolio: boolean;
  setProtfolio: Dispatch<SetStateAction<boolean>>;
}
function HeaderButtonSection({
  protfolio,
  setProtfolio,
}: HeaderButtonSectionProps) {
  return (
    <div className="absolute max-w-[362px] min-h-[86px] border-[2px] border-white/20 rounded-full backdrop-blur-lg w-full translate-x-1/2 flex p-2 items-center gap-5  bottom-12 right-1/2 text-small leading-small z-[999]  justify-between">
      <span
        onClick={() => {
          setProtfolio(true);
        }}
        className={`font-thin rounded-full py-3 px-8 text-white  cursor-pointer flex justify-center items-center animation ${
          protfolio ? "bg-primary !font-medium border  border-[#D0D5DD]/80" : ""
        }`}
      >
        Protfolio
      </span>
      <span
        onClick={() => {
          setProtfolio(false);
        }}
        className={`font-thin cursor-pointer animation py-3 px-8 text-white  ${
          !protfolio
            ? "bg-primary !font-medium   border rounded-full border-[#D0D5DD]/80"
            : ""
        }`}
      >
        Hire Me
      </span>
    </div>
  );
}

export default HeaderButtonSection;
