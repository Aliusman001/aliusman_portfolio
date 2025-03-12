"use client";
import doubleArrow from "@/public/common/leftDoubleArrow.svg";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
interface CustomPaginationProps {
  total: number;
}

function CustomPagination({ total }: CustomPaginationProps) {
  const [current, setCurrent] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const onChange = (page: number) => {
    params.set("page", page.toString());
    router.push(`/blogs?${params.toString()}`, { scroll: false });
    setCurrent(page);
  };

  useEffect(() => {
    setCurrent(Number(params.get("page")));
  }, [params]);

  return (
    <div className="mt-16">
      <div className="flex gap-3 justify-center items-center">
        <button
          disabled={current <= 1}
          className="extra disabled:cursor-not-allowed"
          onClick={() => {
            if (current > 1) {
              if (current - 2 >= 1) {
                setCurrent(current - 2);
                params.set("page", String(current - 2));
                router.push(`/blogs?${params.toString()}`, { scroll: false });
              } else {
                setCurrent(1);
                params.set("page", String(1));
                router.push(`/blogs?${params.toString()}`, { scroll: false });
              }
            }
          }}
        >
          <Image src={doubleArrow} alt="Pagination Icons" />
        </button>
        <Pagination
          onChange={onChange}
          align="center"
          current={current}
          total={total * 10}
          showTitle={false}
        />
        <button
          disabled={total <= current + 1}
          className="extra disabled:cursor-not-allowed"
          onClick={() => {
            if (total !== current) {
              if (total > current + 1) {
                setCurrent(current + 2); // Skip two pages forward
                params.set("page", String(current + 2));
                router.push(`/blogs?${params.toString()}`, { scroll: false });
              }
            }
          }}
        >
          <Image
            src={doubleArrow}
            className="rotate-180"
            alt="Pagination Icons"
          />
        </button>
      </div>
    </div>
  );
}

export default CustomPagination;
