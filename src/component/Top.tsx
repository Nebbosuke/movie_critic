import image from "../top1.png";
import movie from "../movie.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import useWindowSize from "./useWindowsSize";
import { Link } from "react-router-dom";

const Main = (props: any) => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <main className="flex flex-col text-center items-center justify-center text-white gap-5 mb-32">
      <div className="flex flex-col items-center text-white mb-12 sm:mb-24 text-sm sm:text-3xl">
        <img src={image} alt=""></img>
        {/* <div className="mb-3">
          ねぼすけといいます。好きなものを何でも載せます。何が見つかるか見てみよう。
        </div>
        <div className="text-gray-400 text-xs sm:text-2xl">
          ...しかし、いったい何があなたをここに導いたのだろうか..
        </div> */}
      </div>
      {useWindowSize() === "s" && (
        <>
          <div className="flex flex-col gap-6 mb-8 sm:mb-32">
            <div className="flex flex-col items-center justify-center gap-6">
              <img src={movie} alt="" width={150}></img>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-red-600 sm:mb-3 font-bold text-xl">
                お気に入り
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="text-white text-base">
                  {/* Here is a list of my favorite movies & TV shows. */}
                  お気に入りの映画、ドラマ
                </div>
              </div>
              <div className="flex flex-row gap-8 my-4 sm:my-8 text-lg">
                <Link to={"/movie"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    映画
                  </button>
                </Link>
                <Link to={"/tvshow"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    ドラマ
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <MenuBookIcon sx={{ fontSize: "150px", color: "#ED1C24" }} />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-red-600 sm:mb-3 font-bold text-xl">
                映画日記
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="text-white text-base">
                  {/* Here is a list of the movies & TV shows I have ever watched
                  since 2024. I rank them from 0 to 5 points. */}
                  みた映画、ドラマの記録
                </div>
              </div>
              <div className="flex flex-row gap-8 my-4 sm:my-8 text-lg">
                <Link to={"/2024"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    2024
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {useWindowSize() === "m" && (
        <>
          <div className="flex flex-col gap-6 mb-8 sm:mb-32">
            <div className="flex flex-col items-center justify-center gap-6">
              <img src={movie} alt="" width={200}></img>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-red-600 sm:mb-3 font-bold text-xl sm:text-4xl">
                お気に入り
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="text-white text-sm sm:text-2xl">
                  {/* Here is a list of my favorite movies & TV shows. */}
                  お気に入りの映画、ドラマ
                </div>
              </div>
              <div className="flex flex-row gap-8 my-10 text-lg sm:text-2xl">
                <Link to={"/movie"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    映画
                  </button>
                </Link>
                <Link to={"/tvshow"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    ドラマ
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <MenuBookIcon sx={{ fontSize: "200px", color: "#ED1C24" }} />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-red-600 sm:mb-3 font-bold text-xl sm:text-4xl">
                映画日記
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="text-white text-sm sm:text-2xl">
                  {/* Here is a list of the movies & TV shows I have ever watched
                  since 2024. I rank them from 0 to 5 points. */}
                  みた映画、ドラマの記録
                </div>
              </div>
              <div className="flex flex-row gap-8 my-10 text-lg sm:text-2xl">
                <Link to={"/2024"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    2024
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {useWindowSize() === "l" && (
        <>
          <div className="flex flex-col gap-6 mb-8 sm:mb-32">
            <div className="flex flex-col items-center justify-center gap-6">
              <img src={movie} alt="" width={300}></img>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-red-600 sm:mb-3 font-bold text-xl sm:text-4xl">
                お気に入り
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="text-white text-sm sm:text-2xl">
                  {/* Here is a list of my favorite movies & TV shows. */}
                  お気に入りの映画、ドラマ
                </div>
              </div>
              <div className="flex flex-row gap-8 my-10 text-lg sm:text-2xl">
                <Link to={"/movie"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    映画
                  </button>
                </Link>
                <Link to={"/tvshow"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    ドラマ
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <MenuBookIcon sx={{ fontSize: "300px", color: "#ED1C24" }} />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-red-600 sm:mb-3 font-bold text-xl sm:text-4xl">
                映画日記
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="text-white text-sm sm:text-2xl">
                  {/* Here is a list of the movies & TV shows I have ever watched
                  since 2024. I rank them from 0 to 5 points. */}
                  みた映画、ドラマの記録
                </div>
              </div>
              <div className="flex flex-row gap-8 my-10 text-lg sm:text-2xl">
                <Link to={"/2024"}>
                  <button
                    onClick={returnTop}
                    className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600"
                  >
                    2024
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
