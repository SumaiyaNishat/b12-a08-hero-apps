import React from "react";
import icon1 from "../../assets/icon-downloads.png";
import icon2 from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const HomeCard = ({ card }) => {
  const { id, image, title, downloads, ratingAvg } = card;
  return (
    <div className="w-11/12 mx-auto">
      <div className="card bg-base-100 border-white w-full h-[435px] mb-5 shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="overflow-hidden">
          <Link to={`/app/${id}`}>
            <img
              src={image}
              alt=""
              className="w-full object-cover justify-center items-center p-10"
            />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title pt-1">{title}</h2>

          <div className="card-actions justify-between">
            <button className="btn text-[#00D390] ">
              <img src={icon1} alt="" className="w-4" />
              {downloads}M
            </button>
            <button className="btn text-[#FF8811] ">
              <img src={icon2} alt="" className="w-4" /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
