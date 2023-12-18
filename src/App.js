import React from "react";
import { Routes,redirect ,Router,Route, createRoutesFromChildren, createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Component/Pages/Login";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HeaderSite from "./Component/UI/HeaderSite";


const routeDefinitions = createRoutesFromChildren(
  <Route>
    <Route path="/" element={<HeaderSite/>} children={[
      <Route path="login" element={<Login/>}/>
    ]}></Route>
  </Route>
)

const router = createBrowserRouter(routeDefinitions)
function App() {
  return (
    <React.Fragment>
     <RouterProvider router={router}/>
     <Login/>

   </React.Fragment>
  );
}
export default App;
