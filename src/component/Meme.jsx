import React from "react";
import memesData from "./memesData";    

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState('')

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
          
        
    }
    
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder=" &#9997;Live your comments"
                    className="form--input"

                />
                <input
                    type="text"
                    placeholder=" &#128270;Search"
                    className="form--input"

                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new image
                </button>
            </div>
            <img src={memeImage} className="meme--image" alt="MyPic" />
           
        </main>
    )
}