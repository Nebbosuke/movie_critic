import HallOfFame from "./HallOfFame";

const Main = () => {
  return (
    <main className="sm:mb-24">
      <div className="w-max text-red-600 text-2xl sm:text-4xl font-bold mb-1">
        映画
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-white text-base sm:text-2xl mb-3">
          お気に入りの映画。
        </span>
      </div>
      <HallOfFame />
    </main>
  );
};

export default Main;
