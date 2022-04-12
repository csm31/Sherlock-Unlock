import Sherlock from "../../resources/Sherlock.jpg";
import { introduction } from "../constants";
import { IntroductionStyle } from "./IntroductionStyle";

export const Introduction = () => {
  return (
    <IntroductionStyle>
      <img src={Sherlock} alt="Sherlock Holmes smoking" />
      <div>
        <p>
          Sherlock Holmes must decide who will be his next assistant.
          <br />
          Since you applied for the job, you will do the final test prepared by
          him. He locked you in his office with a strange device.
      
          You need to get out!
        </p>
        <p>
          In the room several elements are visible. Click on a number to reveal
          a new card in your inventory.
          <br />
          The orange cards are enigmas to solve. It will lead to a code to enter
          to the device.
          <br />
          Yellow cards are cards to combine with blue cards.
        </p>
        <p> Good luck!</p>
      </div>
    </IntroductionStyle>
  );
};
