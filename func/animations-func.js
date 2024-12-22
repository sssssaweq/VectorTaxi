function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('yellowpreim-show');

      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let element = document.querySelectorAll('.yellowpreim');

  
  for (let elm of element) {
    observer.observe(elm);}


