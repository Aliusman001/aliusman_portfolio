import Image from "next/image";
import profile from "@/public/testimonials/profile.svg";
import rating from "@/public/testimonials/rating.svg";
import quote from "@/public/testimonials/quote-down.svg";

function Review({ className }: { className?: string }) {
  return (
    <div className={`mx-4 review ${className ? className : ""}`}>
      <div className="bg-white/15 backdrop-blur-sm p-5 sm:w-[49rem] w-[400px] rounded-3xl">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex sm:gap-5 gap-2 text-white mb-3">
              <Image src={profile} alt="profile avatar" />
              <div className="flex flex-col items-start">
                <h4 className="sm:text-2xl text-lg font-bold">Fawzi Sayed</h4>
                <span className="sm:text-base font-normal text-[#FCFCFD]">
                  UI/UX Designer
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src={rating}
                alt="ration svg"
                className="sm:w-auto w-[100px]"
              />
              <span className="text-xsmall sm:text-small sm:leading-small font-medium text-white">
                5.0
              </span>
            </div>
          </div>
          <Image
            src={quote}
            alt="quote Svg"
            className="sm:w-auto w-20 aspect-square"
          />
        </div>
        <p className="text-left sm:text-xsmall sm:leading-xsmall text-xs mt-5  text-white">
          I absolutely love the design of this site! It&rsquo;s clean, modern,
          and super easy to navigate. Everything looks well-organized, and I
          don&rsquo;t have to hunt for the information I need. Really intuitive
          and user-friendly!
        </p>
      </div>
    </div>
  );
}

export default Review;
