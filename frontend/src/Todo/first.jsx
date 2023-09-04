import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { URL } from '../components/url';
function First() {
    const [tasks, settasks] = useState({});
    useEffect(() => {
        axios.get(URL)
        .then(res=>settasks(res.data))
        .catch(err=> console.log('err', err))
    }, []);
  return (
    <div>
      <h1>tasks</h1>
     <table>
      <thead>
        <th>
          <td>ID</td>
          <td>Title</td>
          <td>Descrition</td>
        </th>
      </thead>
      <tbody>
        <th>
          {tasks.map(task=>(
            
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
                          )
                    )
          }
        </th>
      </tbody>
     </table>
    </div>
  )
}

export default First