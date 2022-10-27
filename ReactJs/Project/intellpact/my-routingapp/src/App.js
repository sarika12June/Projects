import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/contactus">
          <li>Contact</li>
        </Link>
        <Link to="/services">
          <li>Service</li>
        </Link>
        <Link to="/users/1/srikanth">
          <li>users</li>
        </Link>
        <Link to="/myusers">
          <li>myusers</li>
        </Link>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/contactus" element={<Contact />} exact />
        <Route path="/services" element={<Service />} exact />
        <Route path="/users/:id/:name" element={<User />} exact />
        <Route path="/myusers" element={<MyUser />} exact>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
const Home = () => {
  return <h1>Home</h1>;
};
const Profile = () => {
  return <h1>Profile</h1>;
};
const Account = () => {
  return <h1>Account</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};
const Service = () => {
  return <h1>Service</h1>;
};
const User = () => {
  const { id, name } = useParams();
  return (
    <h1>
      User {id} {name}
    </h1>
  );
};
const MyUser = () => {
  return (
    <div>
      <h1>MyUser </h1>
      <nav>
        <Link to="/user/profile">Profile </Link>
        <Link to="/user/account">Account</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const NotFound = () => {
  return <h1>NotFound</h1>;
};

export default App;
