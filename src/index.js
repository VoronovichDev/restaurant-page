import Footer from './Footer'
import Navigation from './Navigation'
import MainContent from "./MainContent"
import Menu from "./Menu"

const content = document.querySelector('#content')


const renderHomePage = () => {
   content.innerHTML = ''
   content.appendChild(Navigation())
   content.appendChild(MainContent())
   content.appendChild(Footer())
}

const renderMenuPage = () => {
   content.innerHTML = ''
   content.appendChild(Navigation())
   content.appendChild(Menu())
   content.appendChild(Footer())
}


document.addEventListener("click", (e) => {
   const link = e.target.id;

   switch (link) {
      case 'home': renderHomePage();
         break
      case 'menu':
      case 'to_menu':
         renderMenuPage();
         break
   }
});


renderHomePage()
