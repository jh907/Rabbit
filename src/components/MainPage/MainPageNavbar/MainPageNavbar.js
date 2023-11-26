import '../../../assets/css/fonts.css';
import './MainPageNavbar.css';

function MainPageNavbar() {
  return (
    <div className='main-page-navbar'>
      <div className="header-navbar__container">
        <button className='header-navbar__item'><strong>학사</strong></button>
        <button className='header-navbar__item'><strong>시설</strong></button>
        <button className='header-navbar__item'><strong>교내혜택</strong></button>
        <button className='header-navbar__item'><strong>과생활</strong></button>
        <button className='header-navbar__item'><strong>교내활동</strong></button>
      </div>
    </div>
  );
}

export default MainPageNavbar;