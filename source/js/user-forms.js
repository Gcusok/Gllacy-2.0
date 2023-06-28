// newsletter-form
const newsletterForm = document.querySelector('.newsletter__form');
const newsletterInput = newsletterForm.querySelector('.newsletter__field');

// delivery-form

const deliveryForm = document.querySelector('.delivery__form');
const deliveryInputs = deliveryForm.querySelectorAll('input');

newsletterForm.addEventListener('submit', (evt) => {
evt.preventDefault();
newsletterInput.value='';
}
);

deliveryForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  deliveryInputs.forEach((input) => {
    input.value='';
  })
})
