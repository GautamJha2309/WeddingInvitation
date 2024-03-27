const card = document.querySelector('.card-container');

card.addEventListener('click', function() {
  this.classList.toggle('flip');
});
