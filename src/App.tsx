import React from "react";
import "./App.css";
import ResponsiveDrawer from "./component/ResponsiveDrawer";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/RouterNebsite";

function App() {
  return (
    <main className="flex flex-col items-center p-8 md:p-12 bg-netflix min-h-screen">
      {/* <ResponsiveDrawer /> */}
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
