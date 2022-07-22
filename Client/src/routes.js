import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import HousePage from "./pages/HousePage";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, HOUSE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOUSE_ROUTE + '/:id',
        Component: HousePage
    }
]