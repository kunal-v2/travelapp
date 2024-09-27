import '../component/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="logo">
        <img src={require('../assets/images/abc.png')} alt="logo" />
      </div>
      <ul>
        <li><b><a href="#Home">Home</a></b></li>
        <li><b><a href="#Ticket">Ticket</a></b></li>
        <li><b><a href="#Explore">Explore</a></b></li>
        <li><b><a href="#Activity">Activity</a></b></li>
        <li><b><Link to="/contact">Contact</Link></b></li> {/* Use Link */}      </ul>
      <button><b>Login</b></button>
    </nav>
  );
}

export default Header;
