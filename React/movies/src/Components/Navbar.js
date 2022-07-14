import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex', background:"white", color:"blue",padding:'1rem', justifyContent:"center", alignItems:"center"}}>
            <h1>Movies App</h1>
            <h2 style={{marginLeft:"2rem",}}>Favourites</h2>
      </div>
    )
  }
}