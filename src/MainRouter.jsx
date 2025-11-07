import {
  createBrowserRouter,

} from "react-router-dom";
import MainOutlet from "../MainOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>
  },
]);


export default router