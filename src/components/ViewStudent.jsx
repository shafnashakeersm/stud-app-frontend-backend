import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavStudent from './NavStudent'

const ViewStudent = () => {
    const[student,changeStudent]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/viewall").then(
            (Response)=>{
                changeStudent(Response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavStudent/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Adm No </th>
      <th scope="col">Roll no</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
   {
    student.map(
        (value,input)=>{
           return  <tr>
           <th scope="row">{value.name}</th>
           <td>{value.admno}</td>
           <td>{value.rollno}</td>
           <td>{value.college}</td>
         </tr>
        }
    )
   }
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewStudent