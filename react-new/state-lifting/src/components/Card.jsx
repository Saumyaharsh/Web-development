import React from "react";

const cards = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          props.setName(e.target.value);
        }}
      />
    </div>
  );
};

export default cards;
