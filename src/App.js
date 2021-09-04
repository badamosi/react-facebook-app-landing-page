import { useState } from 'react';
import './App.css';
import Logo from '../src/images/logo.png'
import Img1 from '../src/images/fb1.png'
import Img2 from '../src/images/fb2.png'
import Img3 from '../src/images/fb3.png'
import Img4 from '../src/images/fb4.png'
import Img5 from '../src/images/fb5.png'
// import { ArrowDownOutline } from 'react-ionicons'
// import { LogoNodejs } from 'react-ionicons'


function App() {
  const [slide, setSlide] = useState(0);

  const slideImages = [Img1, Img2, Img3, Img4, Img5];
  
  const handleNext = () => {
    slide < 4 && setSlide(slide + 1);
  }

  const handlePrevious = () => {
    slide > 0 && setSlide(slide - 1);
  }

  return (
    <section className="mian">
      <header>
        <img src={Logo} alt="" className="logo" />
        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Support</li>
        </ul>
        <button className="download_app">Download App</button>
      </header>
      <div className="content">
        <div className="text">
          <h2>Facebook</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur consectetur nostrum asperiores autem laudantium similique minus aliquam, omnis laboriosam earum quis eveniet exercitationem, officiis, itaque corporis harum optio sint tempore!</p>
          <h4>Download the App</h4>
          <span className="download-btn" onClick={handlePrevious}>Apple Store</span>
          <span className="download-btn" onClick={handleNext}>Android Store</span>
        </div>
        <div className="image">
          <img src={slideImages[slide]} alt="" className="slides" />
        </div>

        <div className="dots">
          <div className={"dot " + ((slide == 0) && 'active')} onClick={()=> setSlide(0)}></div>
          <div className={"dot " + ((slide == 1) && 'active')} onClick={()=> setSlide(1)}></div>
          <div className={"dot " + ((slide == 2) && 'active')} onClick={()=> setSlide(2)}></div>
          <div className={"dot " + ((slide == 3) && 'active')} onClick={()=> setSlide(3)}></div>
          <div className={"dot " + ((slide == 4) && 'active')} onClick={()=> setSlide(4)}></div>
        </div>
      </div>
    </section>
  );
}

export default App;
