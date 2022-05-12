const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");

let isModalPresent= false;
addBtn.addEventListener('click', function () {
    if (!isModalPresent) {
      modalCont.style.display = "flex"; //modal add ho gya screen pe
    } else {
      modalCont.style.display = "none";
    }
    isModalPresent = !isModalPresent;
})

const allPriorityColors = document.querySelectorAll(".priority-color");

allPriorityColors.forEach(function (colorElement) {
  colorElement.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElem) {
        priorityColorElem.classList.remove("active");
    });
      colorElement.classList.add("active");
  });
});