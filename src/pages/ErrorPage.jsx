import React from "react";
import { Link} from "react-router";
import useCards from "../hooks/useCards";
import imgError from "../assets/App-Error.png";

const ErrorPage = () => {
  const error = useCards();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">

      <img src={imgError} alt="" />
      <h1 className="text-5xl font-bold my-4">Oops, page not found!</h1>
     
      <p className="text-[#627382] mb-6">
       The page you are looking for is not available.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-[#632EE3] text-white rounded-lg hover:bg-[#9F62F2] transition"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
