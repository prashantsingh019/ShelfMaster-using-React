import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  function handleChange(e) {
    console.log(e.target.value.toLowerCase());
  }
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <div className="flex items-center justify-between">
          <h1 className="py-2 text-2xl ml-1">Welcome Dear User</h1>

          {/* <div className="search-box pr-4">
            <input
              type="search"
              name=""
              id="searchBar"
              className="bg-gray-100 mr-2 p-1 rounded-md border-gray-400 border-2 outline-none"
            />
            <button
              className="bg-gray-500 p-1 rounded-md text-white"
              onClick={handleChange}
            >
              Search
            </button>
          </div> */}
        </div>
        <div className="appBody flex justify-between">
          <SideBar />

          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default App;
