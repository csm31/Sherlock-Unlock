import Sherlock from "../../resources/Sherlock.jpg";
import { introduction } from "../constants";
import { IntroductionStyle } from "./IntroductionStyle";

export const Introduction = () => {
  return (
    <IntroductionStyle className="introduction">
      <img src={Sherlock} alt="Sherlock Holmes smoking" />
      <div>
        <p>
          Sherlock Holmes must decide who will be his next assistant.
          <br />
          Since you applied for the job, you will do the final test prepared by
          him. He locked you in his office. You need to get out!
        </p>
        <p>
          In the room several elements are visible. Click on a number to reveal
          a new card in your inventory.
          <br />
          You will need to combine cards, solve enigmas and enter codes.
        </p>
        <p> Good luck!</p>
      </div>
    </IntroductionStyle>
  );
};
