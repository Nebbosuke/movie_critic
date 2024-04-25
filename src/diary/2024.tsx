import * as React from "react";
import db from "../db/record/2024.json";
import Library from "../component/Library";

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

const record: movies = db.record;

const Selection: React.FC = () => {
  return <main className="sm:mb-24">{Library("2024", record)}</main>;
};

export default Selection;
