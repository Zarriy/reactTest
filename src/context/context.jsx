import { createContext, useState } from "react";

export const FilterContext = createContext("all");

export default function FilterProvider({ children }) {
  const [selected, setSelected] = useState("all");

  const handleFilterChange = (e) => {
    setSelected(e.target.innerText.toLowerCase());
  };

  return (
    <FilterContext.Provider value={{ selected, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
}
