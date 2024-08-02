import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './shop.css';
import icon1 from '../../../img/icon_best-price_.png'
import icon2 from '../../../img/icon_dostavka_.png'
import icon3 from '../../../img/icon_garantii-kachestva_.png'
import icon4 from '../../../img/Storage-PNG-File.png'

export default function Shop() {
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
         className="shop"
         ref={ref}
         variants={animationVariants}
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
      >
         <div className="container">
            <h2 className="shop_title title2">Приемущества</h2>
            <div className="shop_price">
               <div className="shop_price_box_items">
                  <div className="shop_price_box_item">
                     <div className="shop_price_box_item_icon"><img src={icon1} alt='icon'/></div>
                     <div className="shop_price_box_item_text">Выгодные цены</div>
                  </div>
                  <div className="shop_price_box_item">
                     <div className="shop_price_box_item_icon"><img src={icon2} alt='icon'/></div>
                     <div className="shop_price_box_item_text">Быстрая поставка на объект</div>
                  </div>
               </div>
               <div className="shop_price_box_items">
                  <div className="shop_price_box_item">
                     <div className="shop_price_box_item_icon"><img src={icon3} alt='icon'/></div>
                     <div className="shop_price_box_item_text">Гарантия качества</div>
                  </div>
                  <div className="shop_price_box_item">
                     <div className="shop_price_box_item_icon"><img src={icon4} alt='icon'/></div>
                     <div className="shop_price_box_item_text">Наличие товара на складе</div>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
}