import React from "react";
import {
  BrowserRouter as Router,
  Routes,   // Replace Switch with Routes
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <h2>TV APPS</h2>
        <div>
          <Link to="/app/netflix">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
              alt="Netflix"
              className="nf"
            />
          </Link>
          <Link to="/app/hbomax">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
              alt="HBO Max"
              className="hb"
            />
          </Link>
          <Link to="/app/hulu">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
              alt="Hulu"
              className="hu"
            />
          </Link>
          <Link to="/app/primevideo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
              alt="Prime Video"
              className="pr"
            />
          </Link>
        </div>

        {/* Replace Switch with Routes and use element prop */}
        <Routes>
          <Route path="/app/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  // Get the 'id' param from the URL using useParams hook
  let { id } = useParams();

  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}
