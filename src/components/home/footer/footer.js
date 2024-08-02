import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './footer.css';

export default function Footer() {
   return (
      <div className="footer">
         <div className="container">
            <div className="footer_company">
               <p>Botai Technologies</p>
            </div>
         </div>
      </div>
   );
}