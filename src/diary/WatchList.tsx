import { useEffect, useState } from "react";
import WLPosterDialog from "../component/WLPosterDialog";
import db from "../db/watchlist.json";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Menu, MenuItem } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
type movie = {
  image: string;
  title: any;
  year: string;
  director: string;
  star: string;
  src: string;
  sum?: string;
  overview?: string;
  co?: string[];
};

const record: movie[] = db.record;

const Main = () => {
  const [narrow, setNarrow] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [list, setList] = React.useState(record);
  const [sort, setSort] = React.useState<React.ReactNode>(
    <CategoryIcon fontSize="large" />
  );
  const [keyword, setKeyword] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const showAll = () => {
    setNarrow(0);
    setSort(<CategoryIcon fontSize="large" />);
    handleClose();
  };
  const theater = () => {
    setNarrow(1);
    setSort("公開中");
    handleClose();
  };
  const coming = () => {
    setNarrow(2);
    setSort("近日公開");
    handleClose();
  };
  const streaming = () => {
    setNarrow(3);
    setSort("配信待ち");
    handleClose();
  };
  const tbd = () => {
    setNarrow(4);
    setSort("公開日未定");
    handleClose();
  };
  useEffect(() => {
    if (keyword === "") {
      setList(record);
      return;
    }

    const searchKeywords = keyword.toLowerCase().match(/[^\s]+/g);

    if (searchKeywords === null) {
      setList(record);
      return;
    }

    const result = record.filter((product) =>
      searchKeywords.every(
        (kw) =>
          product.title.toLowerCase().indexOf(kw) !== -1 ||
          product.director.toLowerCase().indexOf(kw) !== -1 ||
          product.star.toLowerCase().indexOf(kw) !== -1
      )
    );

    setList(result);
  }, [keyword, list]);
  return (
    <main className="sm:mb-24">
      <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold mb-1">
        アップカミング
      </div>
      <div className="flex flex-col gap-7 sm:mb-8">
        <span className=" text-gray-300 text-base sm:text-2xl">
          公開予定・配信待ちの作品の一覧です。全部で{record.length}
          作品です。
        </span>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-1">
          <div className="w-full flex sm:w-2/5">
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
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className="text-white sm:hover:text-red-600 ml-1 mb-3 sm:mb-0">
              {sort}
            </div>
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={showAll}>すべて</MenuItem>
            <MenuItem onClick={theater}>公開中</MenuItem>
            <MenuItem onClick={coming}>近日公開</MenuItem>
            <MenuItem onClick={tbd}>公開日未定</MenuItem>
            <MenuItem onClick={streaming}>配信待ち</MenuItem>
          </Menu>
        </div>
      </div>
      <span className="sm:mt-10 mb-20">
        {list.map((movie, index) => (
          <>
            {narrow === 0 && (
              <span key={index} className="">
                <WLPosterDialog
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
            )}
            {narrow === 1 && movie.year === "1" && (
              <span key={index} className="">
                <WLPosterDialog
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
            )}
            {narrow === 2 &&
              movie.year !== "1" &&
              movie.year !== "0" &&
              movie.year !== "2" && (
                <span key={index} className="">
                  <WLPosterDialog
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
              )}
            {narrow === 3 && movie.year === "2" && (
              <span key={index} className="">
                <WLPosterDialog
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
            )}
            {narrow === 4 && movie.year === "0" && (
              <span key={index} className="">
                <WLPosterDialog
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
            )}
          </>
        ))}
      </span>
    </main>
  );
};

export default Main;
