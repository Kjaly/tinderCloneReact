import React from 'react';
import './App.css';
import Header from "./Header/Header";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TinderCard from "react-tinder-card";
import TinderCards from "./TinderCards/TinderCards";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import Chats from "./Chats/Chats";
import ChatScreen from "./Chats/Chat/ChatScreen/ChatScreen";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/chat/:person'>
              <Header backButton='/chat'/>
              <ChatScreen/>
            </Route>
            <Route path='/chat'>
              <Header backButton='/'/>
              <Chats/>
            </Route>
            <Route path='/'>
              <Header/>
              <TinderCards/>
              <SwipeButtons/>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
