import Layout from 'layouts/Layout';
import Index from 'pages';
import RosasInfoPage from 'pages/rosas'
import Girasoles from 'pages/girasoles';
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
          <Layout>
        <Switch>
           <Route path="/rosas" exact>
            <RosasInfoPage />
            </Route>
           <Route path="/girasoles" exact>
            <Girasoles />
        
            </Route>
            <Route path="/" exact>
        <Index />
       </Route>
     </Switch>
       </Layout>
        
   </Router>

 </div>
  );
}



export default App;
