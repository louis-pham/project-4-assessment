import React from 'react';

import "./CircleSelector.css";
import getConditionalString from "../../util/util";

function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button
        className={getConditionalString(props.selected, 0, "selected")}
        onClick={() => props.handleClick(0)}
      >
        {getConditionalString(
          props.selected, 0,
          "Circle 1 Selected", "Select Circle 1"
        )}
      </button>
      <button
        className={getConditionalString(props.selected, 1, "selected")}
        onClick={() => props.handleClick(1)}
      >
        {getConditionalString(
          props.selected, 1,
          "Circle 2 Selected", "Select Circle 2"
        )}
      </button>
      <button
        className={getConditionalString(props.selected, 2, "selected")}
        onClick={() => props.handleClick(2)}
      >
        {getConditionalString(
          props.selected, 2,
          "Circle 3 Selected", "Select Circle 3"
        )}
      </button>
      <button
        className={getConditionalString(props.selected, 3, "selected")}
        onClick={() => props.handleClick(3)}
      >
        {getConditionalString(
          props.selected, 3,
          "Circle 4 Selected", "Select Circle 4"
        )}
      </button>
    </div>
  );
}

export default CircleSelector;
