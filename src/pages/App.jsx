import React, { useState } from "react";
import useCards from "../hooks/useCards";
import HomeCard from "../components/HomeCard/HomeCard";
import { Search } from "lucide-react";

const App = () =>{
    const {cards} = useCards()
     const [search, setSearch] = useState('')
     const find = search.trim().toLocaleLowerCase()
    const searchedApp = find 
    ? cards.filter(card => card.title.toLocaleLowerCase().includes(find)) 
    : cards

    return(
       <div className="w-11/12 mx-auto">
            <div className="flex justify-between py-5 items-center">
                <h1 className="text-xl font-semibold">({searchedApp.length}) Apps Found</h1>
           <label className="input">
   <Search />
  <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
</label>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {
          searchedApp.map(card => (
            <HomeCard key={card.id} card={card}></HomeCard>
          ))
        }
      </div>
        </div>
    )
}

export default App;