import { Routes, Route, NavLink } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserProfile from "./components/UserProfile";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/add-user' element={<UserForm />} />
        <Route path='/users/:id/' element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
