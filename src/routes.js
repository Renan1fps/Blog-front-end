import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./style/global"
import Main from "./pages/Main";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

export default function Routes(){
  return( 
    <BrowserRouter>
     <GlobalStyle/>
       <Switch>
         <Route exact path="/" component={Main}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/Projects" component={Projects}/>
    </Switch>
    </BrowserRouter>
  )

}