import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Booking = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-[80vh] flex items-center">
      <div className="mx-auto container text-center">
        <p className="text-2xl text-indigo-600">
          Welcome {user?.displayName || user?.email}
        </p>
        <p className="text-red-500 text-lg">Booking is closed for now</p>
      </div>
    </div>
  );
};

export default Booking;
