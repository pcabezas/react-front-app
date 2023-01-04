import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import Login from "../components/authtentication/login"
import Home from "../components/Home"

export const AppRouter = () => {
  // const user = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/login" element={ <Login />}></Route>
      </Routes>
    </>
  )
}