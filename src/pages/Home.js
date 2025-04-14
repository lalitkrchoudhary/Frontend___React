import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link,useParams } from 'react-router-dom';

export const Home = () => {

const [users,setUsers]=useState([]);

const {id}=useParams()

useEffect(()=>{
    
    loadUsers()
},[]);

const loadUsers= async ()=>{
  console.log(`Here : ${process.env.REACT_APP_API_URL}`)
  const result = await axios.get(`${process.env.REACT_APP_API_URL}/students`)
  console.log(result.data)
  setUsers(result.data)
}

const deleteUser=async (id)=>{
// await axios.delete(`http://localhost:8080/student/delete/${id}`)
 await axios.delete(`${process.env.REACT_APP_API_URL}/student/delete/${id}`)
 loadUsers()
}

  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table">
  <thead>
    <tr>
        <th scope='col'>Sl.NO</th>
      
      <th scope="col">Name</th>
      <th scope="col">Percentage</th>
      <th scope="col">Department</th>
      <th scope="col">Action</th> 
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(

            <tr>
            <th scope="row" key={index}>{index+1}</th>
           
            <td>{user.name}</td>
            <td>{user.percentage}</td>
            <td>{user.branch}</td>
            <td>
              <Link to={`/view/${user.rollNo}`} className='btn btn-primary mx-2'>View</Link>
              <Link to={`/edituser/${user.rollNo}`} className='btn btn-outline-primary mx-2'>Edit</Link >
              <button onClick={()=>deleteUser(user.rollNo)} className='btn btn-danger mx-2'>Delete</button>

            </td>
          </tr>
        ))
    }
   
    
  </tbody>
</table>
        </div>

    </div>
  )
}
