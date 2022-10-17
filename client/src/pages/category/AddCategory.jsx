import "./AddCategory.css"
import React from 'react'
import { useState } from "react"
import axios from "axios"



export const AddCategory = () => {
    
const[cat,setCat]=useState("")
const[res,setres]=useState("")
const[success,setSuccess]=useState(false)


const handleSubmit=async(event)=>{
    event.preventDefault();
    try{
        const res=await axios.post("http://localhost:5000/api/category/",{
        name:cat
    })
    setres(res.data)
    setSuccess(true)
    }catch(err){
        setSuccess(false)
    }
    
}

  return (
    <div className="cat-container">
        <div className="cat-title">
            <h1>Add Category</h1>
        </div>
        <form className="cat-form" onSubmit={handleSubmit}>
            <input className="cat-input" type="text" placeholder="category" onChange={(event)=>setCat(event.target.value)}/>
            <button className="cat-button" type="submit">Add</button>
        </form>
        {success?<p style={{color:"green"}}>"{res.name}"has been successfully added</p>:<p style={{color:"red"}}>There was a problem adding</p>}
    </div>
  )
}
