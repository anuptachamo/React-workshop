import axios from "axios"
import Navbar from "../../components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const EditBlogs = () => {
  const {id} = useParams()
  const navigate = useNavigate()
 
  const [blog,setBlog] = useState({})

  const editBlog = async (e)=>{
    e.preventDefault()
    const response = await axios.put("https://64ee09441f872182714236fa.mockapi.io/blogs/" + id,blog)
    if(response.status == 200){
      navigate("/singleBlogs/" +id )
    }else{
      alert("Something went wrong ")
    }

  }
  const fetchBlog = async ()=>{
    const response = await axios.get("https://64ee09441f872182714236fa.mockapi.io/blogs/" + id)
    if(response.status == 200){
      setBlog(response.data)
  
    
    }else{
      alert("Something went wrong")
    }
    }
    useEffect(()=>{
      fetchBlog()
    },[])
  return (
    <div className="container">
    <Navbar/>
      <h1 className="form-title">Edit Blog</h1>
      
      
      <form onSubmit={editBlog} >
     
          <input type="text" id="title" onChange={(e)=>setBlog({...blog,title:e.target.value})}  value={blog.title}  placeholder='title' name="title" required  />
          
          <textarea id="description" placeholder='description' onChange={(e)=>setBlog({...blog,Description:e.target.value})} value={blog.Description} name="description" rows="4" required  ></textarea>
          
          <input type="text" id="image" placeholder='image' onChange={(e)=>setBlog({...blog,avatar:e.target.value})} value={blog.avatar}  name="avatar" required  />
          
          <input type="submit" value="Edit" />
      </form>
  </div>
  )
}

export default EditBlogs