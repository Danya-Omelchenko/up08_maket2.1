let menu = document.querySelector("header .burger-menu");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});

window.addEventListener('resize', function(){
    if (this.window.innerWidth > 375 && menu.classList.contains('show-menu')){
        menu.classList.remove("show-menu");
        menuToggle.classList.remove("active");
    }
});
//Мобильная версия
const slider = document.querySelector('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = Array.from(slider.querySelectorAll('li'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider();

//Стандартная версия
let listImgslide = document.querySelectorAll('.avtov');
const btnRight = document.querySelector('.next-button');
const sliderBlock = document.querySelector('.slider');
const btnLeft = document.querySelector('.prev-button');

btnRight.addEventListener('click', () =>{
    listImgslide = document.querySelectorAll('.avtov');
    console.log();
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = listImgslide[0].children[0].src;
    img.classList.add('avto');
    li.classList.add('avtov');
    li.appendChild(img);
    sliderBlock.removeChild(listImgslide[0]);
    sliderBlock.appendChild(li);
})
btnLeft.addEventListener('click', () =>{
    listImgslide = document.querySelectorAll('.avtov');
    console.log();
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = listImgslide[0].children[0].src;
    img.classList.add('avto');
    li.classList.add('avtov');
    li.appendChild(img);
    sliderBlock.removeChild(listImgslide[0]);
    sliderBlock.appendChild(li);
})
