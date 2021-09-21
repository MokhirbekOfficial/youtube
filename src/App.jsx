import './App.css';
import Home from './pages/home/home';
import Home2 from './pages/home2/home2';
import Video from './pages/video/video';
import {Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Switch>
		      <Route path="/" component={Home} exact/>
				  <Route path="/home2" component={Home2} exact/>
          <Route path="/video" component={Video} exact/>
	    </Switch>
    </div>
  );
}

export default App;
