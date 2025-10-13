import React from "react";
import img4 from "../assets/Group.png";
import img5 from "../assets/Group1.png";
import hero from "../assets/hero.png";
import img6 from "../assets/icon-downloads.png";
import img7 from "../assets/icon-ratings.png";
import img8 from "../assets/icon-review.png";
import { Link, useLoaderData } from "react-router";
import HomeCard from "../components/HomeCard/HomeCard";
import useCards from "../hooks/useCards";


const Home = () => {
  const {cards, loading, error} = useCards()
  // console.log(data)
  const homecards = cards.slice(0, 8)
  console.log(cards)
  return (
    <div className="p-6 bg-gray-200">
         <div className="text-center">
      <h1 className="text-5xl font-bold py-2">We Build<br/> <span className="text-[#632EE3]">Productive</span> Apps</h1>
      <p className="text-[#627382] pt-4">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex justify-center items-center pt-8 gap-2">
        <button className="btn bg-[#D2D2D2] text-white text-xl rounded-lg hover:bg-gray-300"><img src={img4} alt="" /> Google Play</button>
        <button className="btn bg-[#D2D2D2] text-white text-xl rounded-lg hover:bg-gray-300"><img src={img5} alt="" /> App Store</button>
      </div>
      <div className="w-6/12 mx-auto pt-8">
        <img src={hero} alt="" />
      </div>
      
      
</div>
<div className="bg-[#632EE3]">
        <h1 className="text-3xl text-white font-bold py-8 text-center">Trusted by Millions, Built for You</h1>
        <div className="flex justify-between w-6/12 mx-auto text-white text-center pb-12">
            <div className="flex justify-center items-center gap-2">
                <div>
                  <p>Total Downloads</p>
                <h1 className="text-4xl font-bold py-1 ">29.6M</h1>
                <p>21% more than last month</p>
                </div>
                <div>
                  <img src={img6} alt="" className="w-10 h-10" />
                </div>
                
            </div>
            
            <div className="flex justify-center items-center gap-1">
                <div>
                  <p>Total Reviews</p>
                <h1  className="text-4xl font-bold py-1" >906K</h1>
                <p>46% more than last month</p>
                </div>
                <div>
                  <img src={img7} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center gap-1">
                <div>
                  <p>Active Apps</p>
                <h1  className="text-4xl font-bold py-1">132+</h1>
                <p>31 more will Launch</p>
                </div>
                <div>
                  <img src={img8} alt="" />
                </div>
            </div>
        </div>

      </div>

      <div className="text-center pt-12">
        <h1 className="text-4xl font-bold p-1">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-6">
        {
          homecards.map(card => (
            <HomeCard key={card.id} card={card}></HomeCard>
          ))
        }
      </div>

     <div className="w-1/12 mx-auto ">
       <Link to='/app' className="btn bg-[#632EE3] border-none text-white">Show All</Link>
     </div>
        
    </div>
   

    

  );
};

export default Home;
