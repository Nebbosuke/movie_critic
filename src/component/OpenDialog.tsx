"use client";
import Info from "./Info";
import Trailer from "./Trailer";
import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { SelectChangeEvent } from "@mui/material/Select";
import useWindowSize from "./useWindowsSize";

type movieProps = {
  image: string;
  title: string;
  year: string;
  director: string;
  star: string;
  src: string;
  rate?: number;
};

const MovieInfo: React.FC<movieProps> = ({
  image,
  title,
  year,
  director,
  star,
  src,
  rate,
}) => {
  const [open, setOpen] = React.useState(false);
  // const [fullWidth, setFullWidth] = React.useState(true);
  // const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
  //   setMaxWidth(
  //     // @ts-expect-error autofill of arbitrary value is not handled.
  //     event.target.value
  //   );
  // };

  // const handleFullWidthChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setFullWidth(event.target.checked);
  // };
  return (
    <>
      <React.Fragment>
        <span className="m-2">
          <button
            className=" text-blue-600 hover:text-black pr-1"
            onClick={handleClickOpen}
          >
            {useWindowSize() === "s" && (
              <div className="my-2">
                <img src={image} alt="" width={70}></img>
              </div>
            )}
            {useWindowSize() === "m" && (
              <div className="my-2">
                <img src={image} alt="" width={160}></img>
              </div>
            )}
            {useWindowSize() === "l" && (
              <div className="my-2">
                <img
                  src={image}
                  alt=""
                  width={250}
                  className="hover:scale-110"
                ></img>
              </div>
            )}
          </button>
        </span>
        <Dialog maxWidth="lg" open={open} onClose={handleClose}>
          <DialogContent sx={{ backgroundColor: "#101010" }}>
            <main className="flex flex-col items-center pt-8 px-8 pb-64 md:pt-12 md:px-12 md:pb-64 bg-netflix min-h-screen">
              <div className="flex sm:flex-row flex-col sm:gap-16 gap-8 mb-4 sm:mb-16">
                <div className="flex flex-col items-center">
                  <img src={image} alt="" width={800}></img>
                  {/* <Image
            src={image as unknown as StaticImageData}
            alt={""}
            height={700}
            width={700}
          ></Image> */}
                </div>
                <div className="w-full sm:w-2/3">
                  <Info
                    title={title}
                    year={year}
                    director={director}
                    star={star}
                    src={src}
                    rate={rate}
                  />
                </div>
              </div>
              <Trailer src={src} />
            </main>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "#101010" }}>
            <button onClick={handleClose}>
              <div className="text-red-600 font-bold">Close</div>
            </button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default MovieInfo;
