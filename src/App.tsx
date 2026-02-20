import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>React CRUD operations using PHP API & MYSQL</h3>

        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="/user/create">Create User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/:id/edit" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;