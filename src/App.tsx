import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/RouterNebsite";

function App() {
  return (
    <main className="flex flex-col items-center p-8 md:p-12 bg-netflix min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
