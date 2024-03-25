import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import db from "../db/halloffame.json";
import HOFPosterDialog from "./HOFPosterDialog";

type movie = {
  id: number;
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

const record: { [key: string]: movie[] } = db.movies;
record.record.sort((a, b) =>
  a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
);

const SortMovie = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [flag, setFlag] = React.useState<number>(1);
  const [list, setList] = React.useState(record.record);
  const [sort, setSort] = React.useState("並び替え");
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
    setFlag(5);
    setSort("追加日の早い順");
  };
  const sortAddDsc = () => {
    setList(list.sort((a, b) => b.id - a.id));
    handleClose();
    setFlag(6);
    setSort("追加日の遅い順");
  };
  const sortTitleAsc = () => {
    setList(
      list.sort((a, b) =>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setFlag(1);
    setSort("タイトル降順");
  };
  const sortTitleDsc = () => {
    setList(
      list.sort((a, b) =>
        a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setFlag(2);
    setSort("タイトル昇順");
  };
  const sortYearAsc = () => {
    setList(
      list.sort((a, b) =>
        a.year.toUpperCase() < b.year.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setFlag(3);
    setSort("古い順");
  };
  const sortYearDsc = () => {
    setList(
      list.sort((a, b) =>
        a.year.toUpperCase() > b.year.toUpperCase() ? -1 : 1
      )
    );
    handleClose();
    setFlag(4);
    setSort("新しい順");
  };
  // React.useEffect(() => {
  //   record.record.sort((a, b) =>
  //     a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
  //   );
  // }, [flag]);
  return (
    <div>
      <div className="flex flex-row items-center gap-3">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: "red" }}
        >
          <div className="text-red-600 sm:hover:text-netflix border-2 border-red-600 rounded-lg px-3 sm:hover:bg-red-600">
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

      <div className="pt-4 mb-20">
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
      </div>
    </div>
  );
};
export default SortMovie;
