import React, { useState } from 'react'
import FileUpload from '../components/FileUpload';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import './Upload.css';

interface Props { }

// https://codepen.io/Scribblerockerz/pen/qdWzJw
const Upload: React.FC<Props> = () => {

     const handleChangePaziente = (event: React.ChangeEvent<HTMLInputElement>) => {
          debugger;
          setPaziente(event.target.value);
     }

     const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
          debugger;
          setFile(event.target.value);
     }

     const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
          debugger;
          setNote(event.target.value);
     }

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          debugger;
     }

     const [paziente, setPaziente] = useState<string>(""); // sostiturire con struttura paziente
     const [note, setNote] = useState<string>("");
     const [file, setFile] = useState<string>("");

     return (
          <div>
               {/* form gestito qua  */}
               <form method="post" onSubmit={handleSubmit}>
                    <h1><strong>File Uploaderr</strong></h1>

                    {/* COMPONENT/SELECT - Paziente*/}
                    <Select labelLeft="Paziente" labelRight="Seleziona Paziente" handleChange={handleChangePaziente} value={paziente} />

                    {/* COMPONENT/INPUT - Descrizione */}
                    <TextArea labelLeft="Note" labelRight="Inserisci Nota" handleChange={handleChangeTextArea} value={note} />

                    {/* COMPONENT/INPUT - Uploader */}
                    <FileUpload value={file} handleChange={handleChangeFile} />

                    <div className="form-group">
                         <button type="submit">Upload images</button>
                    </div>
               </form>
          </div >
     )
}

export default Upload
