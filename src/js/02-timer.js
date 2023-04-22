// ________________ВАРИАНТ 1__________

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');

const dataDaysEl = document.querySelector('span[data-days]');
const dataHoursEl = document.querySelector('span[data-hours]');
const dataMinutesEl = document.querySelector('span[data-minutes]');
const dataSecondsEl = document.querySelector('span[data-seconds]');

let timeLeft;
//  Кнопка Старт отключена перед выбором даты:
startBtnEl.disabled = true;

startBtnEl.addEventListener("click", changeTime);

function changeTime() {
    
   startBtnEl.disabled = true;
   
    

    const timerId = setInterval(() => {
        const time = convertMs(timeLeft);
        // console.log(time);
        // Присвоение значений времени в "00":
        dataDaysEl.textContent = time.days;
        dataHoursEl.textContent = time.hours;
        dataMinutesEl.textContent = time.minutes;
        dataSecondsEl.textContent = time.seconds;
        timeLeft -= 1000;
        // Проверка и отключение возможности работы таймера в минус:
        if (timeLeft <= 0) {
            clearInterval(timerId);
          inputEl.disabled = false; 
        //  inputEl.removeAttribute('disabled');
            // document.querySelectorAll('.flatpickr-input')[1].removeAttribute('disabled');
      }
          inputEl.disabled = true;
    }, 1000) ;

 }
// Иннициализация библиотеки:
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    timeLeft = selectedDates[0] - Date.now();
      if (timeLeft < 0) {
        //   window.alert("Please choose a date in the future");
          Notiflix.Notify.warning("Please choose a date in the future");
        startBtnEl.disabled = true;
        
          return;
      }
      startBtnEl.disabled = false;
    // startBtnEl.removeAttribute('disabled');
  },
};
flatpickr('#datetime-picker', options);

// Функция пересчета в милисекунды:
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
// Дописываем "0" в ячейках таймера:
function addLeadingZero(value) {
  // Adds 0 if the string is less than two characters
  return String(value).padStart(2, '0');
}


// ________________ВАРИАНТ 2 _____________________
// // Описаний в документації
// import flatpickr from "flatpickr";
// // Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

// const inputEl = document.querySelector('#datetime-picker');
// const startBtnEl = document.querySelector('button[data-start]');
// // 4 шт '00'
// const dataDaysEl = document.querySelector('span[data-days]');
// const dataHoursEl = document.querySelector('span[data-hours]');
// const dataMinutesEl = document.querySelector('span[data-minutes]');
// const dataSecondsEl = document.querySelector('span[data-seconds]');

// let timeLeft;
// //  Кнопка Старт отключена перед выбором даты:
// // startBtnEl.setAttribute('disabled', 'true');
// startBtnEl.disabled = true;
// startBtnEl.addEventListener("click", changeTime);
// function changeTime() {
//     //  Кнопка Старт отключена во время запущенного уже таймера:
//     // startBtnEl.setAttribute('disabled', 'true');
//   startBtnEl.disabled = true;
//     // В инпуте нельзя набрать др дату во время его работы:
//     // inputEl.setAttribute('disabled', 'true');
//   inputEl.disabled = true;
//     // В инпуте флатпикер создал инпут 2 и мы удалили из html элемент, потом обратились к этому дублю и заблокировали ему возможность перезапуска календаря в процессе его работы:
//     // document.querySelectorAll('.flatpickr-input')[1].setAttribute('disabled', 'true');
//     // inputEl.disabled = true;

//     const timerId = setInterval(() => {
//         const time = convertMs(timeLeft);
//         // console.log(time);
//         // Присвоение значений времени в "00":
//         dataDaysEl.textContent = time.days;
//         dataHoursEl.textContent = time.hours;
//         dataMinutesEl.textContent = time.minutes;
//         dataSecondsEl.textContent = time.seconds;
//         timeLeft -= 1000;
//         // Проверка и отключение возможности работы таймера в минус:
//         if (timeLeft <= 0) {
//             clearInterval(timerId);
//             inputEl.removeAttribute('disabled');
//           // inputEl.disabled = folse;
//             // document.querySelectorAll('.flatpickr-input')[1].removeAttribute('disabled');
//         }
//     }, 1000) ;

//  }
// // Иннициализация библиотеки:
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     timeLeft = selectedDates[0] - Date.now();
//       if (timeLeft < 0) {
//         //   window.alert("Please choose a date in the future");
//           Notiflix.Notify.warning("Please choose a date in the future");
//         // startBtnEl.setAttribute('disabled', 'true');
//          startBtnEl.disabled = true;
//           return;
//       }
//       startBtnEl.removeAttribute('disabled');
//       // startBtnEl.disabled = folse;
//   },
// };
// flatpickr('#datetime-picker', options);

// // Функция пересчета в милисекунды:
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }
// // Дописываем "0" в ячейках таймера:
// function addLeadingZero(value) {
//   // Adds 0 if the string is less than two characters
//   return String(value).padStart(2, '0');
// }



// ________________ВАРИАНТ 3______________________
//_____________ КОД ЧУЖОЙ:     ________________

// // Імпортуємо бібліотеки
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// // Отримуємо посилання на елементи
// const startBtn = document.querySelector('[data-start]');
// const datetimePicker = document.querySelector('#datetime-picker');
// const daysElement = document.querySelector('[data-days]');
// const hoursElement = document.querySelector('[data-hours]');
// const minutesElement = document.querySelector('[data-minutes]');
// const secondsElement = document.querySelector('[data-seconds]');


// // Вимикаємо кнопку "Start" за замовчуванням
// startBtn.disabled = true;

// // оголошуємо об'єкт параметрів та обробляємо в ньому події невірної дати
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];
//     const currentDate = new Date();
//     if (selectedDate <= currentDate) {
//       Notiflix.Notify.failure("Please choose a date in the future");
//       startBtn.disabled = true;
//     } else {
//         startBtn.disabled = false;
//     }
//     console.log(selectedDates[0]);
//   },
// };

// // Викликаємо flatpickr
// flatpickr("#datetime-picker", options);

// // Додаємо слухач на кнопку "Start"
// startBtn.addEventListener('click', onStartBtn);

// // Колбек функція слухача
// function onStartBtn () {
//     const selectedDate = new Date(datetimePicker.value);
//     const timerInterval = setInterval(updateTimer, 1000);
//     startBtn.disabled = true;
//     // Колбек функція timerInterval
//     function updateTimer() {
//         const currentDate = new Date();
//         const timeDifference = selectedDate - currentDate;

//         if (timeDifference <= 0) {
//             clearInterval(timerInterval);
//             return;
//         }
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
//         daysElement.textContent = String(days).padStart(2, '0');
//         hoursElement.textContent = String(hours).padStart(2, '0');
//         minutesElement.textContent = String(minutes).padStart(2, '0');
//         secondsElement.textContent = String(seconds).padStart(2, '0');
//     }
// }


// inputEl.disabled = false;
            // inputEl.innerHTML = '';
            // inputEl.setAttribute('disabled', 'true');
            // inputEl.reset();
            // inputEl.value.replase();
            // inpName.reset();