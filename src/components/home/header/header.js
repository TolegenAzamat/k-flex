import { Link } from "react-scroll";
import logo from './../../../img/логотип.png'
import './header.css';

export default function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header_content">
               <Link
                  to="welcome"
                  smooth={true}
                  offset={-100}
                  duration={500}
               >
                  <div className="header_company_name">
                     <img src={logo} alt='logo'/>
                  </div>
               </Link>
               <nav className="header_menu">
                  <ul className="header_menu_item">
                     <Link
                        to="about"
                        smooth={true}
                        offset={-100}
                        duration={500}
                     >
                        <li className="header_menu_list">
                           О компании
                        </li>
                     </Link>
                     <Link
                           to="shop"
                           smooth={true}
                           offset={-100}
                           duration={500}
                        >
                        <li className="header_menu_list">
                           Приемущества
                        </li>
                     </Link>
                     <Link
                           to="catalog"
                           smooth={true}
                           offset={-100}
                           duration={500}
                        >
                        <li className="header_menu_list">
                           Каталог
                        </li>
                     </Link>
                     <Link
                        to="contacts"
                        smooth={true}
                        offset={-100}
                        duration={500}
                     >
                        <li className="header_menu_list">
                           Контакты
                        </li>
                     </Link>
                  </ul>
                  {/* <div className="account_button"><VscAccount /></div> */}
               </nav>
            </div>
         </div>
      </header>
   );
}