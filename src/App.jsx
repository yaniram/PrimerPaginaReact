import Index from 'pages';
import RosasInfoPage from 'pages/rosas'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'styles/styles.css';


function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route path="/rosas" >
            <RosasInfoPage />
        
            </Route>
            <Route path="/" >
        <Index />
            </Route>
        
        </Switch>
        </Router>

    </div>
  );
}



export default App;
