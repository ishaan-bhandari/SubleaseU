import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './Navbar.js'
import './index.css';
import App from './App';
import Listing from './Listing';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar />
    
    <Listing 
    rent = "1000"
    address="1234 Green St"
    description="blah blah blah"
    email="example@gmail.com"
    img_address="https://image.uhzcdn.com/house/88/efd286721ed3a94d8efb2bb8f066b68cc73a85.jpg?x-oss-process=image/resize,m_fill,w_1280,h_800,limit_0/interlace,1/quality,q_90/format,webp" />
    
    <Listing 
    rent="800"
    address="24534 Green St"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt neque eros, quis varius odio dignissim non. Donec eu consectetur erat. Praesent vehicula condimentum fermentum. Nulla hendrerit ut orci ac posuere. Maecenas scelerisque ipsum sem, ut feugiat justo cursus nec. Curabitur tristique massa vitae metus suscipit, et maximus tortor bibendum. Aliquam nulla sem, ultrices eu laoreet ac, vulputate id justo. Nunc accumsan purus augue. Nullam convallis erat dolor, molestie congue metus accumsan vitae. Quisque a bibendum ante. Nunc eu est in nunc laoreet auctor vitae id augue. Nam eget dolor nec diam ornare imperdiet. Suspendisse iaculis congue neque, in pharetra enim eleifend vitae."
    email="example@gmail.com"
    img_address="https://images1.apartments.com/i2/Au_dTOqdIW39wa1QpzCrP2rO53sukmqMXU5sfq_pAik/111/skyline-tower-champaign-il-building-photo.jpg" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
