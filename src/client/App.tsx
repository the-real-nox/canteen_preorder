import "./App.css";
import {LoginPage} from "./login-page/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentPage } from "./student-page/StudentPage";
import "bootstrap/dist/css/bootstrap.css";
import { StaffPage } from "./staff/Staff";

function App() {

  return (
      <div>
          <Router>
              <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/staff" element={<StaffPage />} />
                  <Route path="/student" element={<StudentPage />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
