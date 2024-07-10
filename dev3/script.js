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