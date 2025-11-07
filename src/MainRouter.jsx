import {
  createBrowserRouter,

} from "react-router-dom";
import MainOutlet from "../MainOutlet";
import HomePage from "./HomePage/HomePage";
import Login from "./AuthenticationParts/Login";
import SignUp from "./AuthenticationParts/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    errorElement:<h3>There is no page</h3>,
    children:[
      {
        path:"/",
        element: <HomePage></HomePage>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/signup",
        element: <SignUp></SignUp>
      },

    ]
  },
]);


export default router