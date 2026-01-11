import React from 'react'
import './CreateBlog.css'
import Navbar from '../../Components/Navbar/Navebar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
    const navigate=useNavigate();
    const createBlogHandler=async(e)=>{
        e.preventDefault();
        const formdata=new FormData(e.currentTarget);
        const data= Object.fromEntries(formdata);
        console.log(data);

        const response=await axios.post('http://localhost:3000/createBlog',data)
        console.log(response);
        if(response.status==201){
            console.log("Blog created successfully");
            navigate('/');
        }else{
            console.log("Failed to create blog");
        }
    }
  return (
   <>
   <Navbar/>
   <div className="form-box">
  <h2>Form</h2>

  <form onSubmit={createBlogHandler}>
    <input type="text" name='title' placeholder="Title" />
    <input type="text" name='subTitle' placeholder="Subtitle" />
    <textarea rows="4" name='description' placeholder="Description"></textarea>

    <button type="submit">Submit</button>
  </form>
</div>

   </>
  )
}

export default CreateBlog