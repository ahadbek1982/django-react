import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData_ID() {
  const [data, setdata] = useState({});
  const [id, setid] = useState(1);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/tasks/${id}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <h1>FetchData_ID </h1>
      <input type="text" onChange={(e) => setid(e.target.value)} value={id} />
      <div>{data.title}</div>
      {/* <ol>
            {data.map(d=>(
                <li key={d.id}>{d.title}</li>
            ))}
        </ol> */}
    </div>
  );
}

export default FetchData_ID;
