import React from "react";
// import logo from '../logo.svg';
// import { Counter } from '../features/counter/Counter';
// import { Card } from "../common/Card/Card";
import { Introduction } from "../common/Introduction/Introduction";
import { Device } from "../common/Device/Device";
import { Inventory } from "../features/Inventory/Inventory";
import { Room } from "../common/Room/Room";
import { MainStyle, HeaderStyle } from "./AppStyle.js";
// import { Card } from "../common/Card/Card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HeaderStyle className="App-header">
        <h1>Sherlock Unlock</h1>
      </HeaderStyle>
      <MainStyle>
        <Introduction />
        <div className="room-device">
          <Room />
          <Device />
        </div>
        <Inventory />
      </MainStyle>
      <ToastContainer autoClose={false} position="bottom-center"  />
    </>
  );
}

export default App;
