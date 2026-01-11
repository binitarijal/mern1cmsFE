import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navebar'
import axios from 'axios'
import { use } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom";

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
const Home = () => {
const navigate=useNavigate();
    const[blogs,setBlogs]=useState([])
const fetchBlogs=async ()=>{
    try{
    const response= await axios.get('http://localhost:3000/blogs')
    if(response.status!==200  ){
        console.log("Failed to fetch blogs");
        return;
    }
    else{
         setBlogs(response.data.blogs)
        console.log("Blogs fetched successfully");
    }
    //console.log(response.data.blogs);
   
    }
    catch(error){
 console.log("Error fetching blogs:",error);
    }
}
useEffect(()=>{
    fetchBlogs()
},[])

  return (
    <>
    <Navbar/>
    {
 blogs.map((blog)=>{
    return(
        <div className="card" key={blog._id}>
  
  <div className="card-content">
    <h3 className="card-title">{blog.title} </h3>
    <p className="card-text">
    {blog.subTitle}
    </p>
    <Link to={`/singleBlog/${blog._id}`} className="card-link">
      See More
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </Link>
  </div>
</div>
    )

 })
}
    </>
  )
}

export default Home