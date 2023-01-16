function loadHomePage() {
  const main = document.getElementById('main');
  main.innerHTML = `<div class="home" id="home"><p>Best Ramen in the hidden leaf </p>
    <p>Made with passion since the first great ninja war!</p>
    <img src="/images/teuchi.png" alt="Sage of six bowls">
    <p>Order online or visit us!</p></div>`;
}

export default (loadHomePage);
