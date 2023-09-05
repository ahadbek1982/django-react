import axios from "axios";
import React, { useEffect, useState } from "react";

function ListUsers(props) {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/users/").then((res) => setusers(res.data));
  }, []);
  const lst = users.map((i) => i.username);
  return (
    <>
      <select
        name="javobgar"
        id=""
        onChange={props.onChange}
        style={{ width: "460px" }}
      >
        {lst.map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
}

export default ListUsers;
