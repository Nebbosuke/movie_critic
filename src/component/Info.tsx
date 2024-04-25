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
  platform?: string;
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
  platform,
}) => {
  var jp = require("jsonpath");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-0.5 sm:gap-2  items-start">
        {year === "0" && (
          <div className="text-sm sm:text-2xl text-gray-100">
            ( 公開日未定 )
          </div>
        )}
        {year === "1" && (
          <div className="text-sm sm:text-2xl text-gold">( 公開中 )</div>
        )}
        {year === "2" && (
          <div className="text-sm sm:text-2xl text-gray-100">( 配信待ち )</div>
        )}
        {year !== "0" && year !== "1" && year !== "2" && (
          <div className="text-sm sm:text-2xl text-gray-100">( {year} )</div>
        )}

        <div className="text-xl sm:text-5xl text-gray-100 sm:pb-2 w-full text-left border-b-4 sm:border-b-8 font-bold border-red-600 border-double">
          {title}
        </div>
        {platform && (
          <div className="items-center justify-center text-base sm:text-xl text-gray-100 sm:mb-2">
            {rate && (
              <div className="my-1">
                <Star rate={rate} />
              </div>
            )}
            {platform === "0" && (
              <div className="text-sky-300 flex flex-row">
                watched at<div className="text-gray-100 ml-2">Theater</div>{" "}
              </div>
            )}
            {platform === "1" && (
              <div className="text-sky-300 flex flex-row">
                watched on <div className="text-gray-100 ml-2">NETFLIX</div>
              </div>
            )}
            {platform === "2" && (
              <div className="text-sky-300 flex flex-row">
                watched on <div className="text-gray-100 ml-2">Prime Video</div>
              </div>
            )}
            {platform === "3" && (
              <div className="text-sky-300 flex flex-row">
                watched on <div className="text-gray-100 ml-2">Disney+</div>
              </div>
            )}
            {platform === "4" && (
              <div className="text-sky-300 flex flex-row">
                watched on <div className="text-gray-100 ml-2">U-NEXT</div>
              </div>
            )}
            {platform === "5" && (
              <div className="text-sky-300 flex flex-row">
                watched on <div className="text-gray-100 ml-2">Apple TV+</div>
              </div>
            )}
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
      </div>
    </div>
  );
};
export default Info;
