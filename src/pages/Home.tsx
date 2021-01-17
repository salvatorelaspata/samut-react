import React from 'react'

interface HomeProps {

}

const style: React.CSSProperties = { position: "absolute", top: "50%", left: "50%", marginLeft: "-75px" };

const Home: React.FC<HomeProps> = (props) => {
     return (
          <h1 style={style}>
               Samut 2.0
          </h1>
     )
}



export default Home
