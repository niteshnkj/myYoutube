import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return or we can put ternary operator
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
