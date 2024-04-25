"use client";
import { useCallback, useEffect } from "react";
import Info from "./Info";
import Trailer from "./Trailer";

type movieProps = {
  image: string;
  title: string;
  year: string;
  director: string;
  star: string;
  src: string;
  rate?: number;
  sum?: string;
  overview?: string;
  co?: string[];
  platform?: string;
};

const MovieInfo: React.FC<movieProps> = ({
  image,
  title,
  year,
  director,
  star,
  src,
  rate,
  sum,
  overview,
  co,
  platform,
}) => {
  const blockBrowserBack = useCallback(() => {
    window.history.go(1);
  }, []);

  useEffect(() => {
    // 直前の履歴に現在のページを追加
    window.history.pushState(null, "", window.location.href);

    // 直前の履歴と現在のページのループ
    window.addEventListener("popstate", blockBrowserBack);

    // クリーンアップは忘れない
    return () => {
      window.removeEventListener("popstate", blockBrowserBack);
    };
  }, [blockBrowserBack]);
  return (
    <main className="flex flex-col items-center pt-8 px-8 pb-64 md:pt-12 md:px-12 md:pb-32 bg-netflix min-h-screen">
      <div className="flex lg:flex-row flex-col sm:gap-16 gap-8 mb-4 sm:mb-24 2xl:px-56">
        <div className="flex flex-col items-center">
          <img src={image} alt="" width={800}></img>
        </div>
        <div className="w-full sm:w-2/3">
          <Info
            title={title}
            year={year}
            director={director}
            star={star}
            src={src}
            rate={rate}
            sum={sum}
            overview={overview}
            co={co}
            platform={platform}
          />
        </div>
      </div>
      <Trailer src={src} />
    </main>
  );
};

export default MovieInfo;
