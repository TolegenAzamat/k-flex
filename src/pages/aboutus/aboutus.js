import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './aboutus.css';
import sertificat1 from "../../img/Sert-pojar-PE-PE-FRIGO-PE-COMPACT-PE-METAL-until-31.08.2025_Страница_1.jpg"
import sertificat2 from "../../img/Sert-pojar-ST-SOLAR-HT-ECO-AIR-IGO-EC-__-16.12.2026_Страница_1.jpg"
import sertificat3 from "../../img/Gigiena_ST_SOLAR-HT_ECO_AIR_IGO_Страница_1.jpg"

const containerVariants = {
   hidden: { opacity: 0, y: -50 },
   visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
         duration: 2 
      }
   }
};

export default function Test() {
   const [modalOpen, setModalOpen] = useState(false);
   const [modalImgSrc, setModalImgSrc] = useState('');

   useEffect(() => {
      window.scrollTo(0, 0); // Прокрутка страницы наверх при загрузке
   }, []);

   const openModal = (imgSrc) => {
      setModalImgSrc(imgSrc);
      setModalOpen(true);
      document.body.style.overflow = 'hidden';
   };

   const closeModal = () => {
      setModalOpen(false);
      setModalImgSrc('');
      document.body.style.overflow = 'auto';
   };

   return (
      <>
         <div className="container">
            <div className="aboutus_title_box">
               <h2 className="aboutus_title">О нас</h2>
               <Link to="/"><button className="aboutus_button button">Назад на главную</button></Link>
            </div>
            <motion.div 
               className="aboutus"
               initial="hidden"
               animate="visible"
               variants={containerVariants}
            >
               <div className="aboutus_box">
                  <div className="aboutus_text">
                     <p>Компания ТОО «Botai Technologies» успешно занимается поставкой и внедрением передовых изоляционных материалов для инженерных систем, для систем кондиционирования и вентиляции, систем конструктивной огнезащиты, систем тепло- и звукоизоляции в строительстве.</p>
                     <div className="service_text">
                        <h3 className='aboutus_title_2'>Качественный сервис</h3>
                        <ul>
                           <li>Полное погружение в специфику Вашего бизнеса.</li>
                           <li>Гарантируем индивидуальный подход, высокие результаты и качественное обслуживание.</li>
                           <li>Персональный менеджер, который всегда держит Вас в курсе работ и консультирует по всем вопросам.</li>
                           <li>Обучаем Вас и Ваших сотрудников.</li>
                           <li>Отлаженные бизнес-процессы и четкая организационная среда.</li>
                           <li>Непрерывно обучаемся и развиваем профессиональные навыки.</li>
                        </ul>
                     </div>
                  </div>
                  <div className="aboutus_sertificat">
                     <h3 className="aboutus_title_2">Сертификаты</h3>
                     <div className='aboutus_sertificat_box'>
                        <div className="sertificat_info" onClick={() => openModal(sertificat1)}>
                           <img src={sertificat1} alt="Сертификат" />
                           <h3>Сертификат №1</h3>
                        </div>
                        <div className="sertificat_info" onClick={() => openModal(sertificat2)}>
                           <img src={sertificat2} alt="Сертификат" />
                           <h3>Сертификат №2</h3>
                        </div>
                        <div className="sertificat_info" onClick={() => openModal(sertificat3)}>
                           <img src={sertificat3} alt="Сертификат" />
                           <h3>Сертификат №3</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>

         {modalOpen && (
            <div className="modal" onClick={closeModal}>
               <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                  <span className="close_button" onClick={closeModal}>&times;</span>
                  <img src={modalImgSrc} alt="Сертификат" />
               </div>
            </div>
         )}    
      </>
   );
}
