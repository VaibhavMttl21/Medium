import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import {Blogs} from "./pages/Blogs"
import { Publish } from './pages/Publish'
import { Login } from './pages/Auth'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App