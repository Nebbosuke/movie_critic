import * as React from "react";
import PosterDialog from "../component/PosterDialog";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SwapVertIcon from "@mui/icons-material/SwapVert";

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
  platform?: string;
};

type movies = { [key: string]: movie[] };

const Selection = (year: string, record: movies) => {
  const [jan, setJan] = useState(record.jan);
  const [feb, setFeb] = useState(record.feb);
  const [mar, setMar] = useState(record.mar);
  const [apr, setApr] = useState(record.apr);
  const [may, setMay] = useState(record.may);
  const [jun, setJun] = useState(record.jun);
  const [jul, setJul] = useState(record.jul);
  const [aug, setAug] = useState(record.aug);
  const [sep, setSep] = useState(record.sep);
  const [oct, setOct] = useState(record.oct);
  const [nov, setNov] = useState(record.nov);
  const [dec, setDec] = useState(record.dec);
  const [keyword, setKeyword] = useState("");
  const [toggle, setToggle] = useState(0);

  const toggleClick = () => {
    if (toggle === 0) {
      setToggle(1);
    } else if (toggle === 1) {
      setToggle(0);
    }
  };

  const showToggleButton = (): React.ReactNode => {
    return (
      <div>
        {toggle === 0 && (
          <div>
            <button
              id="basic-button"
              aria-haspopup="true"
              onClick={toggleClick}
            >
              <div className="text-white sm:hover:text-red-600">
                <SwapVertIcon />
              </div>
            </button>
          </div>
        )}
        {toggle === 1 && (
          <div>
            <button
              id="basic-button"
              aria-haspopup="true"
              onClick={toggleClick}
            >
              <div className="text-white sm:hover:text-red-600">
                <SwapVertIcon />
              </div>
            </button>
          </div>
        )}
      </div>
    );
  };

  const showRecord = (): React.ReactNode => {
    return (
      <>
        {toggle === 0 && (
          <span>
            {showSection("１", jan)}
            {showSection("２", feb)}
            {showSection("３", mar)}
            {showSection("４", apr)}
            {showSection("５", may)}
            {showSection("６", jun)}
            {showSection("７", jul)}
            {showSection("８", aug)}
            {showSection("９", sep)}
            {showSection("１０", oct)}
            {showSection("１１", nov)}
            {showSection("１２", dec)}
          </span>
        )}
        {toggle === 1 && (
          <span>
            {showSection("１２", dec)}
            {showSection("１１", nov)}
            {showSection("１０", oct)}
            {showSection("９", sep)}
            {showSection("８", aug)}
            {showSection("７", jul)}
            {showSection("６", jun)}
            {showSection("５", may)}
            {showSection("４", apr)}
            {showSection("３", mar)}
            {showSection("２", feb)}
            {showSection("１", jan)}
          </span>
        )}
      </>
    );
  };

  const count =
    record.jan.length +
    record.feb.length +
    record.mar.length +
    record.apr.length +
    record.may.length +
    record.jun.length +
    record.jul.length +
    record.aug.length +
    record.sep.length +
    record.oct.length +
    record.nov.length +
    record.dec.length;

  const setList = () => {
    setJan(record.jan);
    setFeb(record.feb);
    setMar(record.mar);
    setApr(record.apr);
    setMay(record.may);
    setJun(record.jun);
    setJul(record.jul);
    setAug(record.aug);
    setSep(record.sep);
    setOct(record.oct);
    setNov(record.nov);
    setDec(record.dec);
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
    setApr(filterMovie(record.apr));
    setMay(filterMovie(record.may));
    setJun(filterMovie(record.jun));
    setJul(filterMovie(record.jul));
    setAug(filterMovie(record.aug));
    setSep(filterMovie(record.sep));
    setOct(filterMovie(record.oct));
    setNov(filterMovie(record.nov));
    setDec(filterMovie(record.dec));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

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
        platform={movie.platform}
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
      <div className="mb-7">
        <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold mb-1">
          {year}
        </div>
        <span className="w-max  text-gray-300 text-base sm:text-2xl">
          {year}年に観た映画、ドラマの一覧です。０～５点で評価しています。全部で
          {count}作品です。
        </span>
      </div>
      <div className="mb-4 sm:mb-14 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex w-full sm:w-2/5">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder=" 検索"
            className="mx-2 w-full"
          />
          <button
            onClick={() => setKeyword("")}
            className="text-white sm:hover:text-red-600"
          >
            <div className="rounded-full bg-gray-600">
              <ClearIcon color="inherit" />
            </div>
          </button>
        </div>
        <div className="mt-2 sm:mt-0">{showToggleButton()}</div>
      </div>
      {jan.length === 0 &&
        feb.length === 0 &&
        mar.length === 0 &&
        apr.length === 0 &&
        may.length === 0 &&
        jun.length === 0 &&
        jul.length === 0 &&
        aug.length === 0 &&
        sep.length === 0 &&
        oct.length === 0 &&
        nov.length === 0 &&
        dec.length === 0 && (
          <span className="text-white">一致する作品はありません。</span>
        )}
      {showRecord()}
    </main>
  );
};

export default Selection;
