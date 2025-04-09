import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import {Link, useNavigate,useParams} from "react-router-dom"

export default function EditUser() {

  let navigate = useNavigate();

  const {id}=useParams();


  console.log("ID from URL:", id); 

  const [user,setUser]=useState({
    name:"",
    percentage:"",
    branch:""
})

const{name,percentage,branch}=user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  }



  const loadUser = async ()=>{
    const result= await axios.get(`http://localhost:8080/students/${id}`)
    setUser(result.data)
}

useEffect(()=>{
    
    loadUser();

},[])

const onSubmitBut=async(e)=>{

  e.preventDefault();
  await axios.put(`http://localhost:8080/student/update/${id}`, user)
  navigate("/")
}





  return (
    <div className='container'>

        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 shadow'>

                <h2 className='text-center m-4'>Edit User</h2>

                <form onSubmit={(e)=>onSubmitBut(e)}>

                  <div className='md-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input value={name} type={'text'} className='form-control' placeholder='Enter your name' name='name'
                    onChange={(e)=>{
                      onInputChange(e)
                    }}
                    />
                  </div>

                  <div className='md-3'>
                    <label htmlFor='percentage' className='form-label'>
                        Percentage
                    </label>
                    <input  value={percentage} type={'number'} className='form-control' placeholder='Enter your percentage' name='percentage'
                     onChange={(e)=>{
                      onInputChange(e)
                    }}
                    />
                  </div>

                  <div className='md-3'>
                    <label htmlFor='branch' className='form-label'>
                        Department
                    </label>
                    <input value={branch} type={'text'} className='form-control' placeholder='Enter your department' name='branch'
                     onChange={(e)=>{
                      onInputChange(e)
                    }}
                    />
                  </div>

                  <button type='submit' className='btn btn-outline-primary'>
                    Submit
                  </button>

                  <Link to={"/"} className='btn btn-outline-danger mx-2'>
                    Cancel
                  </Link>

                  </form>




            </div>
        </div>
    </div>
  )
}
