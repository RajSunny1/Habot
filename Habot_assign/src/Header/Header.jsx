
import './Header.css'; // Ensure to create a CSS file for styling
import logoImage from './image 1.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleChevronDown } from '@awesome.me/kit-KIT_CODE/icons'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logoImage} alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>Find Suppliers</li>
          <li>Find Service Tags <FontAwesomeIcon icon="fa-solid fa-circle-chevron-down" /> </li>
          <li>
            <button className="login-button">Login / Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
