import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import db from "../db/halloffame.json";
import HOFPosterDialog from "./HOFPosterDialog";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

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
record.record.sort((a, b) =>
  a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
);

const SortMovie = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [list, setList] = React.useState(record.record);
  const [sort, setSort] = React.useState("並び替え");
  const [keyword, setKeyword] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sortAddAsc = () => {
    setList(list.sort((a, b) => a.id - b.id));
    handleClose();
    setSort("追加日の早い順");
  };
  const sortAddDsc = () => {
    setList(list.sort((a, b) => b.id - a.id));
    handleClose();
    setSort("追加日の遅い順");
  };
  const sortTitleAsc = () => {
    setList(
      list.sort((a, b) =>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setSort("タイトル降順");
  };
  const sortTitleDsc = () => {
    setList(
      list.sort((a, b) =>
        a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setSort("タイトル昇順");
  };
  const sortYearAsc = () => {
    setList(
      list.sort((a, b) =>
        a.year.toUpperCase() < b.year.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setSort("古い順");
  };
  const sortYearDsc = () => {
    setList(
      list.sort((a, b) =>
        a.year.toUpperCase() > b.year.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setSort("新しい順");
  };

  useEffect(() => {
    if (keyword === "") {
      setList(record.record);
      return;
    }

    const searchKeywords = keyword.toLowerCase().match(/[^\s]+/g);

    if (searchKeywords === null) {
      setList(record.record);
      return;
    }

    const result = record.record.filter((product) =>
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
    <div>
      <div className="sm:flex sm:flex-row sm:items-center gap-3 mb-1">
        <div className="w-full flex sm:w-1/5">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder=" 検索"
            className="mx-2 w-full"
          />
          <button
            onClick={() => setKeyword("")}
            className="text-white hover:text-red-600"
          >
            <ClearIcon color="inherit" />
          </button>
        </div>

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "#101010" }}
          >
            <div className="text-white sm:hover:text-netflix border-2 border-white rounded-md sm:rounded-none px-3 mt-4 sm:mt-0 sm:hover:bg-white">
              {sort}
            </div>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={sortTitleAsc}>タイトル降順</MenuItem>
            <MenuItem onClick={sortTitleDsc}>タイトル昇順</MenuItem>
            <MenuItem onClick={sortYearAsc}>古い順</MenuItem>
            <MenuItem onClick={sortYearDsc}>新しい順</MenuItem>
            <MenuItem onClick={sortAddAsc}>追加日の早い順</MenuItem>
            <MenuItem onClick={sortAddDsc}>追加日の遅い順</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="pt-4 mb-20">
        <div className="pb-6">
          {list.length === 0 && (
            <span className="text-white">一致する作品はありません。</span>
          )}
          {list.map((movie, index) => (
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
      </div>
    </div>
  );
};
export default SortMovie;
