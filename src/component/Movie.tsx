import { useCallback, useState } from "react";
import HallOfFame from "./HallOfFame";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Main = () => {
  const [orderDA, setOrderDA] = useState("DAA");
  const handleChangeTitle = useCallback(() => {
    if (orderDA === "DAA") {
      setOrderDA("DAD");
    } else {
      setOrderDA("DAA");
    }
  }, [orderDA]);
  return (
    <main className="sm:mb-24">
      <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold mb-1">
        映画
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-white text-base sm:text-2xl mb-3">
          お気に入りの映画。
        </span>
        <div className="gap-5">
          <button
            onClick={handleChangeTitle}
            className="mr-5 text-red-600 sm:hover:text-netflix border-2 border-red-600 rounded-full px-3 sm:hover:bg-red-600"
          >
            {orderDA === "DAA" && (
              <div className="">
                追加順
                <ArrowUpwardIcon />
              </div>
            )}
            {orderDA === "DAD" && (
              <div className="">
                追加順
                <ArrowDownwardIcon />
              </div>
            )}
          </button>
        </div>
      </div>
      <HallOfFame order={orderDA} />
    </main>
  );
};

export default Main;
