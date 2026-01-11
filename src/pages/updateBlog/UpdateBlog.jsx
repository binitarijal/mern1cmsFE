import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
  // showing existing blog details in the form
  const { id } = useParams();
  const navigate = useNavigate();

  // FIX: initialize blog as an object
  const [blog, setBlog] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  const fetchBlogDetails = async () => {
    const response = await axios.get(`http://localhost:3000/blog/${id}`);
    if (response.status === 200) {
      console.log("Blog details fetched successfully");
      setBlog(response.data.blog);
    } else {
      console.log("Failed to fetch blog details");
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  // FIX: handle input changes
  const handleChange = (e) => {
    setBlog({ ...blog, 
        [e.target.name]: e.target.value });
  };

  // updating the blog details
  const updateBlogHandler = async (e) => {
    e.preventDefault();

    // no need for FormData since it's text
    const data = blog;

    console.log(data);

    const response = await axios.patch(`http://localhost:3000/blog/${id}`, data);
    console.log(response);
    if (response.status === 200) {  // PATCH usually returns 200
      console.log("Blog updated successfully");
      navigate(`/singleBlog/${id}`);
    } else {
      console.log("Failed to update blog");
    }
  };

  return (
    <div className="form-box">
      <h2>Edit Blog</h2>

      <form onSubmit={updateBlogHandler}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={blog.title}
            onChange={handleChange} // FIX: added onChange
          />
        </div>

        <div className="form-group">
          <label htmlFor="subtitle">Subtitle</label>
          <input
            id="subtitle"
            name="subTitle"
            type="text"
            value={blog.subTitle}
            onChange={handleChange} // FIX: added onChange
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={blog.description}
            onChange={handleChange} // FIX: added onChange
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
