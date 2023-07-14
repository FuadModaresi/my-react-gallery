import React from "react"

// import Contact from "./component/Contact";
// import { Image } from "react-bootstrap";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Meme from "./component/Meme";
// import Hero from "./component/Hero";
import Data from "./component/Data";
// import Spinner from "./component/Spinner";



function App() {
    
    const cards = Data.map(item => {
        return (
            <Card                
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // description={item.description}
                // openSpots={item.openSpots}
            // this method insted of above code--------------

                key={item.id}
                {...item}
            />
        )
    }) 
    return (
        <>
            {cards}
            <Navbar /> 
            {/* <Spinner />     */}
            {/* <Hero /> */}
            <Meme />
            <Footer />               

        </>      
           
    )
}

export default App