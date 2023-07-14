import React from "react"
import Spinner from "./Spinner"




export default function Navbar(props) {

  function handleClick() {
    <Spinner />
  }
    return (
        <div className="navbar">  
          <div class="dropdown">
            
            <button class="dropbtn">          
              <h1><Spinner/></h1>            
              <h2>&#129417;</h2>            
            </button>

            <div class="dropdown-content">
              <button onClick={handleClick}><a href="__block">Services</a></button>
              <button onClick={handleClick}><a href="__block">Products</a></button>
              <button onClick={handleClick}><a href="__block">Contacts</a></button>
            </div>

          </div>
        </div>                       
               
        
  )
}