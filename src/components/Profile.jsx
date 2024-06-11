import axios from 'axios'
import React, { useState } from 'react'
import NavStudent from './NavStudent'

const Profile = () => {
    const [student,setStudent]=useState(
        {
            "name":"",
            "admno":"",
            "rollno":"",
            "college":""
        }
    )
    const inputHandler=(event)=>{
        setStudent({...student,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(student)
        axios.post("http://localhost:8080/add",student).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="success") {
                    alert("successfull")
                } else {
                    alert("Error")
                }
            }
        )
    }
   
    
  return (
    <div>
       <NavStudent/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={student.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ADM NO</label>
                        <input type="text" className="form-control" name='admno' value={student.admno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ROLL NO</label>
                        <input type="text" className="form-control" name='rollno' value={student.rollno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">COLLEGE</label>
                        <textarea  id="" className="form-control" name='college' value={student.college} onChange={inputHandler}></textarea>
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SUMBIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile