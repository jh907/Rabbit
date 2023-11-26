import './MainPageBanner.css';
import main_banner from '../../../assets/images/main_banner.jpg';

function MainPageBanner() {
  return (
    <div className='main-page-banner'>
      <img src={main_banner} alt='main_banner'></img>
    </div>
  );
}

export default MainPageBanner;