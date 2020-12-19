import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useStateValue } from "./components/StateProvider";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {user ? (
        <Router>
          <Switch>
            <Route path="/channel/:channelid">
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
              <Sidebar />
              <Chat/>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
