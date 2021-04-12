import React from 'react'
import { InputProp } from '../../types/CommonType'

import css from './common.module.css'

const FileUpload: React.FC<InputProp> = ({ handleChange, labelLeft, labelRight, value, name }) => {
     return (
          <div className={css['form-group'] + ' ' + css['file-area']}>

               <label className={css.labelLeft}>{labelLeft || 'File'}<span className={css.rightLabel}>{labelRight || 'Seleziona il file da importare'}</span></label>
               <input type="file" onChange={handleChange} required multiple value={value} name={name} />
               <div className={css['file-dummy']}>
                    <div className={css.success}>Hai selezionato il file</div>
                    <div className={css.default}>Seleziona un file...</div>
               </div>
          </div >

     )
}

export default FileUpload
