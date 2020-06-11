const images = document.querySelectorAll('.js-menu img')
console.log(images);

const options = {
  rootMargin: '200px'
}

const obs = new IntersectionObserver(entry, options)

function entry(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(1);
      entry.target.src = entry.target.dataset.img
      observer.unobserve(entry.target)
    }
  });
}
images.forEach(image => obs.observe(image))
