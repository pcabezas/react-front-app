import { Route, Routes } from "react-router-dom"
import Login from "../components/authtentication/login"
import Home from "../components/Home"
import Product from "../components/products/Product"
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/login" element={ <Login />}></Route>
        <Route path="/products/:slug" element={ <Product />}></Route>
      </Routes>
    </>
  )
}