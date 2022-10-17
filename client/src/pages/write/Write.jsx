import { useState } from "react"
import "./Write.css"
import axios from "axios"
import { useContext } from "react"
import { Context } from "../../context/Context"
import { useEffect } from "react"

export default function Write() {
  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")
  const[file,setFile]=useState("")
  const{user}=useContext(Context)
  const[category,setCategory]=useState("")
  const[cats,setcat]=useState([])


   const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories:category
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  useEffect(()=>{
  const getCat= async ()=>{
    const res= await axios.get("http://localhost:5000/api/category")
    setcat(res.data);
  }
  getCat();
  
},[])
  
  return (
    <div className="write">
       {file&&(
        <img
        className="writeImage"
        src={URL.createObjectURL(file)} 
        alt="writepic"/>
       )}
        
        <form className="writeForm" action="" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="formIcon fa-solid fa-plus"></i>
            </label>
            <input
             type="file" 
             id="fileInput" 
             style={{display:"none"}}
             onChange={(event)=>setFile(event.target.files[0])}
             />
             <input
              type="text" 
              placeholder="title" 
              className="writeInput" 
              autoFocus={true}
              onChange={(event)=>setTitle(event.target.value)}
              />  
        </div>
         <div className="writeFormGroup">
          <div className="box">
              <select  className="writeSelect" onChange={(event)=>setCategory(event.target.value)}>
                
                {cats.map((cat,index)=>(
                      <option value={cat.name}>{cat.name}</option>
                          ))}              
            </select>
              </div>
            </div>
        <div className="writeFormGroup">
            <textarea 
            placeholder="Tell your story..." 
            type="text" 
            className="writeInput writeText"  
            onChange={(event)=>setDesc(event.target.value)}
            >
            </textarea>
           
        </div>
        <button type="submit" className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
