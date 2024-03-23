import { createBrowserRouter } from "react-router-dom";
import PageTop from "./PageTop";
import PageMovie from "./PageMovie";
import PageTV from "./PageTV";
import Page2024 from "./Page2024";

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
    path: "/2024",
    element: <Page2024 />,
  },
]);
