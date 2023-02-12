import { useState } from "react";
import { useContext } from "react";
import { FilterContext } from "../context/context";
import filterImage from "../assets/filter-outline.svg";
import { useEffect } from "react";
import { useRef } from "react";

const filters = ["ALL", "Window", "Door", "House"];

export default function Filters() {
  const { handleFilterChange, selected } = useContext(FilterContext);

  return (
    <div className="flex space-x-4 sm:space-y-4 sm:flex-col">
      {filters.map((filter, i) => (
        <div
          key={i}
          className={`px-6 py-4 bg-white rounded-xl hover:shadow-xl transition duration-200 cursor-pointer ease-out ${
            selected === filter.toLowerCase() &&
            "bg-blue-400 text-slate-50 shadow-lg"
          }`}
          onClick={handleFilterChange}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}

export function MobileFilter() {
  const [show, setShow] = useState(false);
  const { handleFilterChange, selected } = useContext(FilterContext);
  const filterRef = useRef(null);

  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", outsideClickHandler);

    return () => document.removeEventListener("click", outsideClickHandler);
  }, [filterRef]);

  return (
    <div className="flex items-center gap-2 relative" ref={filterRef}>
      Filter:
      <div
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        <img
          src={filterImage}
          alt="filter Icon"
          className={`w-6 ${
            show && "rotate-180"
          } transition-transform duration-200 ease-out`}
        />
      </div>
      {show && (
        <ul className="absolute top-10 right-2 flex gap-2 flex-col z-10 bg-white px-6 py-6 w-40 rounded-lg">
          {filters.map((filter, i) => (
            <li
              className={`cursor-pointer px-4 py-2 rounded-lg  hover:shadow-lg ${
                selected === filter.toLowerCase() && "bg-blue-400 text-slate-50"
              }`}
              onClick={handleFilterChange}
            >
              {filter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
