import '../../assets/css/fonts.css';
import './MainPage.css';
import MainPageBody from '../../components/MainPage/MainPageBody/MainPageBody';
import MainPageHeader from '../../components/MainPage/MainPageHeader/MainPageHeader';
import MainPageNavbar from '../../components/MainPage/MainPageNavbar/MainPageNavbar';


function MainPage() {
  return (
    <div className="main-page">
      <MainPageHeader></MainPageHeader>
      <MainPageNavbar></MainPageNavbar>
      <MainPageBody></MainPageBody>
    </div>
  );
}

export default MainPage;