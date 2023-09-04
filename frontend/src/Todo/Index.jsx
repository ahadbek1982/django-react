import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Read from "./Read";
import Edit from "./Edit";

import UserPage from "./UserPage";
import AddTask from "./AddTask";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="read/:id" element={<Read />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="userpage/" element={<UserPage />} />
        <Route path="userpage/addtask" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
