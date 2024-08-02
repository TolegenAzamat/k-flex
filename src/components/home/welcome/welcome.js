import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsChevronDoubleDown } from "react-icons/bs";
import welcome_img from './../../../img/орнаменты.webp';
import './welcome.css';

const Welcome = () => {
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
         className="welcome"
         ref={ref}
         variants={animationVariants}
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
      >
         <div className="container">
            <div className="welcome_info">
               <div className="welcome_img">
                  <img src={welcome_img} alt="logo" />
               </div>
               <div className="welcome_box">
                  <h1 className="welcome_title">Botai<br/>Technologies</h1>
               </div>
            </div>
            <div className="welcome_down_icon">
               <BsChevronDoubleDown className="down_icon"/>
            </div>
         </div>
      </motion.div>
   );
}

export default Welcome;