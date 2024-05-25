"use client";
import React, { useLayoutEffect, useState } from "react";

type InfoProps = {
  src: string;
};

const Trailer: React.FC<InfoProps> = ({ src }) => {
  const useWindowSize = (): string => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      const updateSize = (): void => {
        setSize(window.innerWidth);
      };

      window.addEventListener("resize", updateSize);
      updateSize();

      return () => window.removeEventListener("resize", updateSize);
    }, []);
    if (1024 <= size) {
      return "l";
    } else if (768 <= size && size < 1024) {
      return "m";
    } else {
      return "s";
    }
  };
  return (
    <div className="flex flex-col">
      {/* <div className="flex flex-row items-center gap-1 text-lg sm:text-2xl text-black">
        トレーラー
      </div> */}
      <div className="flex flex-col pt-3 w-full items-center">
        {useWindowSize() === "l" && (
          <div className="border-8 border-black rounded-xl">
            <iframe
              width="1024"
              height="576"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {useWindowSize() === "m" && (
          <div className="border-8 border-black rounded-xl">
            <iframe
              width="640"
              height="360"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {useWindowSize() === "s" && (
          <div className="border-4 border-black rounded-md">
            <iframe
              width="300"
              height="170"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};
export default Trailer;
