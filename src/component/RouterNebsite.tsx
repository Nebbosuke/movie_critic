import { createBrowserRouter } from "react-router-dom";
import PageTop from "./PageTop";
import PageMovie from "./PageMovie";
import PageTV from "./PageTV";
import Page2024 from "../diaryPages/Page2024";
import PageWL from "../diaryPages/PageWL";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTop />,
  },
  {
    path: "/movie",
    element: <PageMovie />,
  },
  {
    path: "/tvshow",
    element: <PageTV />,
  },
  {
    path: "/watchlist",
    element: <PageWL />,
  },
  {
    path: "/2024",
    element: <Page2024 />,
  },
]);
