import React from "react";
import bg from "../../images/hotel-bg.jpg";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh] "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to our luxurious hotel
            </h1>
            <p className="mb-5">
              where elegance and comfort come together to create an
              unforgettable experience. With breathtaking views, top-of-the-line
              amenities, and impeccable service
            </p>
          </div>
        </div>
      </div>
      <div>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Home;
