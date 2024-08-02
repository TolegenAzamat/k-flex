import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './catalog.css';
import img1 from '../../../img/каталог-1.png'
import img2 from '../../../img/каталог-2.jpg'
import img3 from '../../../img/каталог-3.jpg'
import img4 from '../../../img/каталог-4.png'
import img5 from '../../../img/каталог-5.jpg'
import img6 from '../../../img/каталог-6.png'

export default function Catalog() {
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
         className="catalog"
         ref={ref}
         variants={animationVariants}
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
      >
         <div className="catalog">
            <div className="container">
               <h2 className="catalog_title title2">Каталог</h2>
               <div className="catalog_price">
                  <div className="catalog_price_box_items">
                     <div className="catalog_price_box_item">
                        <div className='catalog_price_box_item_info'>
                           <div className='catalog_price_box_item_name'>
                              Вентиляция и кондиционирование
                           </div>
                           <button className="catalog_price_box_item_btn">
                              <Link
                                 to="contacts"
                                 smooth={true}
                                 offset={-110}
                                 duration={500}
                              >
                                 Узнать цену
                              </Link>
                           </button>
                        </div>
                        <img className="catalog_price_box_item_img" src={img1} alt="" />
                     </div>
                     <div className="catalog_price_box_item">
                        <div className='catalog_price_box_item_info'>
                           <div className='catalog_price_box_item_name'>
                              Инженерная изоляция
                           </div>
                           <button className="catalog_price_box_item_btn">
                              <Link
                                 to="contacts"
                                 smooth={true}
                                 offset={-110}
                                 duration={500}
                              >
                                 Узнать цену
                              </Link>
                           </button>
                        </div>
                        <img className="catalog_price_box_item_img" src={img2} alt="" />
                     </div>
                     <div className="catalog_price_box_item">
                        <div className='catalog_price_box_item_info'>
                           <div className='catalog_price_box_item_name'>
                              Огнезащита
                           </div>
                           <button className="catalog_price_box_item_btn">
                              <Link
                                 to="contacts"
                                 smooth={true}
                                 offset={-110}
                                 duration={500}
                              >
                                 Узнать цену
                              </Link>
                           </button>
                        </div>
                        <img className="catalog_price_box_item_img" src={img3} alt="" />
                     </div>
                  </div>
                  <div className="catalog_price_box_items">
                     <div className="catalog_price_box_item">
                        <div className='catalog_price_box_item_info'>
                           <div className='catalog_price_box_item_name'>
                              Отопление, водоснабжение
                           </div>
                           <button className="catalog_price_box_item_btn">
                              <Link
                                 to="contacts"
                                 smooth={true}
                                 offset={-110}
                                 duration={500}
                              >
                                 Узнать цену
                              </Link>
                           </button>
                        </div>
                        <img className="catalog_price_box_item_img" src={img4} alt="" />
                     </div>
                     <div className="catalog_price_box_item">
                        <div className='catalog_price_box_item_info'>
                           <div className='catalog_price_box_item_name'>
                              Теплоизоляция
                           </div>
                           <button className="catalog_price_box_item_btn">
                              <Link
                                 to="contacts"
                                 smooth={true}
                                 offset={-110}
                                 duration={500}
                              >
                                 Узнать цену
                              </Link>
                           </button>
                        </div>
                        <img className="catalog_price_box_item_img" src={img5} alt="" />
                     </div>
                     <div className="catalog_price_box_item">
                        <div className='catalog_price_box_item_info'>
                           <div className='catalog_price_box_item_name'>
                              Звукоизоляция
                           </div>
                           <button className="catalog_price_box_item_btn">
                              <Link
                                 to="contacts"
                                 smooth={true}
                                 offset={-110}
                                 duration={500}
                              >
                                 Узнать цену
                              </Link>
                           </button>
                        </div>
                        <img className="catalog_price_box_item_img" src={img6} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
}