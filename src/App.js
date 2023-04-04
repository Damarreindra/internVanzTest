import logo from "./logo.svg";
import "./App.css";
import { Environment, Float, Scroll, ScrollControls, Sparkles } from "@react-three/drei";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Butterfly } from "./models/Butterfly";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";

function App() {
  return (
    
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project/:id' element={<Detail/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
