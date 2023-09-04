import axios from 'axios';
import React, { useState ,useEffect} from 'react'

function FetchData_Button() {
    const [data, setdata] = useState({});
    const [id, setid] = useState(1);
    const [frombutton, setfrombutton] = useState(1);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/tasks/${frombutton}`)
        .then(res => {
            console.log(res.data)
            setdata(res.data)
        })
        .catch(err=>console.log(err))
    }, [frombutton]);
    
    const handleData = ()=>{
        setfrombutton(id)
    }
  return (
    <div><h1>Fatchind Data with id button</h1>
        <input type="text" value={id} onChange={e=> setid(e.target.value)}  />
        <div><h2>{data.title}, {data.description}</h2></div>
        <button onClick={handleData}>Click to fetch data</button>
    </div>
  )
}

export default FetchData_Button