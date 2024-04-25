import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import MovieInfo from "./MovieInfo";
import useWindowSize from "./useWindowsSize";

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
    <span className="m-3">
      <button
        className=" text-blue-600 hover:text-black pr-1"
        onClick={handleClickOpen}
      >
        {useWindowSize() === "s" && (
          <div className="my-3">
            <img src={image} alt="" width={110}></img>
          </div>
        )}
        {useWindowSize() === "m" && (
          <div className="my-3">
            <img src={image} alt="" width={160}></img>
          </div>
        )}
        {useWindowSize() === "l" && (
          <div className="my-3">
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
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "sticky" }} color="error">
          <Toolbar>
            <div className="flex flex-row justify-center w-full items-center text-netflix">
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div className="bg-netflix">
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
