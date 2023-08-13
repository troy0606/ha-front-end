import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import {List, Profile} from '@hero_feature/pages';
import {Practice1} from '@fp_feature/pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: 'heroes',
        element: <List/>,
        children: [
          {
            path: ':id',
            element: <Profile/>
          }
        ]
      },
      {
        path: 'fp',
        element: <Practice1/>,
      }
    ]
  }
]);

export default <RouterProvider router={router} />
