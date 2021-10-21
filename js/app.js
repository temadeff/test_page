

if (module.hot) {
  module.hot.accept();
}

// include

$(() => {
  const includes = $('[data-include]');
  $.each(includes, function () {
    const file = `./views/${$(this).data('include')}.html`;
    $(this).load(file);
  });
});

// navbar

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = `${navbar_height}px`;
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});


// faq
