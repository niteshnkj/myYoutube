import React from "react";
import Button from "./Button";
const list = [
  "all",
  "Live",
  "Gaming",
  "Cricket",
  "Soccer",
  "Food",
  "Film ",
  "Animation",
  "Vehicles",
  "Music",
  "Sports",
  "Travel",
  "Events",
  "Gaming",
  "Comedy",
  "People ",
];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto">
      <div className="flex">
        {list.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
    </div>
  );
};
// "Blogs",
//   "Entertainment",
//   "News",
//   "Politics",
//   "Education",
//   "Science ",
//   "Technology",
//   "Nonprofits",
//   "Activism",
export default ButtonList;
