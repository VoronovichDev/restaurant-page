export default function Menu() {
   const menu = document.createElement('main')
   menu.classList.add('menu')
   menu.innerHTML = `<h1>Main Menu</h1>
<div class="dishes">
   <div class="dish">
      <h2 class="dish__name">Chicken</h2>
      <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore explicabo
         earum, fugiat repudiandae voluptatem temporibus cum rerum impedit</p>
      <div class="image"></div>
      <p class="price">15$</p>
   </div>
   <hr>
   <div class="dish">
      <h2 class="dish__name">Pork</h2>
      <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore explicabo
         earum, fugiat repudiandae voluptatem temporibus cum rerum impedit</p>
      <div class="image"></div>
      <p class="price">20$</p>
   </div>
   <hr>
   <div class="dish">
      <h2 class="dish__name">Beef</h2>
      <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore explicabo
         earum, fugiat repudiandae voluptatem temporibus cum rerum impedit</p>
      <div class="image"></div>
      <p class="price">25$</p>
   </div>
</div>`
   return menu
}
