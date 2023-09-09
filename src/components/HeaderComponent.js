import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Cart</a></li>
        </ul>
      </div>

    </div>
  );
};

export default HeaderComponent;