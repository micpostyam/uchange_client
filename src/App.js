import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Motherbase from './pages/Motherbase';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "motherbase",
      element: <Motherbase />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
