import React, { useState } from "react";
import Child from "./Child";
export const UserContext = React.createContext();

function Parent() {
  const [signin, setsignin] = useState(true);
  return (
    <UserContext.Provider value={[signin, setsignin]}>
      <div>
        Parent
        <Child />
        <h2>{signin ? "Sign out" : "Sign in"}</h2>
      </div>
    </UserContext.Provider>
  );
}

export default Parent;
