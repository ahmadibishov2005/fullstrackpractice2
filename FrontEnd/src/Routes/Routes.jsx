import AddPage from "../Pages/AddPage/AddPage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import UserRoot from "../Pages/UserRoot";
import WistListPage from "../Pages/WishListPage/WistListPage";



const ROUTES = [
   
    {
        path: "/",
        element: <UserRoot/>,
        children:[
            {
                path: "",
                element:<HomePage/>
            },
            {
                path: "/addpage",
                element: <AddPage/>
            },
            {
                path: "/detailpage",
                element: <DetailPage/>
            },
            {
                path: "/wishlistpage",
                element:<WistListPage/>
            }
        ]
    }
]
export default ROUTES