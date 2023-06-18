import {createBrowserRouter,Navigate,RouterProvider} from "react-router-dom"

import './App.css';
import { ArchivePage } from "./pages/ArchivePage";
import { ListingPage } from "./pages/ListingPage";



function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Navigate to="/listing"/> },
    {path:'/listing',element:<ListingPage/>},
    {path:'/archive',element:<ArchivePage/>},
  ])

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
