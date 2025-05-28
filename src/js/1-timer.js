import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector(".button");
const input = document.querySelector("#datetime-picker");


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

startButton.disabled = true;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

if()