const ratingCard= document.querySelector(".rating-state");
const thanksCard = document.querySelector(".thank-you-state");
const myRatings = document.querySelectorAll(".ratingBtn");
const submitBtn = document.getElementById("submitBtn");
const ratingValue = document.getElementById("rating");

submitBtn.addEventListener("click", () => {
    ratingCard.style.display = "none";
    thanksCard.classList.remove("hidden");
})


myRatings.forEach((myRating) => {
    myRating.addEventListener("click", () => {
        ratingValue.innerHTML = myRating.innerHTML;
    })
})