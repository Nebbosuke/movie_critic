import * as React from "react";
import PosterDialog from "../component/PosterDialog";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import janImg from "./month/jan.png";
import febImg from "./month/feb.png";
import marImg from "./month/mar.png";
import aprImg from "./month/apr.png";
import mayImg from "./month/may.png";
import junImg from "./month/jun.png";
import julImg from "./month/jul.png";
import augImg from "./month/aug.png";
import sepImg from "./month/sep.png";
import octImg from "./month/oct.png";
import novImg from "./month/nov.png";
import decImg from "./month/dec.png";
import WindowSize from "./WindowsSize";

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
  const size = WindowSize();
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
  }, [keyword]);

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
              <div className="text-white sm:hover:text-red-600 mb-3 sm:mb-0">
                <SwapVertIcon fontSize="large" />
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
                <SwapVertIcon fontSize="large" />
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
            {showPoster(`${janImg}`, jan)}
            {showPoster(`${febImg}`, feb)}
            {showPoster(`${marImg}`, mar)}
            {showPoster(`${aprImg}`, apr)}
            {showPoster(`${mayImg}`, may)}
            {showPoster(`${junImg}`, jun)}
            {showPoster(`${julImg}`, jul)}
            {showPoster(`${augImg}`, aug)}
            {showPoster(`${sepImg}`, sep)}
            {showPoster(`${octImg}`, oct)}
            {showPoster(`${novImg}`, nov)}
            {showPoster(`${decImg}`, dec)}
          </span>
        )}
        {toggle === 1 && (
          <span>
            {showPosterReverse(`${decImg}`, dec)}
            {showPosterReverse(`${novImg}`, nov)}
            {showPosterReverse(`${octImg}`, oct)}
            {showPosterReverse(`${sepImg}`, sep)}
            {showPosterReverse(`${augImg}`, aug)}
            {showPosterReverse(`${julImg}`, jul)}
            {showPosterReverse(`${junImg}`, jun)}
            {showPosterReverse(`${mayImg}`, may)}
            {showPosterReverse(`${aprImg}`, apr)}
            {showPosterReverse(`${marImg}`, mar)}
            {showPosterReverse(`${febImg}`, feb)}
            {showPosterReverse(`${janImg}`, jan)}
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

  const monthPoster = (image: string) => {
    return (
      <span>
        <button className="text-blue-600 mx-3 mb-6 cursor-default">
          {size === "s" && (
            <div>
              <img src={image} alt="" width={110}></img>
            </div>
          )}
          {size === "m" && (
            <div>
              <img src={image} alt="" width={160}></img>
            </div>
          )}
          {size === "l" && (
            <div>
              <img src={image} alt="" width={250}></img>
            </div>
          )}
        </button>
      </span>
    );
  };

  const showPoster = (image: string, movies: movie[]): React.ReactNode => {
    return (
      <span className="mb-10">
        {movies.length !== 0 && (
          <>
            {monthPoster(image)}
            {movies.map((movie, index) => (
              <span key={index}>{poster(movie)}</span>
            ))}
          </>
        )}
      </span>
    );
  };

  const showPosterReverse = (
    image: string,
    movies: movie[]
  ): React.ReactNode => {
    const array: movie[] = movies;
    const array2: movie[] = [];
    for (let i = 0; i < array.length; i++) {
      array2[i] = array[array.length - 1 - i];
    }

    return (
      <span className="mb-10">
        {movies.length !== 0 && (
          <>
            {monthPoster(image)}
            {array2.map((movie, index) => (
              <span key={index}>{poster(movie)}</span>
            ))}
          </>
        )}
      </span>
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
