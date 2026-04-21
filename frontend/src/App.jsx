import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddMemberPage from "./pages/AddMemberPage";
import ViewMembersPage from "./pages/ViewMembersPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <Link to="/" className="title-link">
            Team Name: FSD Avengers
          </Link>
          <nav>
            <Link to="/add-member">Add Member</Link>
            <Link to="/members">View Members</Link>
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-member" element={<AddMemberPage />} />
            <Route path="/members" element={<ViewMembersPage />} />
            <Route path="/members/:id" element={<MemberDetailsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
