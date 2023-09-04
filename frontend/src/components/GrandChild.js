import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./Parent";

function GrandChild() {
  const [signin, setsignin] = useContext(UserContext);
  // const signin = useContext(UserContext);
  // useEffect(() => {
  //   console.log(signin);
  // }, []);
  return (
    <div>
      <h2>Garnd cilde</h2>
      <button onClick={() => setsignin(!signin)}>
        {signin ? "Signout" : "Signin"}
      </button>
    </div>
  );
}

export default GrandChild;
