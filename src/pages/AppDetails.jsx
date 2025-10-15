import React from "react";
import { Link, useParams } from "react-router";
import useCards from "../hooks/useCards";
import icon1 from "../assets/icon-downloads.png";
import icon2 from "../assets/icon-ratings.png";
import icon3 from "../assets/icon-review.png";
import { updateData } from "../utils/localStorage";

const AppDetails = () => {
  const { id } = useParams();
  const { cards, loading } = useCards();
  const card = cards.find((card) => String(card.id) === id);
  if (loading) return <p>Loading</p>;
  const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings } = card || {};

 
  return (
    <div className="bg-[#D2D2D2]">
      <div className="w-11/12 mx-auto  flex gap-10 pt-15 border-b border-gray-500 pb-5 ">
        <div className="card bg-base-100 border-white w-86 shadow-sm">
          <figure className="overflow-hidden">
            <Link to={`/app/${id}`}>
              <img
                src={image}
                alt=""
                className="w-full object-cover justify-center items-center p-10"
              />
            </Link>
          </figure>
        </div>
        <div className="w-full">
          <h1
            className="text-2xl font-semibold
        py-1"
          >
            {title}
          </h1>
          <p className="border-b border-gray-500 pb-5 text-[#627382]">
            Developed by <span className="text-[#632EE3]">{companyName}</span>
          </p>
          <div className="flex gap-10 py-5">
            <div className="">
              <img src={icon1} alt="" />
              <p>Downloads</p>
              <h2 className="text-3xl font-bold">{downloads}M</h2>
            </div>
            <div>
              <img src={icon2} alt="" />
              <p>Average Ratings</p>
              <h2 className="text-3xl font-bold">{ratingAvg}</h2>
            </div>
            <div>
              <img src={icon3} alt="" />
              <p>Total Reviews</p>
              <h2 className="text-3xl font-bold">{reviews}K</h2>
            </div>
          </div>
          <button
            onClick={() => updateData(card)}
            className="bg-[#00D390] text-lg text-white w-60 "
          >
            Install Now ({size}MB)
          </button>
        </div>
      </div>

     
    </div>
  );
};
export default AppDetails;
