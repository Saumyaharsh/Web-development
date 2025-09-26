import React from "react";

const Childcomponent = React.memo(({ countvalue, handleClick }) => {
  return (
    <>
      {console.log("Child component re-render ho raha h")}

      <button style={{ width: "40px", height: "40px" }} onClick={handleClick}>
        {countvalue}
      </button>
    </>
  );
});

export default Childcomponent;
