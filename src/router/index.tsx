import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "~/layouts/AdminLayout";
import DefaultLayout from "~/layouts/DefaultLayout";
import Home from "~/page/Home";
import Login from "~/page/Login";
import Profile from "~/page/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
]);

export default router;
