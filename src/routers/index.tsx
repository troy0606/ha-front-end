import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Pofile from '../features/hero/profile';
import List from '../features/hero/list';

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
            element: <Pofile/>
          }
        ]
      }
    ]
  }
]);

export default <RouterProvider router={router} />
