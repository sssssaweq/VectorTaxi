function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('img-econom-show');
       change.target.classList.add('main-pre-show');
       change.target.classList.add('cart-show');
       change.target.classList.add('arrow-norot-show');
       change.target.classList.add('arrow-rotate-show');
       change.target.classList.add('yellowpreim-show');
       change.target.classList.add('econom-show');
       change.target.classList.add('komfort-show');
       change.target.classList.add('img-kamri-show');
       change.target.classList.add('img-class-show');
       change.target.classList.add('class-show');
       change.target.classList.add('about-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let element = document.querySelectorAll('.img-econom');
  let element2 = document.querySelectorAll('.main-pre');
  let element3 = document.querySelectorAll('.cart');
  let element4 = document.querySelectorAll('.arrow-norot');
  let element5 = document.querySelectorAll('.arrow-rotate');
  let element6 = document.querySelectorAll('.yellowpreim');
  let element7 = document.querySelectorAll('.econom');
  let element8 = document.querySelectorAll('.komfort');
  let element9 = document.querySelectorAll('.img-kamri');
  let element10 = document.querySelectorAll('.img-class');
  let element11 = document.querySelectorAll('.class');
  let element12 = document.querySelectorAll('.about');

  
  for (let elm of element) {
    observer.observe(elm);}

  for (let elm of element2) {
    observer.observe(elm);}
 
  for (let elm of element3) {
    observer.observe(elm);
  for (let elm of element4) {
    observer.observe(elm);}
  for (let elm of element5) {
    observer.observe(elm);}
  for (let elm of element5) {
    observer.observe(elm);}
  for (let elm of element6) {
    observer.observe(elm);}
  for (let elm of element7) {
    observer.observe(elm);}
  for (let elm of element8) {
    observer.observe(elm);}
  for (let elm of element9) {
    observer.observe(elm);}
  for (let elm of element10) {
    observer.observe(elm);}
  for (let elm of element11) {
    observer.observe(elm);} 
  for (let elm of element12) {
    observer.observe(elm);} 
  }


