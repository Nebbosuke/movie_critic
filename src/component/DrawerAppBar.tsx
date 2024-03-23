"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import useWindowSize from "./useWindowsSize";

export default function DrawerAppBar() {
  return (
    <div className="" id="top">
      <CssBaseline />
      <div className="text-white ">
        <AppBar component="nav" sx={{ backgroundColor: "#070707" }}>
          <Toolbar>
            <div className="flex flex-row min-w-max items-start justify-start"></div>
            <div className="flex flex-row w-full items-center pl-2 sm:pl-6 text-sm sm:text-3xl text-yellow-400">
              {useWindowSize() === "l" && (
                <div className="font-bold pr-6 pt-2">
                  {/* <Image src={img} alt={""} height={300} width={300}></Image> */}
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
