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
import CheckoutOptions from "../features/auth/pages/CheckoutOptions.jsx";
import OrderConfirmation from "./../features/orderConfirmation/pages/OrderConfirmation.jsx";
import OrderStatus from "./../features/orderStatus/pages/OrderStatus.jsx";
import Profile from "./../features/profile/pages/Profile.jsx";

import CreateAccount from "./../features/auth/pages/CreateAccount.jsx";
import Login from "./../features/auth/pages/Login.jsx";
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
                path: '/checkout/auth/create-account',
                element: <CreateAccount />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/checkout/auth/login',
                element: <Login />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />
            },
            {
                path: '/unauthorized',
                element: <Unauthorized />
            },
            {
               path:'/checkout/auth',
               element: <CheckoutOptions /> 
            }
        ]
    }
]);

export default AppRouter;