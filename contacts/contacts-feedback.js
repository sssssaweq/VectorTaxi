const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    
    stars.forEach(s => s.classList.remove('selected'));
    
    
    for (let i = 0; i < star.dataset.value; i++) {
      stars[i].classList.add('selected');
    }
  });
});




const submitButton = document.getElementById('send');

submitButton.addEventListener('click', () => {
  const selectedStars = document.querySelectorAll('.star.selected').length;

  if (selectedStars > 0) {
    message= (`Спасибо за ваш отзыв! Вы выбрали ${selectedStars} звезд.`);
  } else {
    message=('Пожалуйста, выберите количество звезд перед отправкой отзыва.');
  }
  showNotification(message);

  function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show'); 
    setTimeout(() => {
        location.reload();
      }, 3000);
    
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
});
