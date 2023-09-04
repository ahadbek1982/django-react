import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { URL } from './url';

function FerchData() {
    const [datas, setData]= useState([])
    useEffect(()=>{
        axios.get(URL)
        .then(res=>{
            console.log(res);
            setData(res.data)
        })
        
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <ul>
            {datas.map(data=>(
                <li key={data.id}>{data.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default FerchData