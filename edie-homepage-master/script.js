

const hamburMenuIcon = document.getElementById('hamburger-menu');
const menuList = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu-links');

// creating hamburger onclick animation and menu list appeat when click 
hamburMenuIcon.addEventListener("click", () => {
    hamburMenuIcon.classList.toggle
    ('hamburger-menu-active');

    menuList.classList.toggle('open-nav-menu');
   
});


// for changing onclick hover and active effect on menu items 

navLinks.forEach(li => {
    li.addEventListener('click', () => {
        // Remove "active" class from all li elements
        navLinks.forEach(otherLi => {
            if (otherLi !== li) {
                otherLi.classList.remove('active');
            }
        });

        // Toggle "active" class on the clicked li element
        li.classList.toggle('active');
        // after click on menu items remove the open menu list close 
        menuList.classList.toggle('open-nav-menu');
        // for toggle hamburger menu if any li is clicked
        hamburMenuIcon.classList.toggle('hamburger-menu-active');
    });
});