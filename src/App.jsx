// By giving the View component to the Controller as props, the Controller is rendered to the screen.
import React from "react";
import ListController from "./pages/List/ListController";
import AddPageConroler from "./pages/Add/AddPageConroler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderView from "./components/HeaderView";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderView />
        <Routes>
          <Route path="/" element={<ListController />} />
          <Route path="/create" element={<AddPageConroler />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
