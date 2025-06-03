import "./App.css";
import { LoginPage } from "./login-page/LoginPage";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "./staff/Staff";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/loginStaff" element={<LoginPage />} />
                <Route path="/staff" element={<Page />} />
            </Routes>
        </Router>
    );
}

export default App;
