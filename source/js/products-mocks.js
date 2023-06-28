const products =[
  {
    popular: true,
    title: 'Малина',
    discription: 'Сливочное мороженое с малиновым джемом',
    price: 310,
    fat: 0,
    src: 'img/content-image/product-card/desktop/raspbery-desktop.png',
    srcset: 'img/content-image/product-card/desktop/raspbery-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/raspbery-desktop.webp 1x, img/content-image/product-card/desktop/raspbery-desktop@2x.webp 2x'
  },
  {
    popular: true,
    title: 'Фисташка',
    discription: 'Фисташковый пломбир с кусочками шоколада',
    price: 340,
    fat: 0,
    src: 'img/content-image/product-card/desktop/pistachio-desktop.png',
    srcset: 'img/content-image/product-card/desktop/pistachio-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/pistachio-desktop.webp 1x, img/content-image/product-card/desktop/pistachio-desktop@2x.webp 2x'
  },
  {
    popular: true,
    title: 'Черника',
    discription: 'Крем-брюле с черничным джемом',
    price: 330,
    fat: 0,
    src: 'img/content-image/product-card/desktop/blueberry-desktop.png',
    srcset: 'img/content-image/product-card/desktop/blueberry-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/blueberry-desktop.webp 1x, img/content-image/product-card/desktop/raspbery-desktop@2x.webp 2x'
  },
  {
    popular: true,
    title: 'Бабл-гам',
    discription: 'Ванильный пломбир со сладкой посыпкой',
    price: 310,
    fat: 8,
    src: 'img/content-image/product-card/desktop/bubblegum-desktop.png',
    srcset: 'img/content-image/product-card/desktop/bubblegum-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/bubblegum-desktop.webp 1x, img/content-image/product-card/desktop/raspbery-desktop@2x.webp 2x'
  },
  {
    popular: true,
    title: 'Ежевика',
    discription: 'Сливочное мороженое с ежевичным джемом',
    price: 330,
    fat: 9,
    src: 'img/content-image/product-card/desktop/blackberry-desktop.png',
    srcset: 'img/content-image/product-card/desktop/blackberry-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/blackberry-desktop.webp 1x, img/content-image/product-card/desktop/blackberry-desktop@2x.webp 2x'
  },
  {
    popular: false,
    title: 'Банан',
    discription: 'Сливочный пломбир с банановым вкусом',
    price: 340,
    fat: 35,
    src: 'img/content-image/product-card/desktop/banana-desktop.png',
    srcset: 'img/content-image/product-card/desktop/banana-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/banana-desktop.webp 1x, img/content-image/product-card/desktop/banana-desktop@2x.webp 2x'
  },
  {
    popular: false,
    title: 'Шоколадка',
    discription: 'Классический шоколадный пломбир',
    price: 270,
    fat: 20,
    src: 'img/content-image/product-card/desktop/chocolate-desktop.png',
    srcset: 'img/content-image/product-card/desktop/chocolate-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/chocolate-desktop.webp 1x, img/content-image/product-card/desktop/chocolate-desktop@2x.webp 2x'
  },
  {
    popular: false,
    title: 'Клубничка',
    discription: 'Сливочный пломбир с клубничным вкусом',
    price: 300,
    fat: 5,
    src: 'img/content-image/product-card/desktop/strawberry-desktop.png',
    srcset: 'img/content-image/product-card/desktop/strawberry-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/strawberry-desktop.webp 1x, img/content-image/product-card/desktop/strawberry-desktop@2x.webp 2x'
  },
  {
    popular: false,
    title: 'Лимон',
    discription: 'Освежающий лимонный сорбет',
    price: 310,
    fat: 0,
    src: 'img/content-image/product-card/desktop/lemon-desktop.png',
    srcset: 'img/content-image/product-card/desktop/lemon-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/lemon-desktop.webp 1x, img/content-image/product-card/desktop/lemon-desktop@2x.webp 2x'
  },
  {
    popular: false,
    title: 'Ментол',
    discription: 'Сливочный пломбир с ментоловым сиропом',
    price: 320,
    fat: 0,
    src: 'img/content-image/product-card/desktop/menthol-desktop.png',
    srcset: 'img/content-image/product-card/desktop/menthol-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/menthol-desktop.webp 1x, img/content-image/product-card/desktop/menthol-desktop@2x.webp 2x'
  },
  {
    popular: false,
    title: 'Орешек',
    discription: 'Фисташковый пломбир с шоколадным сиропом',
    price: 360,
    fat: 37,
    src: 'img/content-image/product-card/desktop/nut-desktop.png',
    srcset: 'img/content-image/product-card/desktop/nut-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/nut-desktop.webp 1x, img/content-image/product-card/desktop/nut-desktop@2x.webp 2x'
  },
  {
    popular: false,
    title: 'Крем-брюле',
    discription: 'Классическое крем-брюле',
    price: 360,
    fat: 37,
    src: 'img/content-image/product-card/desktop/creme-brulee-desktop.png',
    srcset: 'img/content-image/product-card/desktop/creme-brulee-desktop@2x.png 2x',
    mediaDesktop: 'img/content-image/product-card/desktop/creme-brulee-desktop.webp 1x, img/content-image/product-card/desktop/creme-brulee-desktop@2x.webp 2x'
  }

];

export {products};
