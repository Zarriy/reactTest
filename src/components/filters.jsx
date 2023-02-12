import { useContext } from "react";
import { FilterContext } from "../context/context";

export default function Filters() {
  const { handleFilterChange, selected } = useContext(FilterContext);

  const filters = ["ALL", "Window", "Door", "House"];

  return (
    <div className="flex space-y-2 flex-col">
      {filters.map((filter, i) => (
        <div
          key={i}
          className={`px-6 py-4 bg-white rounded-xl hover:shadow-xl transition duration-200 cursor-pointer ease-out ${
            selected === filter.toLowerCase() &&
            "bg-blue-400 shadow-xl text-slate-50"
          }`}
          onClick={handleFilterChange}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}
