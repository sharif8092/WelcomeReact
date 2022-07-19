import React from "react";
const Welcome = (props) => {
  return (
    <>
      <div>
        <h1>hey {props.name}</h1>
        <h2>Welcome to Newton School.</h2>
      </div>
    </>
  );
};
export default Welcome;
