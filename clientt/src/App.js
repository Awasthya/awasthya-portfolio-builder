
import './App.css';

import './Components/Register.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
import Register from './Components/Register';
import MyInfo from './Components/MyInfo';
import { BrowserRouter as Router ,Route , Switch } from "react-router-dom";
import NotFound  from './Components/NotFound';

function App(){
  return (
    <>
      <Router>
        
        <Navbar />
        <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route  exact path="/MyInfo"component={MyInfo} />
        <Route  exact path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
        <Route  component={NotFound} />
        </Switch>
    
    </Router>
    </>
  );
}

export default App;

//rafce()