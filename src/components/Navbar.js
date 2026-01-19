export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">WhatsApp</div>

      <ul className="menu">
        <li>Features</li>
        <li>Privacy</li>
        <li>Help Center</li>
        <li>Blog</li>
        <li>For Business</li>
        <li>Apps</li>
      </ul>
      <div className="nav-buttons">
        <button className="login">Login</button>
        <button classname="download">Download</button>
      </div>
    </div>
  );
}
