import HOFTV from "./HOFTV";

const Main = () => {
  return (
    <main className="sm:mb-24">
      <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold mb-1">
        ドラマ
      </div>
      <div className="flex flex-col gap-5">
        <span className="w-max text-white text-base sm:text-2xl mb-3">
          お気に入りのドラマ。
        </span>
      </div>
      <HOFTV />
    </main>
  );
};

export default Main;
