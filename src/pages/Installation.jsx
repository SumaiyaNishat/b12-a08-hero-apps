import React, {  useState } from "react";
import icon1 from "../assets/icon-downloads.png";
import icon2 from "../assets/icon-ratings.png";
import { loadInstallation, uninstallApp } from "../utils/localStorage";


const Installation = () => {
  const [installation, setinstallation] = useState(() => loadInstallation ());
  const [sortSize, setSortSize] = useState('none')
 

  const sortedSize = (() => {
    if(sortSize === 'size-asc'){
        return [...installation].sort((a, b) => a.size - b.size)
    }else if(sortSize === 'size-desc'){
        return [...installation].sort((a, b) => b.size - a.size) 
    }else {
        return installation;
    }
  })();

 const handleUninstall = id => {
  uninstallApp(id)
  setinstallation(prev => prev.filter(p => p.id !== id))
 }

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between py-10 ">
        <h1 className="text-xl font-bold">{sortedSize.length} Apps Found</h1>
       <label className="form-control w-full max-w-xs">
         <select className="select select-bordered" value={sortSize} onChange={e => setSortSize(e.target.value)}>
            <option value='none'>Sort By Size</option>
            <option value='size-asc'>Low-&gt;High</option>
            <option value='size-desc'>High-&gt;Low</option>

        </select>
       </label>
      </div>
      <div className="space-y-3">
        {sortedSize.map((c) => (
          <div
            key={c.id}
            className="card bg-base-100 shadow-sm">
            <div className="flex justify-between items-center m-5">
              <div>
                <img src={c.image} alt="" className="w-30" />
              </div>
              <div className="card-body">
                <p className="">{c.title}</p>
                <div className="flex gap-4">
                    <div className="flex gap-2 items-center">
                        <img src={icon1} alt="" className="w-4 h-4" />
                        <p className="text-lg">{c.downloads}M</p>
                        </div>
                    <div className="flex gap-2 items-center">
                        <img src={icon2} alt="" className="w-4 h-4" />
                        <p className="text-lg">{c.ratingAvg}</p>
                        </div>
                    <div className="">
                        <p className="text-lg">{c.size} MB</p>
                        </div>
                </div>
              </div>
               <div className="card-action">
                  <button onClick={() => handleUninstall(c.id)} className="btn bg-[#00D390] text-white ">Uninstall</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
