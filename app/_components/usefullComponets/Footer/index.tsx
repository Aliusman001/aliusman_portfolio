import Link from "next/link";
import FooterForm from "./FooterForm";
import FooterHeader from "./FooterHeader";
import FooterLink from "./FooterLink";
import Icon from "../Icon/Icon";
import CustomLink from "../CustomLink";
import { FacebookSvg, TwitterSvg, WhatsappSvg } from "../../svg";
import YoutubeSvg from "../../svg/SocialSvg/YoutubeSvg";
import LinkedinSvg from "../../svg/SocialSvg/LinkedinSvg";
import { footerLinks } from "@/utils";

function Footer() {
  return (
    <div className="bg-footer rounded-tr-3xl rounded-tl-3xl lg:px-12 px-5 pt-10 lg:pt-20">
      <div className="max-w-screen mx-auto ">
        <FooterHeader />
        <div className="grid lg:grid-cols-[3.5fr,1fr,1fr,2fr] md:grid-cols-[3.5fr,1fr,1fr] grid-cols-1 lg:gap-5 md:grid-rows-[2fr,1fr] mt-10  border-[#475467] border-b-2 gap-10 lg:pb-0 pb-10">
          <div className="flex flex-col md:gap-10 gap-5">
            <span className="h-[65px] max-w-[250px] mt-5">
              <Icon
                className="!justify-start !bg-transparent"
                titleClassName="!bg-footer  !text-3xl"
              />
            </span>
            <div>
              <p className="text-white sm:text-xsmall text-base sm:leading-xsmall ">
                Frontend Developer | Passionate about building user-friendly,
                responsive, and modern web applications. Designing seamless and
                interactive user experiences. Specializing in modern, responsive
                web applications. Let&lsquo;s build something extraordinary
                together.
              </p>
            </div>
          </div>
          <div className="lg:row-span-2">
            <FooterLink title="Navigation" links={footerLinks[0]} />
          </div>
          <div className="lg:row-span-2">
            <FooterLink title="Contact" links={footerLinks[1]} />
          </div>
          <div className="lg:row-span-2 flex-col  flex gap-5">
            <h3 className="text-small text-nowrap leading-small font-semibold text-primary">
              Get the latest information
            </h3>
            <FooterForm />
          </div>
          <div className="flex items-center lg:row-start-2 lg:row-end-3  md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-2 gap-2 lg:mt-0 md:-mt-10 -mt-5 md:self-start">
            <Link href={""}>
              <FacebookSvg />
            </Link>
            <Link href={""}>
              <LinkedinSvg />
            </Link>
            <Link href={""}>
              <YoutubeSvg />
            </Link>
            <Link href={""}>
              <TwitterSvg />
            </Link>
            <Link href={""}>
              <WhatsappSvg />
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center text-white mt-12 pb-5">
          <p className="md:sm:text-xsmall text-base md:text-left text-center text-sm md:sm:leading-xsmall ">
            Copyright@ 2024 Ali Usman. All Rights Reserved.
          </p>
          <div className="md:sm:text-xsmall text-base md:text-left text-center text-sm md:sm:leading-xsmall  ">
            <span>User </span>
            <CustomLink path="" title="Terms & Conditions" /> |{" "}
            <CustomLink path="" title="Privacy Policy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
