import React from 'react'
import { InputProp } from '../../types/CommonType'

import css from './common.module.css'
import cssDatePicker from './DatePicker.module.css'

const DatePicker: React.FC<InputProp> = ({ labelLeft, labelRight, value, handleChange, name }) => {
     return (
          <div>
               <label className={css.labelLeft}>{labelLeft}<span className={css.rightLabel}>{labelRight}</span></label>
               <input type="date" value={value} name={name} onChange={handleChange} className={css["form-controll"] + ' ' + cssDatePicker["data-picker"]} />
          </div >
     )
}

export default DatePicker
