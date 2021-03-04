const navbarSlider = () => {
    const bars = document.querySelector('.bars');
    const menuLinks = document.querySelector('.menu-item');
    const links = document.querySelectorAll('.menu-item li')

    bars.addEventListener('click', () => {
        menuLinks.classList.toggle('nav-active');
        bars.classList.toggle('cross');
        links.forEach((value, index) => {
           if(value.style.animation) {
            value.style.animation = '';
           } else {
            value.style.animation = `navSlides 1s ease forwards ${index/7 + 0.2}s`
           }
        })
        
    })

    
}

navbarSlider();