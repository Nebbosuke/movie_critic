import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
export default function BasicSelect() {
  const [sort, setSort] = React.useState("1");
  const [list, setList] = React.useState(record);
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
    judge();
  };
  const judge = () => {
    if (sort === "1") {
      list.record.sort((a, b) =>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
      );
      setList(list);
    } else if (sort === "2") {
      list.record.sort((a, b) =>
        a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 1
      );
      setList(list);
    }
  };
  React.useEffect(() => {}, [sort]);
  return (
    <main className="text-white">
      <Box sx={{ minWidth: 20 }}>
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            sort
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sort"
            onChange={handleChange}
            sx={{ color: "white", backgroundColor: "#070707" }}
            variant="outlined"
          >
            <MenuItem value={"1"}>タイトル降順</MenuItem>
            <MenuItem value={"2"}>タイトル昇順</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="pt-4 mb-20">
        {Object.keys(list).map((month, index) => (
          <div key={index} className="pb-6">
            {list[month].map((movie, index) => (
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
    </main>
  );
}
