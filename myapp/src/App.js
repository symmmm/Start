import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./route/MainPage";
import Contents from "./route/Contents";
import PostList from "./route/PostList";
import NoticeDetail from "./route/NoticeDetail";
import Sidebar from "./components/Sidebar/Sidebar";
import Notice from "./route/Notice";
import Lookbook from "./route/Lookbook";
import NewArrival from "./route/store/NewArrival";
import Footer from "./components/Footer";
import AppNav from "./components/Sidebar/AppNav";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Mainpage} />
        <Route path="/store/newarrival" exact component={NewArrival} />
        <Route path="/test/contents" exact component={Contents} />
        <Route path="/test/postlist" exact component={PostList} />
        <Route path="/lookbook" exact component={Lookbook} />
        <Route path="/Community/Notice" exact component={Notice} />
        <Route
          path="/Community/Notice/:number"
          exact
          component={NoticeDetail}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
