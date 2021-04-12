import React from 'react'

import css from './common.module.css'

interface ButtonProp {
     text: string,
     handleSubmit: () => void
}

const Button: React.FC<ButtonProp> = ({ text, handleSubmit }) => {
     return (
          <div style={{ marginTop: '1rem' }}>
               <button type="submit" className={css["btn"]} onClick={handleSubmit} >
                    {text}
               </button>
          </div>
     )
}

export default Button
