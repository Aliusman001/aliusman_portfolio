import { ContentItem } from "@/utils";
import InViewSection from "./InviewSection";
import Image from "next/image";
import CodeFormat from "./CodeFormat";

interface BlogContentProps {
  content: {
    description: string;
    content: ContentItem[];
  };
}

function BlogContent({ content }: BlogContentProps) {
  return (
    <div>
      <p className="my-5">{content.description}</p>

      {content.content?.map((data, index) => (
        <div key={index}>
          {/* /////////////////Heading///////////// */}
          {data.type === "heading" && (
            <InViewSection top={index === 0} value={data.children[0].text} />
          )}

          {/* /////////////////Paragraph///////////// */}
          {data.type === "paragraph" && data.children[0].code ? (
            <CodeFormat code={data.children[0].text} />
          ) : (
            data.type === "paragraph" &&
            data.children[0].text
              .split("\n\n")
              .map((para: string, paraIndex: number) => (
                <p className="py-2" key={paraIndex}>
                  {para}
                </p>
              ))
          )}

          {/* /////////////////List///////////// */}
          {data.type === "list" && (
            <ul className="list-disc list-outside">
              {data.children.map((list, listIndex) =>
                list.type === "list-item" ? (
                  <li key={listIndex} className="my-1">
                    {list.children.length > 1 ? (
                      <>
                        <span className="font-medium">
                          {list.children[0]?.text}
                        </span>{" "}
                        {list.children[1]?.text}
                      </>
                    ) : (
                      list.children[0]?.text
                    )}
                  </li>
                ) : null
              )}
            </ul>
          )}

          {/* //////////////Images//////////// */}
          {data.type === "image" && data.image && (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${data.image.formats.large.url}`}
              alt="Content Image"
              width={862}
              height={489}
              className="aspect-[862/489] w-full h-auto object-cover my-5"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default BlogContent;
