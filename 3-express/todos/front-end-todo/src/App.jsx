import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home';
import { TodoEdit } from './pages/TodoEdit';
import { Login } from './pages/Login';
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/todoEdit/:id" element={<TodoEdit/>}/>
    </Routes>
    </div>
  );
}

export default App;

