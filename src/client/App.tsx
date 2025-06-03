import "./App.css";
import {LoginPage} from "./login-page/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {StudentPage} from "./student-page/StudentPage";

function App() {

  return (
      <div>
          <Router>
              <Routes>
                  <Route path="/loginStaff" element={<LoginPage />} />
                  <Route path="/studentPage" element={<StudentPage />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
