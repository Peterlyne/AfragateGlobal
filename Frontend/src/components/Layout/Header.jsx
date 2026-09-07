import "./Header.css";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="header">

      <div>
        <h2>Dashboard</h2>
        <p>Welcome back, {user?.FullName} </p>
      </div>

      <div className="profile">
        <span>{user?.accountType}</span>
      </div>

    </header>
  );
}

export default Header;