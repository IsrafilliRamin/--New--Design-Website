import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services" />
                        <CardItem
                        src="images/img-2.jpg"
                        text="Travel through Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services" />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src="images/img-3.jpg"
                        text="Set Sail in the Atlatic Ocean visiting Uncharted Waters"
                        label="Myster"
                        path="/services" />
                        <CardItem
                        src="images/img-4.jpg"
                        text="Experence Tootball on Top of the Himilayan Mountains"
                        label="Adevture"
                        path="/products" />
                        <CardItem
                        src="images/img-8.jpg"
                        text="Ride yhtough the Sahara Desert on a gided camel tour "
                        label="Adrenaline"
                        path="/sign-up" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
