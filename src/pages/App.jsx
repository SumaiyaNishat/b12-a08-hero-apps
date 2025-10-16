import React, { useState } from "react";
import useCards from "../hooks/useCards";
import HomeCard from "../components/HomeCard/HomeCard";
import { Search } from "lucide-react";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const App = () => {
  const { cards, loading } = useCards();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchLoading(true);
    setSearch(e.target.value);
    setTimeout(() => setSearchLoading(false), 200);
  };

  const find = search.trim().toLocaleLowerCase();
  const searchedApp = find
    ? cards.filter((card) => card.title.toLocaleLowerCase().includes(find))
    : cards;

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-[#D9D9D9] min-h-screen">
      <div className="w-11/12 mx-auto pt-15">
        {searchedApp.length > 0 && (
          <div className="text-center pb-4">
            <h1 className="text-3xl font-bold">Our All Applications</h1>
            <p>
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
        )}
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-xl font-semibold">
            ({searchedApp.length}) Apps Found
          </h1>
          <label className="input">
            <Search />
            <input
              value={search}
              onChange={handleSearch}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>

        {searchLoading && <LoadingSpinner />}

        {searchedApp.length > 0 && !searchLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchedApp.map((card) => (
              <HomeCard key={card.id} card={card} />
            ))}
          </div>
        )}

        {searchedApp.length === 0 && !searchLoading && (
          <h1 className="text-center py-10 text-5xl font-bold w-full">
            No Apps Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default App;
