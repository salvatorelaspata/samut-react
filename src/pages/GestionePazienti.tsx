import React from 'react'

import { OptionProp } from '../types/CommonType';

import FileUpload from '../components/form/FileUpload';
import Select from '../components/form/Select';
import TextArea from '../components/form/TextArea';
import Button from '../components/form/Button';
import Title from '../components/Title';

import { motion } from "framer-motion"
import { item, pagevariants } from './useTransition';

import { proxy, useProxy } from 'valtio'
import { devtools } from 'valtio/utils'

interface formProp {
     idPaziente: string,
     note: string,
     file: string
}

let state = proxy({
     idPaziente: '',
     note: '',
     file: ''
});

devtools(state, 'Paziente'); // DEBUG

// https://codepen.io/Scribblerockerz/pen/qdWzJw
const GestionePazienti: React.FC = () => {
     const snapshot = useProxy<formProp>(state, { sync: true })

     // const [paziente, setPaziente] = useState<string>("");
     const handleSubmit = () => {
          console.log('pressButton');
          console.log(snapshot);
     }

     const handlerChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
          const { value, name } = event.target;
          //check files
          state = { ...state, [name]: value };
     }

     const options: OptionProp[] = [
          { key: '', value: '' },
          { key: 'Options1', value: 'Opzione 1' },
          { key: 'Options2', value: 'Opzione 2' },
          { key: 'Options3', value: 'Opzione 3' },
          { key: 'Options4', value: 'Opzione 4' }
     ];

     return (
          <motion.div variants={pagevariants} initial="exit" exit="exit" animate="enter" >
               <motion.div variants={item} >
                    <Title title="Gestione Paziente" />
               </motion.div>
               {/* COMPONENT/SELECT - Paziente*/}
               <motion.div variants={item}>
                    <Select
                         name="paziente"
                         labelLeft="Paziente"
                         labelRight="Seleziona Paziente"
                         handleChange={handlerChange}
                         value={snapshot.idPaziente} options={options} />
               </motion.div>
               {/* COMPONENT/INPUT - Descrizione */}
               <motion.div variants={item}>
                    <TextArea
                         name="descrFile"
                         labelLeft="Note"
                         labelRight="Inserisci Nota"
                         handleChange={handlerChange}
                         value={snapshot.note} />
               </motion.div>
               {/* COMPONENT/INPUT - Uploader */}
               <motion.div variants={item}>
                    <FileUpload
                         name="file"
                         labelLeft={""}
                         labelRight={""}
                         handleChange={handlerChange}
                         value={snapshot.file} />
               </motion.div>
               <motion.div variants={item}>
                    <Button text="Salva" handleSubmit={handleSubmit} />
               </motion.div>
          </motion.div>
     )
}


export default GestionePazienti
