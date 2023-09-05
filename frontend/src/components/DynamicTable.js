import axios from "axios";
import React, { useEffect, useState } from "react";

function DynamicTable() {
  const [tasks, setTasks] = useState({});
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/tasks/").then((res) => {
      setTasks(res.data);
      // console.log(res.data)
    });
  }, []);

  // get table column
  const columns = Object.keys(tasks[0]);

  // get table heading data
  const ThData = () => {
    return columns.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };

  // get table row data
  const TdData = () => {
    return tasks.map((task) => {
      return (
        <tr>
          {columns.map((v) => {
            return <td>{task[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div>
      DynamicTable
      <table>
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{TdData()}</tbody>
      </table>
      {/* <ul>
            {columns.map(task=>(
                <li>{task}</li>
            ))}
        </ul> */}
    </div>
  );
}

export default DynamicTable;
