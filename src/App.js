import Home from "./components/Home";
import Blogs from "./components/Blogs";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import { Navigate } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
          <Route path="/home" element={<Navigate to="/"/>}></Route>
          <Route path="/blog/:id" element={<Details />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
