import { NavItem } from "@/utils";
import CustomLink from "../CustomLink";

function FooterLink({ title, links }: { title: string; links: NavItem[] }) {
  return (
    <>
      <h5 className="text-small leading-small mb-5 font-semibold text-primary">
        {title}
      </h5>
      <ul className="flex flex-col gap-3">
        {links.map((link: NavItem, index) => {
          return (
            <li key={index} className="sm:text-xsmall text-base">
              <CustomLink path={link.path} title={link.title} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FooterLink;
