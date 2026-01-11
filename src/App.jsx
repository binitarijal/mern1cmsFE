import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import './App.css'
import CreateBlog from "./pages/createBlog/CreateBlog"
import SingleBlog from "./pages/singleBlog/SingleBlog"
import UpdateBlog from "./pages/updateBlog/UpdateBlog"

const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/createBlog" element={<CreateBlog/>}/>
      <Route path="/singleBlog/:id" element={<SingleBlog/>}/>
      <Route path="/updateblog/:id" element={<UpdateBlog/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App