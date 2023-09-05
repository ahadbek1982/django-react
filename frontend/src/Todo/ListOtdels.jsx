import axios from "axios";
import React, { useEffect, useState } from "react";

function ListOtdels(props) {
  const [otdels, setotdels] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/lstotdels/")
      .then((res) => setotdels(res.data));
  }, []);
  const lstotdel = otdels.map((e) => e.otdel_name);
  return (
    <>
      <select
        name="topshiriq_otdel"
        id=""
        style={{ width: "460px" }}
        onChange={props.onChange}
      >
        {lstotdel.map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
}

export default ListOtdels;
