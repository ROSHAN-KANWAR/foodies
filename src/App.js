import React, { Fragment } from 'react'
import Home from "./Container/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearcheResult from "./Container/SearcheResult"
import FoodDetail from "./Container/FoodDetail"
function App() {
  return (
    <Fragment>
     <Routes>
          <Route path="/" exact element={<Home />} />
            <Route exact path="/search-result" element={<SearcheResult />} />
            <Route exact path="/food-detail/:id" element={<FoodDetail />} />
      </Routes>
    </Fragment>
  )
}

export default App