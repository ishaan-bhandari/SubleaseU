import React, { useState, useEffect } from 'react';
import axios from "axios";
//import logo from './logo.svg';
import './App.css';
import Listing from './Listing.js';
import NavigationBar from './Navbar.js'
import PostListing from './PostListing.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  const [data1, setData1] = useState({ message: 'Server Offline' });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api",
    })
      .then((response) => {
        const res = response.data
        // setData1(({
        //   message: res.message
        // }))
        console.log(res)
        setData1(res)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  })






  const [data, setdata] = useState({
    listings: [{ 'rent': '1000', 'address': '1234 Green St', 'description': 'blah blah blah', 'email': 'example@gmail.com', 'img_address': 'https://www.mhmproperties.com/wp-content/uploads/2017/08/DSC_3928-1-800x500.jpg' }],
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/listings",
    })
      .then((response) => {
        const res = response.data
        console.log(res)
        setdata(({
          listings: res
        }))
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  })

  const listingDataItems = data.listings.map(listing =>
    <Listing 
          rent = {listing.rent}
          address= {listing.address}
          description= {listing.description}
          email= {listing.email}
          img_address= {listing.img_address} />
    )

  return (
    <div className='Home' style={{ background: "linear-gradient(130deg,#13294b,#a33b00)" }}>
      {/* Display the data from Flask API here */}
      <h1 style={{ color: "white" }}>{data1.message}</h1>
      <NavigationBar />

      {listingDataItems}
      {/* {data.listings.map((listing,index) =>
        <Listing key={index}
          rent={listing.rent}
          address={listing.address}
          description={listing.description}
          email={listing.email}
          img_address={listing.img_address} />
      )} */}

    </div>
  );
}

export default Home;

{/* <Listing 
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
            img_address="https://images1.apartments.com/i2/Au_dTOqdIW39wa1QpzCrP2rO53sukmqMXU5sfq_pAik/111/skyline-tower-champaign-il-building-photo.jpg" /> */}