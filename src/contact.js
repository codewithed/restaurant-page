function loadContactPage() {
  const main = document.getElementById('main');
  main.innerHTML = `<div class="contact" id="contact">
  <img src="images/konoha.jpeg" alt="Location: The hidden leaf village">
  <p class="contactInfo">Visit us at The Hidden Leaf Village (Konohagakure) or order online!</p>
  </div>`;
}

export default (loadContactPage);
