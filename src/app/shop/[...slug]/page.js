import React from "react";
const page = ({ params }) => {
  return (
    <div className="w-[100%] text-center my-[200px]">
      <h1 className="my-10">This is the page coming via dynamic routes</h1>
      <h3 className="mb-10">This is the eample of Multi dynamic segmanets</h3>
      <p>
        The slug Passed is :{" "}
        <span className=" text-red-300">
          1.{params.slug[0]} 2.{params.slug[1]} and goes on....
        </span>
      </p>
    </div>
  );
};

export default page;
