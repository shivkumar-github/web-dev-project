function showDonationOption() {
    var foodInput = document.getElementById("food-input");
    var moneyImage = document.getElementById("money-image");
    if (document.getElementById("food").checked) {
        foodInput.style.display = "block";
        moneyImage.style.display = "none";
    } else if (document.getElementById("money").checked) {
        foodInput.style.display = "none";
        moneyImage.style.display = "block";
    } else {
        foodInput.style.display = "none";
        moneyImage.style.display = "none";
    }
}
window.onload = function() {
    showDonationOption();
};