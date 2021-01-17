import React from 'react'

interface Props {
     labelLeft: string,
     labelRight: string,
     value: string,
     handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<Props> = ({ labelLeft, labelRight, value, handleChange }) => {
     return (

          <div className="form-group">
               <label>{labelLeft}<span>{labelRight}</span></label>
               <textarea maxLength={255} rows={5} value={value} onChange={handleChange} className="form-controll" />
          </div>

     )
}

export default TextArea
