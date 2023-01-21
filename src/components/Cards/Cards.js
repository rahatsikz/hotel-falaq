import React from "react";
import single from "../../images/single-bed.jpg";
import couple from "../../images/couple-bed.jpg";
import king from "../../images/king-bed.jpg";
import { FaBed, FaUserFriends, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-3 gap-16 my-12 ">
      {/* 1 */}
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={single} alt="bed" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Single Beds</h2>
          <p>
            Experience a comfortable night's sleep in one of our cozy single
            beds. Perfect for solo travelers or children
          </p>
          <div className="flex items-center justify-between">
            <div className="flex">
              <span className="flex items-center text-xl text-slate-500">
                <FaBed /> <span className="pl-2 pr-4">1</span>
              </span>
              <span className="flex items-center text-xl text-slate-500">
                <FaUserFriends /> <span className="pl-2 pr-4">1</span>
              </span>
              <span className="flex items-center text-xl text-slate-500">
                <FaDollarSign /> <span className="pr-4">31</span>
              </span>
            </div>
            <div className="card-actions justify-end">
              <Link to="/booking">
                <button className="btn btn-primary cursor-pointer">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={couple} alt="bed" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Couple Beds
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>
            Unwind in the comfort of our luxurious double beds, perfect for
            couples. Book your stay now
          </p>
          <div className="flex items-center justify-between">
            <div className="flex">
              <span className="flex items-center text-xl text-slate-500">
                <FaBed /> <span className="pl-2 pr-4">1</span>
              </span>
              <span className="flex items-center text-xl text-slate-500">
                <FaUserFriends /> <span className="pl-2 pr-4">2</span>
              </span>
              <span className="flex items-center text-xl text-slate-500">
                <FaDollarSign /> <span className="pr-4">71</span>
              </span>
            </div>
            <div className="card-actions justify-end">
              <Link to="/booking">
                <button className="btn btn-primary cursor-pointer">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={king} alt="bed" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">King Beds</h2>
          <p>
            Indulge in the ultimate luxury of our spacious King beds. Perfect
            for couples or families
          </p>
          <div className="flex items-center justify-between">
            <div className="flex">
              <span className="flex items-center text-xl text-slate-500">
                <FaBed /> <span className="pl-2 pr-4">2</span>
              </span>
              <span className="flex items-center text-xl text-slate-500">
                <FaUserFriends /> <span className="pl-2 pr-4">4</span>
              </span>
              <span className="flex items-center text-xl text-slate-500">
                <FaDollarSign /> <span className="pr-4">101</span>
              </span>
            </div>
            <div className="card-actions justify-end">
              <Link to="/booking">
                <button className="btn btn-primary cursor-pointer">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
