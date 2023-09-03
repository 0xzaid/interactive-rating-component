document.addEventListener("DOMContentLoaded", function () {
  const numberDivs = document.querySelectorAll(".number");
  const submitBtn = document.querySelector(".submit-btn");
  const card1 = document.querySelector(".card-1");
  const card2 = document.querySelector(".card-2");
  const ratingResult = document.querySelector(".rating-result");

  numberDivs.forEach((div) => {
    div.addEventListener("click", () => {
      // Remove the 'selected' class from all number divs
      numberDivs.forEach((n) => n.classList.remove("selected"));

      // Add the 'selected' class to the clicked div
      div.classList.add("selected");
    });
  });

  submitBtn.addEventListener("click", () => {
    const selectedNumberDiv = document.querySelector(".selected");
    if (selectedNumberDiv) {
      const numberValue = selectedNumberDiv.getAttribute("data-value");
      console.log("Selected Number Value:", numberValue);

      // Set visibility of card-1 and card-2
      card1.style.visibility = "hidden";
      card2.style.visibility = "visible";

      // Set rating result in card-2
      ratingResult.textContent = `You selected ${numberValue} out of 5`;
    } else {
      console.log("Please select a number first.");
    }
  });
});