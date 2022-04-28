import React from "react";
import { Introduction } from "../common/Introduction/Introduction";
import { Inventory } from "../common/Inventory/Inventory";
import { Room } from "../common/Room/Room";
import { MainStyle, HeaderStyle } from "./AppStyle.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderStyle className="App-header">
        <h1>Sherlock Unlock</h1>
      </HeaderStyle>
      <MainStyle>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route
            path="game"
            element={
              <>
                <Room />
                <Inventory />
              </>
            }
          />
          {/* Match only when no other routes do */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainStyle>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </>
  );
};

export default App;
