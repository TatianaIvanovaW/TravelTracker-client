import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import Loading from "./components/Loading";
import Home from "./pages/home/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Statistic from "./pages/User/Statistic";
import MessageBox from "./components/MessageBox/index";
import Country from "./pages/Country";
import Profile from "./pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { fetchUserWithCountries } from "./store/country/action";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(fetchUserWithCountries());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={Statistic} />
        <Route path="/account" component={Profile} />
        <Route path="/country/:id" component={Country} />
      </Switch>
    </div>
  );
}

export default App;
