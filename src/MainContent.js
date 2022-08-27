export default function MainContent() {
   const mainContent = document.createElement('main')
   mainContent.innerHTML = `<h1>MEAT LINE</h1>
<p class="home__description">Some text about how awesome this restaurant is</p>
<button type="button" id="to_menu">Go to menu</button>`
   return mainContent
}
