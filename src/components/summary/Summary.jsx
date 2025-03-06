import React from "react";
import reaction from "../../assets/flash.png";
import brain from "../../assets/brain.png";
import chat from "../../assets/chat.png";
import visual from "../../assets/eye.png";
import "./summary.css";

const Summary = (
  
) => {
  return (
    <div className="sum">
      <h3>Summary</h3>
      <div className="sum-for">
        <div className="mokosok">
          <div className="img-tuf">
            <img src={reaction} alt="" />
            <span className="roko">Reaction</span>
          </div>
          <div className="erti-first">
            <p className="erti">80</p>
            <p className="second2">/ 100</p>
          </div>
        </div>
        <div className="formem">
          <div className="img-tuf">
            <img src={brain} alt="" />
            <span className="roko-first">Memory</span>
          </div>
          <div className="erti-first">
            <p className="erti">80</p>
            <p className="second2">/ 100</p>
          </div>
        </div>
        <div className="forver">
          <div className="img-tuf">
            <img src={chat} alt="" />
            <span className="roko-second">Verbal</span>
          </div>
          <div className="erti-first">
            <p className="erti">80</p>
            <p className="second2">/ 100</p>
          </div>
        </div>
        <div className="forvis">
          <div className="img-tuf">
            <img src={visual} alt="" />
            <span className="roko-third">Visual</span>
          </div>

          <div className="erti-first">
            <p className="erti">80</p>
            <p className="second2">/ 100</p>
          </div>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
