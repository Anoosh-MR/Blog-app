import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios"
import "./Singlepost.css";
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';



  const singlepost=function Products() {
    const PF="http://localhost:5000/images/"
    const[post,setPost]=useState({})
    const {user}=useContext(Context)
    const location = useLocation();
    const path=(location.pathname.split("/")[2]);

    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    const[updateMode,setUpdateMode]=useState(false)

 useEffect(()=>{
  const getpost= async ()=>{
    const res=await axios.get("http://localhost:5000/api/posts/"+path)
    setPost(res.data);
    setTitle(res.data.title)
    setDesc(res.data.desc)

  }
  getpost();
 },[path])

 const handleDelete=async()=>{
  try{
    await axios.delete("http://localhost:5000/api/posts/"+path,{data:{username:user.username}})
    window.location.replace("/");
  }catch(err){
    console.log(err);
  }
  
 }

 const handleUpdate=async()=>{

  try{
    await axios.put("http://localhost:5000/api/posts/"+path,{
      username:user.username,
      title,
      desc
    })
    setUpdateMode(false)
  }catch(err){
    console.log(err);
  }

 }

return (
    <div className='singlepost'>
      <div  className='singlePostWraper'>
        {post.photo&&(
        <img className='singlePostImage' 
        src={PF+post.photo} 
        alt="post pic"/>
        )}
        
        {updateMode?
        <input className='singlePostTitleInput' 
        type="text" 
        onChange={(event)=>setTitle(event.target.value)}
        value={title}
        autoFocus
        />:(
            
         

        <h1 className='singlePostTitle'>{title}
        {post.username===user?.username&&(
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
          <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
        </div>
        )}
        </h1>
         
         )
        }

        <div className="singlePostInfo">
          <Link className='link' to={`/?user=${post.username}`}>
          <span className='singlePostAuthor'>Author:<b>{post.username}</b></span>
          </Link>
          <span className='singlePostTime'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode?
        <textarea 
        className='singlepostDescInput' 
        value={desc} 
        rows="5"
        onChange={(event)=>setDesc(event.target.value)}
        />:(
        <p className='singlepostDesc'>{desc}</p>
        )}
        {updateMode?
        <button class="singlePostButtonInput" onClick={handleUpdate}>Update</button>:null
        }
      </div>
    </div>
  )
}




export default singlepost