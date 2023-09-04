import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { URL } from './url';

function Test() {
    const [tasks, settasks] = useState([]);

    useEffect(() => {
        axios.get(URL)
        .then(res=>{
            settasks(res.data)
            console.log(res)
        })
        .catch(err=>console.log(err))
    }, []);

  return (
    <div><h1>test</h1>
        <table>
            <thead>
                <th>
                    <td>ID</td>
                    <td>Title</td>
                    <td>description</td>
                </th>
            </thead>
            <tbody>
                <th>
                    {
                        tasks.map(i=> (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.description}</td>
                                <td><button>Read</button></td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        
                        ))
                    }
                </th>
            </tbody>
        </table>
    </div>
  )
}

export default Test








// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function Test() {
//     const [data, setdata] = useState({});
//     const [id, setid] = useState(1);
//     const [buttonID, setbuttonID] = useState(1);
    
//     useEffect(() => {
//         axios.get(`http://127.0.0.1:8000/api/tasks/${buttonID}`)
//         .then(res=>{
//             setdata(res.data)
//             console.log(res)
//         })
//         .catch(err=> console.log(err))
//     }, [buttonID]);

//     const handleID = ()=>{
//         setbuttonID(id)
//     }
//   return (
//     <div>
//         <h1>test</h1>
//         <input type="text" value={id} onChange={e=> setid(e.target.value)} />
//         <button onClick={handleID}>Fetch data</button>
//         <h3>{data.title}</h3>
//         {/* <ul>
//             {data.map(d=>(
//                 <li key={d.id}>{d.title}</li>
//             ))}
//         </ul> */}

//     </div>
//   )
// }

// export default Test