import React, { useState } from "react";
import useCards from "../hooks/useCards";
import HomeCard from "../components/HomeCard/HomeCard";
import { Search } from "lucide-react";
import { Link } from "react-router";

const App = () =>{
    const {cards} = useCards()
     const [search, setSearch] = useState('')
     const find = search.trim().toLocaleLowerCase()
    const searchedApp = find 
    ? cards.filter(card => card.title.toLocaleLowerCase().includes(find)) 
    : cards

    return(
      <div className="bg-[#D9D9D9]">
         <div className="w-11/12 mx-auto pt-10">

        <div className="text-center">
          <h1 className="text-3xl font-bold">Our All Applications</h1>
          <p className="">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
            <div className="flex justify-between py-5 items-center">
                <h1 className="text-xl font-semibold">({searchedApp.length}) Apps Found</h1>
           <label className="input">
   <Search />
  <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
</label>
            </div>

          {searchedApp.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchedApp.map(card => (
            <HomeCard key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <h1 className="text-center py-10 text-5xl font-bold w-full ">No App Found</h1>
    )}
    
        </div>
      </div>
    )
}

export default App;