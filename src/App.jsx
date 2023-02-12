import Filters, { MobileFilter } from "./components/filters";
import ImageCard from "./components/imageCard";
import { data } from "./context/data";
import { useContext } from "react";
import { FilterContext } from "./context/context";

function App() {
  const { selected } = useContext(FilterContext);

  const filteredData =
    selected === "all"
      ? data
      : data.filter((item) => item.category === selected);

  return (
    <div className="bg-[#f2f3f6] pb-20 min-h-screen">
      <h2 className="text-3xl text-center text-neutral-800 py-10 sm:py-20">
        Filter Products App
      </h2>
      <div className="sm:flex space-x-4 ">
        <div className="sm:w-60 p-4 shrink-0 mb-6">
          <h3 className="mb-4 hidden sm:block">Filter by Categories:</h3>
          <div className="hidden sm:block">
            <Filters />
          </div>
          <div className="sm:hidden flex justify-end">
            <MobileFilter />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {filteredData.map((item) => (
            <ImageCard key={item.id} img={item.img} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
