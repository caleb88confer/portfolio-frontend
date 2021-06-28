// import components=========
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
// import pages=============
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import css==============
import './App.css';

function App() {
  // heroku backend URL
  const URL = "https://practice-portfolio-1.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
