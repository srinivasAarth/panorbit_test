import { Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Accounts from "./pages/Accounts";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import Gallary from "./pages/Gallary";
import Todo from "./pages/Todo";
import ModelLayout from "./layouts/ModelLayout";
import Text from "./libs/typo/Typography";
// latest tree based route, this kind of routing is easy to maintain to add or remove further screens in future
const routes = [
  {
    path: "/",
    element: <Navigate to="accounts" />, // redirect from index to accounts
  },
  {
    path: "accounts",
    element: <Accounts />,
  },
  {
    path: "details",
    element: <RootLayout />, // higher order component this involves in every page in web application
    children: [
      {
        path: "",
        element: <Navigate to="profile" />, // redirect when user type details manually on the url
      },
      {
        path: "profile/:uid", // dynamic searchURLparmas with react-router-dom
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
      // absolute app level content component
      <ModelLayout>
        <Text variant="h6" text="404 Not Found" />
      </ModelLayout>
    ),
  },
];

export default routes;
