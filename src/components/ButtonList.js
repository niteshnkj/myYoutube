import React from "react";
import Button from "./Button";
const list = [
  "All",
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
];
const ButtonList = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="flex">
        {list.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
    </div>
  );
};
// "Events",
// "Gaming",
// "Comedy",
// "People ",
// "Blogs",
// "Entertainment",
// "News",
// "Politics",
// "Education",
// "Science ",
// "Technology",
// "Nonprofits",
// "Activism",
export default ButtonList;
