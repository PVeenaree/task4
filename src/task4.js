import { useState, useEffect } from 'react';
import Axios from 'axios';
import './task4.css';
function Task4(props)
{
  const [data, setData] = useState([]);


  useEffect(() => {
    Axios.get('https://dummyjson.com/users')
      .then((res) => {
        if (res.status === 200)
        {
          setData(res.data.users);
        }
        
        else { Promise.reject(); }
      })
      .catch((err) => { alert(err); })
  }, [])
  
  return (
    <div>
      <table>
          <tr>
              
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
          <th>Phone</th>
          <th> Date of Birth </th>

          
              </tr>
      {(data.map((val, ind)=>
      {
        return (   
              <tr key={val.id}>
                
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
            <td>{val.phone}</td>
            <td>{val.birthDate}</td>
                
                </tr>          
          )
      }
      ) )
        }
      </table>
    </div>)
}

export default Task4;