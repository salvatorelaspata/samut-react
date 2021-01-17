import React from 'react'

interface Props {
     labelLeft: string,
     labelRight: string,
     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
     value: string
}

const Select: React.FC<Props> = ({ labelLeft, labelRight, handleChange, value }) => {
     return (

          <div className="form-group">
               <label>{labelLeft}<span>{labelRight}</span></label>
               <input type="text" className="form-controll" onChange={handleChange} value={value} />
          </div>

     )
}

export default Select
