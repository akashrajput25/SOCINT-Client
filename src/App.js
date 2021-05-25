import React from 'react';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'
import './App.css';

import { AuthProvider } from './context/auth'
import AuthRoute from './util/AuthRoute'
import MenuBar from './components/MenuBar'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import SinglePost from './pages/SinglePost'

function App() {
  return (
    <AuthProvider>
      <Router>
      <Container>
        <MenuBar/>
        <Route exact path='/' component={Home}/>
        <AuthRoute exact path='/login' component={Login}/>
        <AuthRoute exact path='/register' component={Register}/>
        <Route exact path="/posts/:postId" component={SinglePost}/>
      </Container>
    </Router>
    </AuthProvider>
    );
}

export default App;