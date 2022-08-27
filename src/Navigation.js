export default function Navigation() {
   const navigation = document.createElement('nav')
   navigation.innerHTML = `<ul class="navigation">
<div class="nav__link"><a id="home">HOMEPAGE</a></div>
<div class="nav__link"><a id="menu">MENU</a></div>
<div class="nav__link"><a id="history">HISTORY</a></div>
</ul>`;
   return navigation
}

