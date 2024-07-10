document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.nav__list');

    // Toggle navigation menu visibility on hamburger button click
    navToggle.addEventListener('click', function() {
        navList.classList.remove('nav__list--deactive');
        navList.classList.toggle('nav__list--active');   
        // navList.style.display = 'block';
    });

    navList.addEventListener('click', function() {
        navList.classList.remove('nav__list--active');
        navList.classList.remove('nav__list--deactive');
        // navList.classList.toggle('nav__list--deactive');  
    });
 
});

// Pop up button
document.getElementById('open-popup-btn').addEventListener('click', function() {
    document.getElementById('popup-container').style.display = 'flex';
});

document.getElementById('close-popup-btn').addEventListener('click', function() {
    document.getElementById('popup-container').style.display = 'none';
});

// Optional: Close the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
    const popupContainer = document.getElementById('popup-container');
    if (event.target == popupContainer) {
        popupContainer.style.display = 'none';
    }
});

// State of the art service
document.getElementById('open-popup-btn__stateoftheart').addEventListener('click', function() {
    document.getElementById('popup-container__stateoftheart').style.display = 'flex';
});

document.getElementById('close-popup-btn__stateoftheart').addEventListener('click', function() {
    document.getElementById('popup-container__stateoftheart').style.display = 'none';
});

// Group classes service
document.getElementById('open-popup-btn__groupclasses').addEventListener('click', function() {
    document.getElementById('popup-container__groupclasses').style.display = 'flex';
    
});

document.getElementById('close-popup-btn__groupclasses').addEventListener('click', function() {
    document.getElementById('popup-container__groupclasses').style.display = 'none';
});
// 

// Personal Trainer
document.getElementById('open-popup-btn__personaltrainer').addEventListener('click', function() {
    document.getElementById('popup-container__personaltrainer').style.display = 'flex';
    
});

document.getElementById('close-popup-btn__personaltrainer').addEventListener('click', function() {
    document.getElementById('popup-container__personaltrainer').style.display = 'none';
});

// Spa Service
document.getElementById('open-popup-btn__spaservice').addEventListener('click', function() {
    document.getElementById('popup-container__spaservice').style.display = 'flex';
    
});

document.getElementById('close-popup-btn__spaservice').addEventListener('click', function() {
    document.getElementById('popup-container__spaservice').style.display = 'none';
});

// Private Locker
document.getElementById('open-popup-btn__privatelocker').addEventListener('click', function() {
    document.getElementById('popup-container__privatelocker').style.display = 'flex';
    
});

document.getElementById('close-popup-btn__privatelocker').addEventListener('click', function() {
    document.getElementById('popup-container__privatelocker').style.display = 'none';
});
// 

// 24 hours access
document.getElementById('open-popup-btn__24hours').addEventListener('click', function() {
    document.getElementById('popup-container__24hours').style.display = 'flex';
    
});

document.getElementById('close-popup-btn__24hours').addEventListener('click', function() {
    document.getElementById('popup-container__24hours').style.display = 'none';
});
// 

// Optional: Close the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
    const popupContainerInfo = document.getElementsByClassName('popup-container__informational');
    for (let i = 0; i < popupContainerInfo.length; i++) {
        if (event.target == popupContainerInfo[i]) {
            popupContainerInfo[i].style.display = 'none';
        }
    }
});


// Transition to view upon scroll
document.addEventListener('DOMContentLoaded', function() {
    const transitionView = document.querySelectorAll('.transition__view');

    function checkVisibility() {
        transitionView.forEach(transitionView => {
            const rect = transitionView.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                transitionView.classList.add('visible');
            } else {
                transitionView.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case some elements are in view on load
});

// Function to handle the bottom style change
function teamNameSquareChange(e) {
    const items = document.querySelectorAll('.team__name-square');
    if (e.matches) {
        items.forEach(item => {
            item.classList.add('bottom-style');
        });
    } else {
        items.forEach(item => {
            item.classList.remove('bottom-style');
        });
    }
}

function teamNamePortraitChange(e) {
    const items = document.querySelectorAll('.team__name-portrait');
    if (e.matches) {
        items.forEach(item => {
            item.classList.add('bottom-style');
        });
    } else {
        items.forEach(item => {
            item.classList.remove('bottom-style');
        });
    }
}

// Define the media query
const mediaQuery = window.matchMedia('(max-width: 380px)');

// Initial check
teamNamePortraitChange(mediaQuery);
teamNameSquareChange(mediaQuery);

// Listen for changes in the media query
mediaQuery.addListener(teamNamePortraitChange);
mediaQuery.addListener(teamNameSquareChange);

// // Function to resize font size of the square photo
// function teamNameSquareChangeProperty(e) {
//     const items = document.querySelectorAll('.team__name-square');
//     if (e.matches) {
//         items.forEach(item => {
//             item.style['font-size'] = '0.75em';
//         });
//     } else {
//         items.forEach(item => {
//             item.style['font-size'] = '1em';
//         });
//     }
// }

// const mediaQueryChange = window.matchMedia('(min-width: 770px) and (max-width: 970px)');
// teamNameSquareChangeProperty(mediaQueryChange);
// mediaQueryChange.addListener(teamNameSquareChangeProperty);
// 