import image from "../top1.png";
import movie from "../movie.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import useWindowSize from "./WindowsSize";
import { Link } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";

const Main = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const showPage = (width: number): React.ReactNode => {
    return (
      <>
        <div className="flex flex-col gap-6 mb-8 sm:mb-32">
          <div className="flex flex-col items-center justify-center gap-6">
            <img src={movie} alt="" width={width}></img>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-600 sm:mb-3 font-bold text-xl sm:text-4xl">
              お気に入り
            </div>
            {/* <div className="flex flex-col items-start gap-3">
              <div className="text-white text-sm sm:text-2xl">
                お気に入りの映画 & ドラマ
              </div>
            </div> */}
            <div className="flex flex-row gap-8 my-8 text-lg sm:text-2xl">
              <Link to={"/movie"}>
                <button
                  onClick={returnTop}
                  className="text-sm sm:text-xl text-white hover:text-red-600 border-2 border-white hover:border-red-600 hover:bg-netflix rounded-full px-3 "
                >
                  映画
                </button>
              </Link>
              <Link to={"/tvshow"}>
                <button
                  onClick={returnTop}
                  className="text-sm sm:text-xl text-white hover:text-red-600 border-2 border-white hover:border-red-600 hover:bg-netflix rounded-full px-3 "
                >
                  ドラマ
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-8 sm:mb-32">
          <div className="flex flex-col items-center justify-center">
            <MenuBookIcon sx={{ fontSize: `${width}px`, color: "#ED1C24" }} />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-600 sm:mb-3 font-bold text-xl sm:text-4xl">
              映画日記
            </div>
            {/* <div className="flex flex-col items-start gap-3">
              <div className="text-white text-sm sm:text-2xl">
                公開予定の映画 / 観た映画 & ドラマ
              </div>
            </div> */}
            <div className="flex flex-row gap-8 my-8 text-lg sm:text-2xl">
              {/* <Link to={"/watchlist"}>
                <button
                  onClick={returnTop}
                  className="text-sm sm:text-xl text-white hover:text-red-600 border-2 border-white hover:border-red-600 hover:bg-netflix rounded-full px-3 "
                >
                  アップカミング
                </button>
              </Link> */}
              <Link to={"/2024"}>
                <button
                  onClick={returnTop}
                  className="text-sm sm:text-xl text-white hover:text-red-600 border-2 border-white hover:border-red-600 hover:bg-netflix rounded-full px-3 "
                >
                  2024
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-8 sm:mb-32">
          <div className="flex flex-col items-center justify-center">
            <CategoryIcon sx={{ fontSize: `${width}px`, color: "#ED1C24" }} />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-600 sm:mb-3 font-bold text-xl sm:text-4xl">
              その他
            </div>
            <div className="flex flex-row gap-8 my-8 text-lg sm:text-2xl">
              <Link to={"/watchlist"}>
                <button
                  onClick={returnTop}
                  className="text-sm sm:text-xl text-white hover:text-red-600 border-2 border-white hover:border-red-600 hover:bg-netflix rounded-full px-3 "
                >
                  アップカミング
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <main className="flex flex-col text-center items-center justify-center text-white gap-5 mb-32">
      <div className="flex flex-col items-center text-white mb-12 sm:mb-24 text-sm sm:text-3xl">
        <img src={image} alt=""></img>

        {/* <div className="text-gray-400 text-xs sm:text-2xl">
          ...but, what brought you here?
        </div> */}
      </div>
      {useWindowSize() === "s" && <>{showPage(150)}</>}
      {useWindowSize() === "m" && <>{showPage(200)}</>}
      {useWindowSize() === "l" && <>{showPage(300)}</>}
    </main>
  );
};

export default Main;
