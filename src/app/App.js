import React from "react";
// import logo from '../logo.svg';
// import { Counter } from '../features/counter/Counter';
import { Card } from "../common/Card/Card";
import { Introduction } from "../common/Introduction/Introduction";
import { Device } from "../common/Device/Device";
import { Inventory } from "../common/Inventory/Inventory";
import { Room } from "../common/Room/Room";
import { MainStyle, HeaderStyle } from "./AppStyle.js";

function App() {
  return (
    <>
      {/* <div className="App"> */}

      <HeaderStyle className="App-header">
        <h1>Sherlock Unlock</h1>
      </HeaderStyle>
      <MainStyle>
        <Introduction />
        {/* <div className="game-zone"> */}
        <div className="room-device">
        <Room />
        
          <Device />
          </div>
          {/* </div> */}
          <Inventory />
      
      </MainStyle>
      {/* </div>  */}
    </>
  );
}

export default App;
