import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useCards from "../hooks/useCards";
import icon1 from "../assets/icon-downloads.png";
import icon2 from "../assets/icon-ratings.png";
import icon3 from "../assets/icon-review.png";
import { isInstalled, updateData } from "../utils/localStorage";
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
import { CircleAlert } from "lucide-react";

const AppDetails = () => {
  const { id } = useParams();
  const { cards, loading } = useCards();
  const [installed, setInstalled] = useState(false);
  const card = cards.find((card) => String(card.id) === id);
  useEffect(() => {
    if (card) setInstalled(isInstalled(card.id));
  }, [card]);
  if (loading) return <p>Loading</p>;

  if (!card) {
    return (
      <div className="bg-[#D2D2D2] min-h-[80vh] flex flex-col justify-center items-center text-center">
        <CircleAlert className="w-20 h-20 pb-5"></CircleAlert>
        <h1 className="text-5xl font-bold text-gray-700 mb-4">
          App Not Found{" "}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          The app you’re looking for doesn’t exist or has been removed.
        </p>
        <Link
          to="/"
          className="bg-[#632EE3] text-white px-6 py-3 rounded-lg hover:bg-[#4f22b5] transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = card || {};

  return (
    <div className="bg-[#D2D2D2]">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-6 border-b border-gray-500 pb-5 ">
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
            <h1 className="text-2xl font-semibold py-1">{title}</h1>
            <p className="border-b border-gray-400 pb-5 text-[#627382]">
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-5">
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
              onClick={() => {
                updateData(card);
                setInstalled(true);
                toast.success(`Yahoo!! ${title} Installed Successfully!`);
              }}
              disabled={installed}
              className={`text-lg py-3 rounded-lg w-full md:w-60 ${
                installed
                  ? "bg-[#00D390] text-white cursor-pointer "
                  : "bg-[#00D390] text-white hover:bg-green-300"
              }`}
            >
              {installed ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>

        <div className="border-b border-gray-400 pb-5">
          <h3 className="text-2xl font-bold mb-2 pt-10 pb-1">Ratings</h3>
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
        <h3 className="text-2xl font-bold mb-2 pt-10 pb-1">Description</h3>
        <p className="pb-10 text-[#627382]">{description}</p>
      </div>
    </div>
  );
};
export default AppDetails;
