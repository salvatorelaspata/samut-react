import { motion } from 'framer-motion'
import React, { useState } from 'react'

import DatePicker from '../components/form/DatePicker'
import TextInput from '../components/form/TextInput'
import Select from '../components/form/Select'
import TextArea from '../components/form/TextArea'
import FileUpload from '../components/form/FileUpload'
import Title from '../components/Title'
import Button from '../components/form/Button'

import { proxy, useProxy } from 'valtio'
import { devtools } from 'valtio/utils'

import { item, pagevariants } from './useTransition'
import { PazienteProp } from '../types/CommonType'

let state = proxy({
     id: '',
     nome: '',
     cognome: '',
     data: '',
     sesso: '',
     cellulare: '',
     citta: '',
     residenza: '',
     patologia: '',
     note: '',
     lon: 0,
     lan: 0,
     files: []
});

devtools(state, 'Paziente'); // DEBUG

const Paziente = () => {

     const [file, setFile] = useState("")

     const snapshot = useProxy<PazienteProp>(state, { sync: true })
     // valtio
     const handlerChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
          console.log('asd')
          const { value, name } = event.target;
          //check files
          state = { ...state, [name]: value };
     }

     const handleSubmit = () => {
          console.log('state', JSON.stringify(state));
          console.log('snapshot', JSON.stringify(snapshot));
     }
     return (
          <motion.div variants={pagevariants} initial="exit" exit="exit" animate="enter" >
               <motion.div variants={item} >
                    <Title title="Creazione Paziente" />
               </motion.div>
               <motion.div variants={item} className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                         <TextInput
                              name="nome"
                              labelLeft="Nome"
                              handleChange={handlerChange}
                              value={snapshot.nome} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                         <TextInput
                              name="cognome"
                              labelLeft="Cognome"
                              handleChange={handlerChange}
                              value={snapshot.cognome} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                         <Select
                              name="sesso"
                              labelLeft="Sesso"
                              labelRight=""
                              handleChange={handlerChange}
                              value={snapshot.sesso}
                              options={[{ key: 'm', value: 'Maschio' }, { key: 'f', value: 'Femmina' }]} />

                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                         <DatePicker
                              name="data"
                              labelLeft="Data di Nascita"
                              labelRight="Seleziona"
                              handleChange={handlerChange}
                              value={snapshot.data} />
                    </div>
               </motion.div>
               <motion.div variants={item} className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                         <TextInput
                              name="citta"
                              labelLeft="Città"
                              labelRight=""
                              handleChange={handlerChange}
                              value={snapshot.citta} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                         <TextInput
                              name="residenza"
                              labelLeft="Residenza"
                              labelRight="Indirizzo"
                              handleChange={handlerChange}
                              value={snapshot.residenza} />
                    </div>
               </motion.div>
               <motion.div variants={item} className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                         <TextInput
                              name="patologia"
                              labelLeft="Patologia"
                              labelRight="Specifica la patologia"
                              handleChange={handlerChange}
                              value={snapshot.patologia} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                         <TextArea
                              name="note"
                              labelLeft="Note"
                              labelRight="Note patologia"
                              handleChange={handlerChange}
                              value={snapshot.note} />
                    </div>
               </motion.div>
               <motion.div variants={item} className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                         <FileUpload
                              labelLeft={""}
                              name="files"
                              labelRight={""}
                              handleChange={handlerChange}
                              value={file}
                         />
                    </div>
               </motion.div>
               <motion.div variants={item} className="row" >
                    <div className="col-xs-offset-9 col-xs-3">
                         <Button text="Salva" handleSubmit={handleSubmit} />
                    </div>
               </motion.div>
          </motion.div>
     )
}

export default Paziente;
