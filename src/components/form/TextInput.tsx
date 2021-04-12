import React from 'react'

import { InputProp } from '../../types/CommonType'

import css from './common.module.css'

const TextInput: React.FC<InputProp> = ({ labelLeft, labelRight, value, handleChange, name }) => {
     return (

          <div>
               <label className={css.labelLeft}>{labelLeft}<span className={css.rightLabel}>{labelRight}</span></label>
               <input type="text" name={name} maxLength={255} value={value} onChange={handleChange} className={css["form-controll"]} />
          </div >

     )
}

export default TextInput
