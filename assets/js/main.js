const navbarSelector = 'nav#navbar';
const navbar = document.querySelector(navbarSelector);
const dropdownMenu = document.querySelector('.dropdown__item >.dropdown__container');
const main1 = document.querySelector('main');
const dropdown_arrow = document.querySelector('.dropdown__arrow');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 5) {
        dropdownMenu.style.top = '4rem';
    } else {
        dropdownMenu.style.top = '5.5rem';
    }
});

function addStyles(selector) {
    const styles = `
${navbarSelector} { 
    transition: height 0.5s ease-in-out;
}

${navbarSelector}.small {
    height: 64px;
}
`
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
}

addStyles(navbarSelector);

window.addEventListener('scroll', () => {
    window.scrollY >= 5
        ? navbar.classList.add('small')
        : navbar.classList.remove('small')
})

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        console.log('heeee');
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')
const rotateDropdownArrow = (item) => {
    const dropdownArrow = item.querySelector('.dropdown__arrow');
    dropdownArrow.classList.toggle('rotate-180');
};

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    // 2. Select each button click
    dropdownButton.addEventListener('click', () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')
        rotateDropdownArrow(item)
        // toggle.classList.toggle('show-arrow')
        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown)
        }
    })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else {
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query reaches 1118px
    if (mediaQuery.matches) {
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)


window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");
    loader.classList.add("preloader--hidden");
    loader.addEventListener("transitioned", () => {
        document.body.removeChild(loader);
    });
});
