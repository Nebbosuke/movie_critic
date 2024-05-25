import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import MovieInfo from "./MovieInfo";
import WindowSize from "./WindowsSize";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ShowDialogProps = {
  image: string;
  title: string;
  year: string;
  director: string;
  star: string;
  src: string;
  sum?: string;
  overview?: string;
  co?: string[];
};

const ShowDialog: React.FC<ShowDialogProps> = ({
  image,
  title,
  year,
  director,
  star,
  src,
  sum,
  overview,
  co,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span className="">
      <button
        className=" text-blue-600 hover:text-black mx-3 mb-12"
        onClick={handleClickOpen}
      >
        {WindowSize() === "s" && (
          <div className="">
            <img src={image} alt="" width={110}></img>
          </div>
        )}
        {WindowSize() === "m" && (
          <div className="">
            <img src={image} alt="" width={160}></img>
          </div>
        )}
        {WindowSize() === "l" && (
          <div className="">
            <img
              src={image}
              alt=""
              width={250}
              className="hover:scale-110"
            ></img>
          </div>
        )}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        // TransitionComponent={Transition}
        maxWidth="xl"
        scroll="body"
      >
        <div className="bg-netflix">
          <div className="flex flex-row justify-center sm:justify-end w-full items-center text-red-600 sm:pr-8">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
          <MovieInfo
            image={image}
            title={title}
            year={year}
            director={director}
            star={star}
            src={src}
            sum={sum}
            overview={overview}
            co={co}
          />
        </div>
      </Dialog>
    </span>
  );
};

export default ShowDialog;
