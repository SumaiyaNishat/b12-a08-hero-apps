import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useCards from "../hooks/useCards";
import icon1 from "../assets/icon-downloads.png";
import icon2 from "../assets/icon-ratings.png";
import icon3 from "../assets/icon-review.png";
import { updateData } from "../utils/localStorage";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { cards, loading } = useCards();
  const [installed, setInstalled] = useState(false);
  const card = cards.find((card) => String(card.id) === id);
  if (loading) return <p>Loading</p>;
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = card || {};

  return (
    <div className="bg-[#D2D2D2]">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-10 pt-15 border-b border-gray-500 pb-5 ">
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
              onClick={() => {updateData(card); 
                setInstalled(true); 
                toast.success(`Yahoo!! ${title} Installed Successfully!`); 
              }}
              disabled={installed}
              className={`text-lg w-40 hover:cursor-pointer ${
                installed
                  ? "bg-[#00D390] text-white "
                  : "bg-[#00D390] text-white hover:cursor-pointer hover:bg-green-300 w-60"
              }`}
            >
              {installed ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold mb-2">Ratings</h3>
          <div className="bg-base-100 border rounded-lg p-4 h-90">
            <ResponsiveContainer>
              <BarChart
                layout="vertical"
                data={ratings}
                margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" reversed />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="orange"
                  activeBar={<Rectangle fill="gold" stroke="blue" />}
                  barSize={40}
                  radius={[5, 5, 5, 5]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppDetails;
