const body = document.querySelector('.page__body');
const slider = document.querySelector('.slider');
const chosenItem = slider.querySelector('.slider__item-chosen');
const sliderItems = slider.querySelectorAll('.slider__item');
const sliderItemWrapper = slider.querySelector('.slider__item-chosen-wrapper');
const circleImage = chosenItem.querySelector('.slider__item-circle');
const prevButton = slider.querySelector('.slider-button--prev');
const nextButton = slider.querySelector('.slider-button--next');
const paginationItems = document.querySelectorAll('.gallery__paginator-button');

const themeBody = [
  {
    class: 'page__body--theme-pink',
    circle: '#ffcbd8'
  },
  {
    class: 'page__body--theme-blue',
    circle: '#9fc8ff'
  },
  {
    class: 'page__body--theme-yellow',
    circle: '#fcdc92'
  }
];

const imagesArr = [...sliderItems];
let sliderCount = 0;

const isValidSlide = () => {
    if(sliderCount >= sliderItems.length) {
      return sliderCount = 0;
    };
    if (sliderCount < 0) {
      return sliderCount = sliderItems.length - 1
    };
  }

const clianerSlide = (sliderCount) => {
  body.classList.remove(themeBody[sliderCount].class);
  slider.appendChild(imagesArr[sliderCount]);
  sliderItemWrapper.innerHTML = "";
}

const renderSlider = (sliderCount) => {
  body.classList.add(themeBody[sliderCount].class);
  circleImage.style.backgroundColor = themeBody[sliderCount].circle;
  chosenItem.appendChild(imagesArr[sliderCount]);
}


const swiperSlide = (operations) => {
  isValidSlide();
  clianerSlide(sliderCount);
  operations === 'plus' ?
  sliderCount++
  : sliderCount--;
  isValidSlide();
  renderSlider(sliderCount);
  pagination(sliderCount);
}

const nextSlide = () => {
  swiperSlide('plus');
}

const prevSlide = () => {
  swiperSlide('minus');
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

const pagination = (index) => {
  paginationItems.forEach(item => item.classList.remove('gallery__paginator-button--active'));
  paginationItems[index].classList.add('gallery__paginator-button--active');
}

paginationItems.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clianerSlide(sliderCount);
    sliderCount = index;
    pagination(sliderCount);
    renderSlider(index);
  })
})
