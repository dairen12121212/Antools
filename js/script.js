    //ссылки

const link = document.querySelectorAll('.link'),
      linkActive = document.querySelectorAll('.link_active');


function linkShow () {
    link.forEach((item, i)  => {
        item.addEventListener('mouseover', ()=> {
            linkActive[i].classList.add('link__active');
        });
    });
}


    
function linkHide () {
    link.forEach((item, i)  => {
        item.addEventListener('mouseout', ()=> {
            linkActive[i].classList.remove('link__active');
        });
    });
}
linkShow();
linkHide();



    //слайдер

const slides = document.querySelectorAll ('.slider__item'),
      left = document.querySelector('.left'),
      right = document.querySelector('.right'),
      divider = document.querySelectorAll('.slider__divider');

let slideIndex = 1;

showSlides(slides, slideIndex);

function showSlides (n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => {
        item.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';

    

}

function plusSlides (n) {
    showSlides(slideIndex += n);
    
}

left.addEventListener('click', () => {
    plusSlides(-1);
    hideDivider(slideIndex - 1);
    showDivider(slideIndex - 1);
    
});

right.addEventListener('click', () => {
    plusSlides(+1);
    hideDivider(slideIndex - 1);
    showDivider(slideIndex - 1);
});


function hideDivider () {
    divider.forEach(item => {
        item.classList.remove('active');
    });
}

function showDivider (i) {
    divider[i].classList.add('active');
}


//menu 
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.overlay'),
      menuLinks = document.querySelectorAll('.menu__link');

function showMenu () {

    hamburger.addEventListener('click' , () => {
        menu.classList.toggle('menu_active');
        overlay.classList.toggle('overlay_active');

        
        if (menu.classList.contains('menu_active')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    });
    
}

function closeMenu () {
    overlay.addEventListener('click', () => {
        menu.classList.remove('menu_active');
        overlay.classList.remove('overlay_active');
        

        if (menu.classList.contains('menu_active')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    });
}

function closeMenuLink () {
    menuLinks.forEach(item => {
        item.addEventListener('click', ()=> {
            menu.classList.remove('menu_active');
            overlay.classList.remove('overlay_active');

            if (menu.classList.contains('menu_active')) {
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'scroll';
            }
        });
    });
}

showMenu();
closeMenu();
closeMenuLink();










