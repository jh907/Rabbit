import './AboutPageHeader.css';
import logoimage from '../../assets/images/logo.jpg';

function AboutPageHeader() {
  return (
    <div id="middleset">
    <div id="imagemv">
        <img src={logoimage} width="230px"  align="right"/> 
    </div>
    </div>
  );
}

export default AboutPageHeader;