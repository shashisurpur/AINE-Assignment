import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { Layout } from './components/layoutComp/Layout';
import HomePage from './pages/HomePage';
import PageSetting from './pages/PageSetting';
import PageLessonPlan from './pages/PageLessonPlan';
import PrivateRoute from './components/privateRouteComp/PrivateRoute';

function App() {
  return (
    <Router > 
      

      <Layout>
        <Switch>
          <PrivateRoute path='/' exact component={PageLessonPlan} /> 
          <Route path='/home' exact component={HomePage} />
          <Route path='/lessons' exact component={PageLessonPlan} />
          <Route path='/settings' exact component={PageSetting} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
