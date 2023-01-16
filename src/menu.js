function loadMenuPage() {
  const main = document.getElementById('main');
  main.innerHTML = `<div class="menu" id="menu">
  <div class="menuItem">
            <img src="/images/ramen1.jpeg" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="/images/ramen2.webp" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="/images/ramen3.png" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="/images/ramen4.jpeg" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="/images/ramen5.jpeg" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div></div>`;
}

export default (loadMenuPage);
