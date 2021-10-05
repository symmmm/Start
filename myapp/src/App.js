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
import Outer from "./route/store/Outer";
import Detail from "./route/store/Detail";
import Top from "./route/store/Top";
import Cart from "./route/Cart";
import LoginPage from "./Login/LoginPage";
import JoinPage from "./Login/Join";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/join" exact component={JoinPage} />
        <Route path="/" exact component={Mainpage} />
        <Route path="/detail/:number" exact component={Detail} />
        <Route path="/store/newarrival" exact component={NewArrival} />
        <Route path="/store/outer" exact component={Outer} />
        <Route path="/store/top" exact component={Top} />
        <Route path="/test/contents" exact component={Contents} />
        <Route path="/test/postlist" exact component={PostList} />
        <Route path="/lookbook" exact component={Lookbook} />
        <Route path="/Community/Notice" exact component={Notice} />
        <Route path="/cart" exact component={Cart} />
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
