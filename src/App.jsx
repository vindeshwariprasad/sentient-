
import Home from "./componets/Home"
import React from 'react'
import Apply from "./componets/Apply"
import Details from "./componets/Details"
import Success from "./componets/Success"
import Category from "./componets/Category"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./componets/Login"
import Register from "./componets/Register"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/apply/:id" element={<Apply></Apply>} />
          <Route path="/details/:id" element={<Details></Details>} />
          <Route path="/success/:id" element={<Success></Success>} />
          <Route path="/:category" element={<Category></Category>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
