import React, { Fragment } from 'react'
import Home from "./Container/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearcheResult from "./Container/SearcheResult"
import FoodDetail from "./Container/FoodDetail"
import Login from "./Logins/Login"
import SIgnup from "./Logins/SIgnup"
import Dashboard from "./Dashboard/Dashboard"
function App() {
  return (
    <Fragment>
     <Routes>
          <Route path="/" exact element={<Home />} />
            <Route exact path="/search-result" element={<SearcheResult />} />
            <Route exact path="/food-detail/:id" element={<FoodDetail />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<SIgnup />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Fragment>
  )
}

export default App