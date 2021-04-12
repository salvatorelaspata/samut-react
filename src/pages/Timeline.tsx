import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Select from '../components/form/Select'
import { OptionProp } from '../types/CommonType';
import css from './Timeline.module.css';
import Title from '../components/Title';
import { item, pagevariants } from './useTransition';

/* const imgSrc = require('../icons/doc.svg'); */
interface Props {

}


const options: OptionProp[] = [
     { key: '', value: '' },
     { key: 'Options1', value: 'Opzione 1' },
     { key: 'Options2', value: 'Opzione 2' },
     { key: 'Options3', value: 'Opzione 3' },
     { key: 'Options4', value: 'Opzione 4' }
];
// https://feathericons.com/
// https://codepen.io/Ratko_Solaja/pen/ztxkw
const Timeline: React.FC<Props> = (props) => {
     const [paziente, setPaziente] = useState<string>(""); // sostiturire con struttura paziente

     const handleChangePaziente = (event: React.ChangeEvent<HTMLSelectElement>) => {
          debugger;
          setPaziente(event.target.value);
     }
     return (
          < motion.div variants={pagevariants} initial="exit" exit="exit" animate="enter" >
               <motion.div variants={item} >
                    <Title title="Timeline" />
               </motion.div>
               <motion.div variants={item}>
                    <Select name="paziente" labelLeft="Paziente" labelRight="Seleziona Paziente" handleChange={handleChangePaziente} value={paziente} options={options} />
               </motion.div>
               <motion.div variants={item}>
                    <section className={css['conference-timeline']} data-simplebar>
                         <div className={css['timeline-start']}>2020</div>
                         <div className={css['conference-center-line']}></div>
                         <div className={css['conference-timeline-content']}>
                              {/* Article */}
                              <div className={css['timeline-article']}>
                                   {/* [ ] > */}
                                   <div className={css['content-left-container']}>
                                        <div className={css['content-left']}>
                                             <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!
                                                  <span className={css['article-number']}>
                                                       <img src="/icons/note.svg" alt="note" width="44px" /></span>
                                             </p>
                                        </div>
                                        <span className={css['timeline-author']}>John Doe</span>

                                        <div className={css['content-left']}>
                                             <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!
                                                  <span className={css['article-number']}>
                                                       <img src="/icons/note.svg" alt="note" width="44px" /></span>
                                             </p>
                                        </div>
                                        <span className={css['timeline-author']}>John Doe</span>
                                   </div>
                                   {/* End [ ] > */}
                                   {/* < [ ] */}
                                   <div className={css['content-right-container']}>
                                        <div className={css['content-right']}>
                                             <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is.
                                                  <span className={css['article-number']}>
                                                       <img src="/icons/doc.svg" alt="doc" width="44px" />
                                                  </span>
                                             </p>
                                        </div>
                                        <span className={css['timeline-author']}>John Doe</span>
                                   </div>
                                   {/* End < [ ] */}
                                   {/* (_) */}
                                   <div className={css['meta-date']}>
                                        <span className={css['date']}>18</span>
                                        <span className={css['month']}>APR</span>
                                   </div>
                                   {/* End (_) */}
                                   {/* End Article */}
                              </div>
                         </div>
                         <div className={css['timeline-end']}>2021</div>
                    </section>
               </motion.div>
          </motion.div >
     )
}

export default Timeline
