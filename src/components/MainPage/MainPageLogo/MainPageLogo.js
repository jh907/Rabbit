import './MainPageLogo.css';
import main_logo from '../../../assets/images/main_logo.png';

function MainPageLogo() {
  return (
    <div className="main-page-logo">
      <div className="header-logo__container">
        <img src={main_logo} alt='main_logo'></img>
      </div>
    </div>
  );
}

export default MainPageLogo;