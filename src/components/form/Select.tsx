import React from 'react'

import { SelectProp } from '../../types/CommonType'

import css from './Select.module.css';
import formComponent from './common.module.css';


const Select: React.FC<SelectProp> = ({ labelLeft, labelRight, handleChange, value, options, name }) => {
     return (
          <div className={formComponent['form-group']}>
               <label className={css.labelLeft}>{labelLeft}<span className={formComponent.rightLabel}>{labelRight}</span></label>
               <span className={css['custom-dropdown']}>
                    <select className={formComponent['form-controll']} onChange={handleChange} value={value} name={name} >
                         {
                              options.map((op) => {
                                   return (
                                        <option key={op.key} value={op.key}>{op.value}</option>
                                   )
                              })
                         }
                    </select>
               </span>
          </div>

     )
}

export default Select
