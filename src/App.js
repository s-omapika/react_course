
import { Route ,Switch } from "react-router-dom";

import ALLMeetupsPage from "./pages/ALLMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout.js";



function App() {
  return <div>
    <Layout >
    <Switch>
 <Route path='/' exact>
 <ALLMeetupsPage />

 </Route>
   
   <Route path='/new-meetup'><NewMeetup /></Route>
   <Route path='/favorites'> <Favorites /> </Route>
   
   </Switch>
    
    </Layout>
    </div>
  
}

export default App;
