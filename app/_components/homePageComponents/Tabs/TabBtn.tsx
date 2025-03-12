import { forwardRef, Dispatch, SetStateAction } from "react";

interface TabBtnProps {
  title: string | undefined;
  tab?: string;
  setTab?: Dispatch<SetStateAction<string>>;
  className?: string;
}

const TabBtn = forwardRef<HTMLDivElement, TabBtnProps>(
  ({ title, tab, setTab, className }, ref) => {
    return (
      <div
        ref={ref}
        onClick={() => title && setTab?.(title)}
        className={`group relative cursor-pointer bg-lighterBlue rounded-[3.5rem] md:py-3 md:px-8 px-3 py-2 overflow-hidden ${
          className ? className : ""
        }`}
      >
        <span
          className={`group-hover:text-white animation duration-200  relative z-10 overflow-hidden text-secondary text-xsmall leading-xsmall text-nowrap font-normal ${
            tab === title ? "!text-white" : ""
          }`}
        >
          {title}
        </span>
        <div
          className={`bg-primary border group-hover:border-none border-t-white translate-y-full animation duration-200 group-hover:translate-y-0 h-full left-0 right-0 absolute rounded-3xl bottom-0 ${
            tab === title ? "!translate-y-0" : ""
          }`}
        ></div>
      </div>
    );
  }
);

TabBtn.displayName = "TabBtn";

export default TabBtn;
