import React from 'react'

import { InputProp } from '../../types/CommonType'

import css from './common.module.css'

const TextArea: React.FC<InputProp> = ({ labelLeft, labelRight, value, handleChange, name }) => {
     return (

          <div>
               <label className={css.labelLeft}>{labelLeft}<span className={css.rightLabel}>{labelRight}</span></label>
               <textarea maxLength={255} rows={5} value={value} name={name} onChange={handleChange} className={css["form-controll"]} />
          </div >

     )
}

export default TextArea
