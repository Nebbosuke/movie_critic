"use client";
import React from "react";
import Star from "./Star";
import logos from "../db/logo.json";

type InfoProps = {
  title: string;
  year: string;
  director: string;
  star: string;
  src: string;
  rate?: number;
  sum?: string;
  overview?: string;
  co?: string[];
};

const Info: React.FC<InfoProps> = ({
  title,
  year,
  director,
  star,
  src,
  rate,
  sum,
  overview,
  co,
}) => {
  var jp = require("jsonpath");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-0.5 sm:gap-2  items-start">
        <div className="text-sm sm:text-2xl text-gray-100">({year})</div>
        <div className="text-xl sm:text-5xl text-gray-100 sm:pb-2 w-full text-left border-b-4 sm:border-b-8 font-bold border-red-600">
          {title}
        </div>
        {rate && (
          <div className="mt-1">
            <Star rate={rate} />
          </div>
        )}
        {sum && (
          <span className="text-sm sm:text-xl text-gray-500 font-serif">
            {sum}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-4 sm:gap-8">
        <div className="">
          <div className="flex flex-row items-center gap-1 text-lg sm:text-2xl text-red-600 ">
            監督
          </div>
          <div className="text-base sm:text-xl text-gray-100">{director}</div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-1 text-lg sm:text-2xl text-red-600">
            出演
          </div>
          <div className="text-base sm:text-xl text-gray-100">{star}</div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-1 text-lg sm:text-2xl text-red-600">
            概要
          </div>
          <p className="text-base sm:text-xl text-gray-100">{overview}</p>
        </div>
        <div className="flex flex-row gap-5 sm:gap-10 items-center sm:justify-start justify-center mt-5">
          {co &&
            co.map((c, index) => (
              <div key={index}>
                {Object.keys(logos).map((logo, index) => (
                  <span key={index} className="">
                    {c === logo && (
                      <img
                        src={jp.query(logos, `$.${logo}`)}
                        alt=""
                        width={100}
                      ></img>
                    )}
                  </span>
                ))}
              </div>
            ))}
        </div>
        <div className="pt-6">
          {/* <div className="flex flex-row items-center gap-1 text-lg sm:text-2xl text-yellow-100 border-b-2 border-yellow-100">
            Trailer
            <PlayCircleIcon />
          </div> */}
          {/* <div className="flex flex-col pt-3 w-full items-center">
            {useWindowSize() === "l" && (
              <iframe
                width="1024"
                height="576"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
            {useWindowSize() === "m" && (
              <iframe
                width="640"
                height="360"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
            {useWindowSize() === "s" && (
              <iframe
                width="320"
                height="180"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Info;
