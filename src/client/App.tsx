import "./App.css";
import {LoginPage} from "./login-page/LoginPage";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
      <div>
          <Router>
              <Routes>
                  <Route path="/loginStaff" element={<LoginPage />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
