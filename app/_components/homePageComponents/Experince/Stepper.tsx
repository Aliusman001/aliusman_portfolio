import Content from "./Content";

interface contentType {
  title: string;
  discription: string;
}

interface StepperProps {
  content1: contentType;
  content2: contentType;
  border: boolean;
  dot?: boolean;
}
function Stepper({ content1, content2, border, dot }: StepperProps) {
  return (
    <div className="flex lg:flex-row flex-col  lg:justify-between  ">
      <div className="flex max-w-[495px]   w-full flex-col gap-10">
        <Content title={content1.title} date={content1.discription} />
      </div>
      <div
        className={`border-secondary  lg:block hidden relative w-[1px] ${
          !border ? "" : "border-line"
        }`}
      >
        <div className="absolute left-0 -top-0 -translate-x-1/2">
          <div
            className={`h-12 w-12 p-2 dot relative border-darkgray animate-spin bg-white rounded-full ${
              dot ? "before:bg-secondary" : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="flex max-w-[495px] lg:pl-10 w-full lg:self-auto self-end flex-col  relative gap-10">
        <Content
          className="before:!bg-primary"
          title={content2.title}
          date={content2.discription}
        />
      </div>
    </div>
  );
}

export default Stepper;
