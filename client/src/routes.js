import Buyer from "./pages/buyer";
import Sales from "./pages/sales";
import{BUYER_ROUTE, SALES_ROUTE} from "./utils/consts";
export const routess = [
    {    
        path: BUYER_ROUTE,
        Component: Buyer
    },
    {
        path: SALES_ROUTE,
        Component: Sales
    },
]