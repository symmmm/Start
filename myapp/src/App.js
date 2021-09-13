import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./route/MainPage";
import Contents from "./route/Contents";
import PostList from "./route/PostList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Mainpage} />
        <Route path="/test/contents" exact component={Contents} />
        <Route path="/test/postlist" exact component={PostList} />
      </Switch>
    </Router>
  );
}

export default App;
