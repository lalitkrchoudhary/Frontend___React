import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const ViewUser = () => {

    
 
    const [user, setUser]=useState({
        rollNo:"",
        name:"",
        percentage:"",
        branch:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadUser();
    },[])


const loadUser= async()=>{
const result = await axios.get(`${process.env.REACT_APP_API_URL}/students/${id}`)
console.log(result.data)
setUser(result.data)
}





  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">User Details</h2>

        <div className="card">
          <div className="card-header">
            RollNo : {user.rollNo}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name : {user.name}</b>
               
              </li>
              <li className="list-group-item">
                <b>Percentage : {user.percentage} </b>
               
              </li>
              <li className="list-group-item">
                <b>Branch : {user.branch}</b>
                
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>
          Back to Home
        </Link>
      </div>
    </div>
  </div>
);
  
}
