import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-widgets/styles.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import Hook_in_object from "./components/Hook_in_object";
import UseStateInArray from "./components/UseStateInArray";
import UseEffect from "./components/UseEffect";
import ConditionRunEffect from "./components/ConditionRunEffect";
import IntervalHookCounter from "./components/IntervalHookCounter";
import FerchData from "./components/FerchData";
import FetchData_ID from "./components/FetchData_ID";
import FetchData_Button from "./components/FetchData_Button";
import Test from "./components/Test";
import ComponentC from "./components/ComponentC";
import ComponentF from "./components/ComponentF";
import UseContext from "./components/UseContext";
import ComponentE from "./components/ComponentE";
import UseReduce from "./components/UseReduce";
import UseReduce2 from "./components/UseReduce2";

import Index from "./Todo/Index";
import DynamicTable from "./components/DynamicTable";
import Parent from "./components/Parent";
import Header from "./Todo/Header";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>       */}
      {/* <HookCounter/> */}
      {/* <HookCounter2/> */}
      {/* <Hook_in_object/> */}
      {/* <UseStateInArray/> */}
      {/* <UseEffect/> */}
      {/* <ConditionRunEffect/> */}
      {/* <IntervalHookCounter/> */}
      {/* <FerchData/> */}
      {/* <FetchData_ID/> */}
      {/* <FetchData_Button/> */}
      {/* <Test/> */}
      {/* <UserContext.Provider value={'Ahadbek'}> 
      <ChannelContext.Provider value={'Qodirov'}>
        <ComponentE/>
      </ChannelContext.Provider>
    </UserContext.Provider> */}
      {/* <UseContext/> */}
      {/* <UseReduce/> */}
      {/* <First/> */}
      {/* <UseReduce2/> */}

      <Index />

      {/* <DynamicTable/> */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;
