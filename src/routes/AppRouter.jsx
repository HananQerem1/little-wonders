import { createBrowserRouter } from "react-router";
import MainLayout from "./../layouts/MainLayout.jsx";
import AuthLayout from "./../layouts/AuthLayout.jsx";
import Home from "./../pages/Home.jsx";
import Toys from "./../features/toys/pages/Toys.jsx";
import ToyDetails from "./../features/toyDetails/pages/ToyDetails.jsx";
import Offers from "./../features/offers/pages/Offers.jsx";
import Contact from "./../pages/Contact.jsx";
import Wishlist from "./../features/wishlist/pages/Wishlist.jsx";
import Cart from "./../features/cart/pages/Cart.jsx";
import Checkout from "./../features/checkout/pages/Checkout.jsx";
import OrderConfirmation from "./../features/orderConfirmation/pages/OrderConfirmation.jsx";
import OrderStatus from "./../features/orderStatus/pages/OrderStatus.jsx";
import Profile from "./../features/profile/pages/Profile.jsx";

import CreateAccount from "./../features/auth/pages/CreateAccount.jsx";
import Login from "./../features/auth/pages/Login.jsx";
import Register from "./../features/auth/pages/Register.jsx";
import ForgotPassword from "./../features/auth/pages/ForgotPassword.jsx";
import ResetPassword from "./../features/auth/pages/ResetPassword.jsx";
import Unauthorized from "./../pages/Unauthorized.jsx";



const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/toys',
                element: <Toys />
            },
            {
                path: '/toy-details',
                element: <ToyDetails />
            },
            {
                path:'/offers',
                element: <Offers />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/wishlist',
                element: <Wishlist />
            },
            {
                path:'/cart',
                element: <Cart />
            },
            {
               path:'/checkout',
               element: <Checkout /> 
            },
            {
                path:'order-confirmation',
                element: <OrderConfirmation />
            },
            {
                path:'/order-status',
                element: <OrderStatus />
            },
            {
                path:'/profile',
                element: <Profile />
            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/create-account',
                element: <CreateAccount />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path:'/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />
            },
            {
                path: '/unauthorized',
                element: <Unauthorized />
            }
        ]
    }
]);

export default AppRouter;