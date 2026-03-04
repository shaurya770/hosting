// scripts.js
function showSection(sectionId) {
    // Get all tab content elements and buttons
    var contents = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');

    // Hide all tab content and remove active class from all buttons
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the selected tab content and add active class to the clicked button
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Initially show the first section
document.addEventListener('DOMContentLoaded', function() {
    showSection('vision');
});

//slideshow


/*document.addEventListener("DOMContentLoaded", function () {
    const img1 = document.querySelector('.img-1');
    const img2 = document.querySelector('.img-2');
    let isImg1Visible = true;

    // Display the first image immediately
    img1.style.display = "block";
    img1.style.animation = "fadeIn 0.5s forwards";

    // Start the interval after 2 seconds
    setTimeout(() => {
        setInterval(() => {
            if (isImg1Visible) {
                img1.style.animation = "fadeOut 0.5s forwards";
                img2.style.animation = "fadeIn 0.5s forwards";
                setTimeout(() => {
                    img1.style.display = "none";
                    img2.style.display = "block";
                }, 500); // Match the animation duration
            } else {
                img2.style.animation = "fadeOut 0.5s forwards";
                img1.style.animation = "fadeIn 0.5s forwards";
                setTimeout(() => {
                    img2.style.display = "none";
                    img1.style.display = "block";
                }, 500); // Match the animation duration
            }
            isImg1Visible = !isImg1Visible;
        }, 4000); // Adjust the interval as needed
    }, 2000); // Delay the start of the interval to show the first image immediately
});*/



