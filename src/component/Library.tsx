import * as React from "react";
import db from "../db/record/2024.json";
import PosterDialog from "./PosterDialog";
import { Link as Scroll } from "react-scroll";

type movie = {
  image: string;
  title: string;
  year: string;
  director: string;
  star: string;
  src: string;
  rate: number;
  overview?: string;
  co?: string[];
};

const record: { [key: string]: movie[] } = db.record;

const Selection: React.FC = () => {
  return (
    <main className="sm:mb-24">
      <div className="mb-5">
        <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold">
          2024
        </div>
        <span className="w-max text-white text-base sm:text-2xl">
          2024年に観た映画、ドラマの一覧です。０～５点で評価しています。
        </span>
      </div>
      <div className="mb-10">
        <span>
          <Scroll to="１月" smooth={true} duration={600} offset={-80}>
            <button className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-2 hover:bg-red-600 mr-2 mb-2">
              １月
            </button>
          </Scroll>
          <Scroll to="２月" smooth={true} duration={600} offset={-80}>
            <button className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-2 hover:bg-red-600 mr-2 mb-2">
              ２月
            </button>
          </Scroll>
          <Scroll to="３月" smooth={true} duration={600} offset={-80}>
            <button className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-2 hover:bg-red-600 mr-2 mb-2">
              ３月
            </button>
          </Scroll>
        </span>
      </div>
      {Object.keys(record).map((month, index) => (
        <div key={index} className="pb-6">
          <section id={`${month}`}>
            <div className="text-white text-xl sm:text-2xl mb-2 font-bold">
              {month}
            </div>
          </section>
          {record[month].map((movie, index) => (
            <span key={index} className="">
              <PosterDialog
                image={movie.image}
                title={movie.title}
                year={movie.year}
                director={movie.director}
                star={movie.star}
                src={movie.src}
                rate={movie.rate}
                overview={movie.overview}
                co={movie.co}
              />
            </span>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Selection;
