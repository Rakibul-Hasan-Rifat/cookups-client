import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCartPage from "../pages/MyCartPage/MyCartPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import MainLayout from "../layouts/MainLayout/MainLayout";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import TypedFoodsPage from "../pages/TypedFoodsPage/TypedFoodsPage";
import PrivateRoute from "./PrivateRoute";

const router = new createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} errorElement={<ErrorElement />}>
            <Route
                path="/"
                element={<Home />}
                loader={() => fetch('https://cookups-server.onrender.com/foodTypes')}
            />
            <Route
                path="/myCart/:email"
                element={<PrivateRoute><MyCartPage /></PrivateRoute>}
                loader={({ params }) => fetch(`https://cookups-server.onrender.com/orderedFoods/${params.email}`)}
            />
            <Route
                path="/addProduct"
                element={<PrivateRoute><AddProduct /></PrivateRoute>}
            />
            <Route
                path="/updateFood/:id"
                element={<PrivateRoute><UpdateProduct /></PrivateRoute>}
            />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/register"
                element={<Register />}
            />
            <Route
                path="/foods/:type"
                element={<TypedFoodsPage />}
                loader={({ params }) => fetch(`https://cookups-server.onrender.com/foods/${params.type}`)}
            />
            <Route
                path="/foods/food/:id"
                element={<PrivateRoute><DetailsPage /></PrivateRoute>}
                loader={({ params }) => fetch(`https://cookups-server.onrender.com/foods/food/${params.id}`)}
            />
        </Route>
    )
)

export default router;