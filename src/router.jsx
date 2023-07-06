import { Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Accounts from "./pages/Accounts";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import Gallary from "./pages/Gallary";
import Todo from "./pages/Todo";
import ModelLayout from "./layouts/ModelLayout";
import Text from "./libs/Typo/Typography";

const routes = [
  {
    path: "/",
    element: <Accounts />,
  },
  {
    path: "details",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="profile" />,
      },
      {
        path: "profile/:uid",
        element: <Profile />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "gallary",
        element: <Gallary />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <ModelLayout>
        <Text variant="h6" text="404 Not Found" />
      </ModelLayout>
    ),
  },
];

export default routes;
