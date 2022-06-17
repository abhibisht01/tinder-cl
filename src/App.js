
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<> <Header /> <TinderCards /> <SwipeButtons /> </>}> </Route>
          <Route exact path="/chats" element={<>  <Header backButton="/" /> <Chats /> </>}> </Route>
          <Route exact path="/chats/:person" element={<>  <Header backButton="/chats " /> <ChatScreen /></>}> </Route>

        </Routes>
      </BrowserRouter>



      {/* Tinder Cards  */}
      {/* Button Below Tinder Cards  */}
      {/* Chat Screen  */}
      {/* Individual Chat Screen  */}



    </div>
  );
}

export default App;
