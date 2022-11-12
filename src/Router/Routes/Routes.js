import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home");
const { default: Login } = require("../../Pages/Login");
const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <PrivateRoute>
                <Home></Home>
            </PrivateRoute>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        
      ]
    }
  ]);

  export default router