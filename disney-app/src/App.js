import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <>
                <Header />
                <Detail />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
