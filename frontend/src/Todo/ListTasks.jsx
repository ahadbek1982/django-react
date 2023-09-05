import axios from "axios";
import React, { useEffect, useState } from "react";

function ListTasks(props) {
  const [lstasks, setlstasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/lstasks/")
      .then((res) => setlstasks(res.data));
  }, []);
  const lst = lstasks.map((e) => e.task_name);
  return (
    <>
      <select
        name="topshiriq_turi"
        id=""
        style={{ width: "460px" }}
        onChange={props.onChange}
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

export default ListTasks;
