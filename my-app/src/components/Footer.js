import React from "react";

export default function Footer(){
  const back ={
    textAlign: "right"
  };
    return(
        <footer>
        <div className="container">
        <p style={back}>
          <a href="page.com">Back to top</a>
        </p>
        <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="page.com">Visit the homepage</a> or read our <a href="page.com">getting started guide</a>.</p>
      </div>
      </footer>
    )
}