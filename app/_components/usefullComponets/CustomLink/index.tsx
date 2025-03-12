import Link from "next/link";

interface CustomLinkProps {
  title: string;
  path: string;
}

function CustomLink({ title, path }: CustomLinkProps) {
  return (
    <Link
      href={path}
      className="text-white group  relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:w-0 after:animation after:duration-200 hover:after:w-full"
    >
      {title}
    </Link>
  );
}

export default CustomLink;
