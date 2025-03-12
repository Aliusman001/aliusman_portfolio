import Image from "next/image";

function SmallIcons({
  icon,
  title,
  className,
}: {
  icon: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className ? className : ""}`}>
      <Image src={icon} alt="SVG" />
      <span className="sm:text-base text-[.5rem]">{title}</span>
    </div>
  );
}

export default SmallIcons;
