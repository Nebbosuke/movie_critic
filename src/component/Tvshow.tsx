import HOFTV from "./HOFTV";
import db from "../db/halloffame.json";
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

const record: { [key: string]: movie[] } = db.tvdramas;
const Main = () => {
  return (
    <main className="sm:mb-24">
      <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold mb-1">
        ドラマ
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-white text-base sm:text-2xl mb-3">
          お気に入りのドラマの一覧です。全部で{record.record.length}作品です。
        </span>
      </div>
      <HOFTV />
    </main>
  );
};

export default Main;
