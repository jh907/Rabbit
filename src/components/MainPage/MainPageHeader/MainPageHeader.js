import './MainPageHeader.css';
import MainPageLogo from '../MainPageLogo/MainPageLogo';
import MainPageBanner from '../MainPageBanner/MainPageBanner';

function MainPageHeader() { 
  return (
    <div className='main-page-header'>
      <MainPageLogo></MainPageLogo>
      <MainPageBanner></MainPageBanner>
    </div>
  );
}

export default MainPageHeader;