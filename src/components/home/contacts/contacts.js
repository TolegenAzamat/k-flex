import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import './contacts.css';
import qrcode from "../../../img/frame.png"

export default function Contacts() {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   const animationVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { 
         opacity: 1, 
         y: 0,
         transition: { 
            duration: 1 
         }
      }
   };

   return (
      <motion.div 
         className="contacts"
         ref={ref}
         variants={animationVariants}
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
      >
         <div className="contacts">
            <div className="container">
               <h2 className="contacts_title title2">Контакты</h2>
               <div className="contacts_box">
                  <div className="contacts_info">
                     <div className="contacts_info_title">По всем оставшимся вопросам и для того чтобы<br/>узнать цены наших продуктов обращайтесь по номерам:</div>
                     <div className="contacts_info_phone">
                        <p><i>Руслан</i>: +7 701 101 7777</p>
                        <p><i>Азамат</i>: +7 771 169 6016</p>
                        <div className='contacts_social'><b>Наши соцсети:</b></div>
                        <div class="contacts-social-seti">
                           <a href="https://wa.me/77711696016" target="_blank" rel="noopener noreferrer"><FaWhatsapp class="whatsapp"/></a>
                           <a href="https://instagram.com/tuligenov_03?igshid=OGQ5ZDc2ODk2ZA==/" target="_blank" rel="noopener noreferrer"><SlSocialInstagram class="inst"/></a>
                        </div>
                     </div>
                     <div className="contacts_info_title">Руководитель компании:</div>
                     <div className="contacts_info_name">Садык Руслан Каиргельдыулы</div>
                  </div>
                  <div className='contacts_img'>
                     <div className="contacts_qr_title">Либо можете отсканировать QR<br/>для перехода на Whatsapp с компанией</div>
                     <img src={qrcode} alt='qrcode'/>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
}