import Buyer from "./pages/buyer";
import Sales from "./pages/sales";
import Info from "./pages/info";
import{BUYER_ROUTE, SALES_ROUTE, INFO_ROUTE} from "./utils/consts";
export const routess = [
    {    
        path: BUYER_ROUTE,
        Component: Buyer
    },
    {
        path: SALES_ROUTE,
        Component: Sales
    },
    {
        path: INFO_ROUTE,
        Component: Info
    }
]