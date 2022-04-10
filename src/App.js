import './App.css';
import PreNavbar from './components/PreNavbar.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Slider from './components/Slider.js';
import Data from './data/data.json';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProducts from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';    
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js'



function App() {
  return (
    <Router> 
      <PreNavbar />
      <Navbar />

      <NavOptions miPhones={Data.miPhones} redmiPhones={Data.redmiPhones} tv={Data.tv} laptop={Data.laptop} fitnessAndLifestyle={Data.fitnessAndLifeStyle} home={Data.home} accessories={Data.accessories} audio={Data.audio} />
      <Slider start={Data.banner.start} />
      <Offers offers={Data.offer} />
      <Heading displayText="STAR PRODUCTS" />
      <StarProducts starProduct={Data.starProduct}/>
      <Heading displayText="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      

      

      <Routes>

      <Route exact path="/music"  element = {<HotAccessories music = {Data.hotAccessories.music} musicCover = {Data.hotAccessoriesCover.music}/>}/>
      <Route exact path="/smartDevices"  element = {<HotAccessories smartDevices = {Data.hotAccessories.smartDevice} smartDevicesCover = {Data.hotAccessoriesCover.smartDevice}/>}/>
      <Route exact path="/home"  element = {<HotAccessories home = {Data.hotAccessories.home} homeCover = {Data.hotAccessoriesCover.home}/>}/>
      <Route exact path="/lifestyle"  element = {<HotAccessories lifestyle = {Data.hotAccessories.lifeStyle} lifestyleCover = {Data.hotAccessoriesCover.lifeStyle}/>}/>
      <Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories = {Data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {Data.hotAccessoriesCover.mobileAccessories}/>}/>

      </Routes>
      <Heading displayText="PRODUCT REVIEWS" />

      <ProductReviews reviews = {Data.productReviews}/>
      <Heading displayText="VIDEOS" />
       <Videos videos={Data.videos} />

       <Heading displayText="IN THE PRESS" />

       <Banner banner={Data.banner}/>

       <Footer footer={Data.footer}/>
      

    </Router>
  );
}

export default App;
