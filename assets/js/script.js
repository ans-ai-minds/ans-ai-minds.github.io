document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const feedbacks = document.querySelectorAll(".feedback-box");

    function showNextFeedback() {
        feedbacks[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % feedbacks.length;
        feedbacks[currentIndex].classList.add("active");
    }

    setInterval(showNextFeedback, 4000); // Change slide every 4 seconds
});
