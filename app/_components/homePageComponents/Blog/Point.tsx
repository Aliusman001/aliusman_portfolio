import { formatDateBlogPost } from "@/utils";

function Point({ title, date }: { title: string | undefined; date?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
      <p className="sm:text-xsmall text-base sm:leading-xsmall  text-secondary">
        {date && title ? formatDateBlogPost(title) : title}
      </p>
    </div>
  );
}

export default Point;
