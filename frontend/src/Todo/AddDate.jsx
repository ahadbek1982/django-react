import React, { useState } from "react";

function AddDate(props) {
  const [date, setdate] = useState();
  console.log(date);
  return (
    <>
      <input type="date" onChange={(e) => setdate(e.target.value)} />
    </>
  );
}

export default AddDate;
