import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.css';

export default function About() {
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
         className="about"
         ref={ref}
         variants={animationVariants}
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
      >
         <div className="about">
            <div className="container">
               <h2 className="about_title">О компании</h2>
               <div className="about_box">
                  <div className="about_text">
                     <h3>Теплоизоляция K-Flex</h3>
                     <p>Современные теплоизоляционные материалы на основе вспененного каучука</p>
                     <Link to="/aboutus"><button className="readmore_btn button">Читать больше...</button></Link>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
}