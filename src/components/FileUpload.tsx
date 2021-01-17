import React from 'react'

interface Props {
     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
     value: string
}

const FileUpload: React.FC<Props> = ({ handleChange, value }) => {
     return (
          <div className="form-group file-area">
               <label>File <span>Seleziona il file da importare</span></label>
               <input type="file" value={value} onChange={handleChange} required multiple />
               <div className="file-dummy">
                    <div className="success">Hai selezionato il file</div>
                    <div className="default">Seleziona un file...</div>
               </div>
          </div>

     )
}

export default FileUpload
