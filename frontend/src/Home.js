import React, {useState, useEffect} from "react";
import axios from "axios";
//import logo from './logo.svg';
import "./App.css";
import Listing from "./Listing.js";
import NavigationBar from "./Navbar.js";
import PostListing from "./PostListing.js";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function Home() {
  const [data, setdata] = useState({
    listings: [
      {
        id_: "1234",
        rent: "920",
        address: "309 E Green Street",
        description: "4 Bed 2 Bath - Furnished",
        email: "lebronjames23@illinois.edu",
        img_address:
          "https://s3.amazonaws.com/rcp-prod-uploads/property_images/webp/2021-06/72bc1bd7b0d31aff97cc0a532814ed1ceab9cafa7j.jpeg",
      },
      {
        id_: "1234",
        rent: "820",
        address: "616 E Green Street",
        description: "3 Bed 3 Bath - Unfurnished",
        email: "georgewashington1776@illinois.edu",
        img_address:
          "https://images.rentable.co/103078/45527457/slide.jpg",
      },
      {
        id_: "1234",
        rent: "1200",
        address: "708 S 6th St",
        description: "2 Bed 2 Bath - Furnished",
        email: "ronaldo7@illinois.edu",
        img_address:
          "https://images1.forrent.com/i2/-ANla1NJVpce8b5s3wBNfhNfz3r-vANSRABn6sKbFZI/117/image.jpg",
      },
    ],
  });

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/listings/${min}/${max}`,
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
        setdata({
          listings: res,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  });

  const handleMinChange = (event) => {
    setMin(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMax(parseInt(event.target.value));
  };

  const callListingsApi = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="Home"
      style={{background: "linear-gradient(130deg,#13294b,#a33b00)"}}
    >
      {/* Display the data from Flask API here */}
      {/* <h1 style={{ color: "white" }}>{data1.message}</h1> */}
      <NavigationBar />
      <form onSubmit={callListingsApi} style={{ color: 'white' }}>
        <label>
          Min Rent:
          <input type="number" value={min} onChange={handleMinChange} />      
        </label>
        <label>
          Max Rent:
          <input type="number" value={max} onChange={handleMaxChange} />
        </label>
        <br />
        {/* <button type="submit">Filter</button> */}
      </form>
      {/* {listingDataItems} */}
      {data.listings.map((listing) => (
          <Listing
            key={listing.id_}
            rent={listing.rent}
            address={listing.address}
            description={listing.description}
            email={listing.email}
            img_address={listing.img_address}
            custom_id={listing.custom_id}
          />
        ))}
    </div>
  );
}

export default Home;
