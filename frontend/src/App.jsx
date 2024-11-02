
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Postdetails from "./pages/Postdetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/posts/post/:id" element={<Postdetails />} />
        <Route path="/profile/:id" element={< ProfilePage/>} />
      
      </Routes>
      
    </div>
  );
}

export default App;
