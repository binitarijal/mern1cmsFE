import React from 'react'
import './SingleBlog.css'
import { Link, useParams } from 'react-router-dom';
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navebar';
import { useNavigate } from 'react-router-dom';
const SingleBlog = () => {
    const[blog,setBlog]=useState();
    const navigate=useNavigate();

    const {id}=useParams();
   // console.log("Blog id from params:",id);
    const singleBlog=async ()=>{
       // console.log("Fetching single blog with id:",id);
        const response=await axios.get(`http://localhost:3000/blog/${id}`);
        if(response.status==200){
            setBlog(response.data.blog);
            //console.log("Single blog fetched successfully");
           // console.log(response.data.blog);
        }else{
           // console.log("Failed to fetch single blog");
        }

    }

    const deleteBlogHandler=async()=>{
       

        const response=await axios.delete(`http://localhost:3000/blog/${id}`);
        if(response.status==200){
            console.log("Blog deleted successfully");
        navigate('/')
        }else{
            console.log("Failed to delete blog");
        }
    }
            useEffect(()=>{
            singleBlog()
        },[])
  return (
    <>
    <Navbar/>
    <div className="blog-container">
  <h1 className="blog-title">{blog?.title}</h1>

  <h3 className="blog-subtitle">
    {blog?.subTitle}
  </h3>

  <p className="blog-description">
    {blog?.description}
    
  </p>
  <div className='buttondiv'>
<button className='button' onClick={deleteBlogHandler}>Delete Blog</button> 
<button className='updatebutton'><Link to={`/updateblog/${id}`}>Update Blog</Link></button>

    </div>
</div>

    </>
  )
}

export default SingleBlog