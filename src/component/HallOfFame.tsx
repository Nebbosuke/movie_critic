import * as React from "react";
import db from "../db/halloffame.json";
import HOFPosterDialog from "./HOFPosterDialog";

type movie = {
  id: number;
  image: string;
  title: string;
  year: string;
  director: string;
  star: string;
  src: string;
  sum?: string;
  overview?: string;
  co?: string[];
};

const record: { [key: string]: movie[] } = db.movies;

const Selection = (props: any) => {
  if (props.order === "DAA") {
    record.record.sort((a, b) => a.id - b.id);
  } else if (props.order === "DAD") {
    record.record.sort((a, b) => b.id - a.id);
  }
  return (
    <main className="pt-4 mb-20">
      {Object.keys(record).map((month, index) => (
        <div key={index} className="pb-6">
          {record[month].map((movie, index) => (
            <span key={index} className="">
              <HOFPosterDialog
                image={movie.image}
                title={movie.title}
                year={movie.year}
                director={movie.director}
                star={movie.star}
                src={movie.src}
                sum={movie.sum}
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
