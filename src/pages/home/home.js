import Header from "../../components/home/header/header";
import Welcome from "../../components/home/welcome/welcome";
import About from "../../components/home/about/about";
import Advantages from "../../components/home/shop/shop";
import Contacts from "../../components/home/contacts/contacts";
import Footer  from "../../components/home/footer/footer";
import Catalog from "../../components/home/catalog/catalog";

export default function Home() {
   return (
      <>
         <Header id="header"/>
         <Welcome id="welcome"/>
         <About id="about"/>
         <Advantages id="shop"/>
         <Catalog id="catalog"/>
         <Contacts id="contacts"/>
         <Footer id="footer"/>
      </>
   );
}
