import {React, lazy} from "react"
import { BrowserRouter } from "react-router-dom";

//lazy loading to improve performance
const Navbar = lazy(() => import("./components/Navbar"));
const PageRoutes = lazy(() => import("./components/PageRoutes"));

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PageRoutes />
      </BrowserRouter>
    </div>
  )
}