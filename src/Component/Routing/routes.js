import { Route,Routes } from "react-router-dom"
import About from "../About/about"
import Services from "../Services.js/services"
import Home from "../Home/home"

const Routing  = () =>{
return (
<Routes>
    <Route path="/" element = {<Home />} ></Route>
    <Route path="/about" element= {<About />}></Route>
    <Route path="/services" element= {<Services />}></Route>
    
  
</Routes>
)
}
export default Routing