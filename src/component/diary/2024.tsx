import * as React from "react";
import db from "../../db/record/2024.json";
import PosterDialog from "../PosterDialog";
import { Link as Scroll } from "react-scroll";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

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

type movies = { [key: string]: movie[] };

const record: movies = db.record;

const Selection: React.FC = () => {
  const [jan, setJan] = useState(record.jan);
  const [feb, setFeb] = useState(record.feb);
  const [mar, setMar] = useState(record.mar);
  const [keyword, setKeyword] = useState("");
  const count = record.jan.length + record.feb.length + record.mar.length; //---------ここを変更

  const setList = () => {
    //---------ここを変更
    setJan(record.jan);
    setFeb(record.feb);
    setMar(record.mar);
  };

  useEffect(() => {
    if (keyword === "") {
      setList();
      return;
    }

    const searchKeywords = keyword.toLowerCase().match(/[^\s]+/g);

    if (searchKeywords === null) {
      setList();
      return;
    }

    const filterMovie = (movie: movie[]): movie[] => {
      return movie.filter((product) =>
        searchKeywords.every(
          (kw) =>
            product.title.toLowerCase().indexOf(kw) !== -1 ||
            product.director.toLowerCase().indexOf(kw) !== -1 ||
            product.star.toLowerCase().indexOf(kw) !== -1
        )
      );
    };

    setJan(filterMovie(record.jan));
    setFeb(filterMovie(record.feb));
    setMar(filterMovie(record.mar));
    //---------ここを変更
  }, [keyword, jan]);

  const monthButton = (month: string): React.ReactNode => {
    return (
      <Scroll to={month} smooth={true} duration={600} offset={-80}>
        <button className="text-white hover:text-netflix border-2 border-white rounded-full px-2 hover:bg-white mr-2">
          {month}月
        </button>
      </Scroll>
    );
  };

  const poster = (movie: movie) => {
    return (
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
    );
  };

  const showSection = (month: string, movies: movie[]): React.ReactNode => {
    return (
      <section id={month} className="mb-10">
        {movies.length !== 0 && (
          <div className="text-white text-xl sm:text-2xl mb-2 font-bold">
            {month}月
          </div>
        )}
        {movies.map((movie, index) => (
          <span key={index}>{poster(movie)}</span>
        ))}
      </section>
    );
  };

  return (
    <main className="sm:mb-24">
      <div className="mb-5">
        <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold mb-1">
          2024
        </div>
        <span className="w-max text-white text-base sm:text-2xl">
          2024年に観た映画、ドラマの一覧です。０～５点で評価しています。全部で
          {count}作品です。
        </span>
      </div>
      <div className="mt-8 mb-8 sm:mb-14 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex mr-3 mb-6 sm:mb-0 w-full sm:w-1/5">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder=" 検索"
            className="mr-2 sm:ml-2 w-full"
          />
          <button
            onClick={() => setKeyword("")}
            className="text-white hover:text-red-600"
          >
            <ClearIcon color="inherit" />
          </button>
        </div>
        <span className="mb-2 sm:mb-0">
          {monthButton("１")}
          {monthButton("２")}
          {monthButton("３")}
        </span>
      </div>
      {jan.length === 0 && feb.length === 0 && mar.length === 0 && (
        <span className="text-white">一致する作品はありません。</span>
      )}
      {showSection("１", jan)}
      {showSection("２", feb)}
      {showSection("３", mar)}
    </main>
  );
};

export default Selection;
