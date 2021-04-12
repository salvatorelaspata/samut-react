import React from 'react'

const titleStyle: React.CSSProperties = {
     textAlign: "center",
     margin: '50px auto',
     fontWeight: 100
}

interface TitleProp {
     title: string
}

const Title: React.FC<TitleProp> = ({ title }) => {
     return (
          <div style={titleStyle}>
               <h1><strong>{title}</strong></h1>
          </div>
     )
}

export default Title
