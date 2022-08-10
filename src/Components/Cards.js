import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="cards">
        <h1>Check out these EPIC Destenation</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the amazon Jungle" label="adventure" path="/services" />
                    <CardItem src="images/img-5.jpg" text="Travel Throw the Island of Vali in a Private Cruise" label="Luxury" path="/services" />
                </ul>
                <ul className="cards-items">
                    <CardItem src="images/img-8.jpg" text="Explore the hidden waterfall deep inside the amazon Jungle" label="adventure" path="/services" />
                    <CardItem src="images/img-7.jpg" text="Travel Throw the Island of Vali in a Private Cruise" label="Luxury" path="/services" />
                    <CardItem src="images/img-3.jpg" text="Travel Throw the Island of Vali in a Private Cruise" label="Luxury" path="/services" />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards