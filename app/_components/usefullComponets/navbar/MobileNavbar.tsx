import { navbarItems } from "@/utils";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileNavbar({ isOpen, setIsOpen }: MobileNavbarProps) {
  const pathname = usePathname();
  return (
    <>
      <div className="md:hidden flex justify-between  items-center">
        <Icon />
        <Hamburger
          color="white"
          size={24}
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
      <ul
        className={`text-white animation duration-150 py-5 flex justify-center flex-col items-center gap-4 md:hidden `}
      >
        {navbarItems.map((links) => {
          return links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path ? "bg-primary inline-block" : ""
                  } sm:text-xsmall text-base sm:leading-xsmall   px-7 rounded-full py-4`}
                >
                  {link.title}
                </Link>
              </li>
            );
          });
        })}
      </ul>
    </>
  );
}

export default MobileNavbar;
