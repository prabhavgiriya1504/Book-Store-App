import React from "react";
import list from "../../src/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500 font-semibold"> Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            cumque laudantium pariatur esse, inventore placeat ullam nihil enim
            cupiditate, debitis libero eveniet perspiciatis quos quasi vero
            eligendi minus labore adipisci.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white mt-6 px-3 py-1 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 px-8 grid grid-cols-1 md:grid-cols-3  ">
          {list.map((item) => (
            <Cards key={item.id} item={item} className="" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
