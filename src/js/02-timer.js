// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');
// 4 шт '00'
const dataDaysEl = document.querySelector('span[data-days]');
const dataHoursEl = document.querySelector('span[data-hours]');
const dataMinutesEl = document.querySelector('span[data-minutes]');
const dataSecondsEl = document.querySelector('span[data-seconds]');

let timeLeft;
//  Кнопка Старт отключена перед выбором даты:
startBtnEl.setAttribute('disabled', 'true');

startBtnEl.addEventListener("click", changeTime);
function changeTime() {
    //  Кнопка Старт отключена во время запущенного уже таймера:
    startBtnEl.setAttribute('disabled', 'true');
    // В инпуте нельзя набрать др дату во время его работы:
    inputEl.setAttribute('disabled', 'true');
    // В инпуте флатпикер создал инпут 2 и мы удалили из html элемент, потом обратились к этому дублю и заблокировали ему возможность перезапуска календаря в процессе его работы:
    document.querySelectorAll('.flatpickr-input')[1].setAttribute('disabled', 'true');

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
            inputEl.removeAttribute('disabled');
            document.querySelectorAll('.flatpickr-input')[1].removeAttribute('disabled');
        }
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
      timeLeft = selectedDates[0] - Date.now()
      if (timeLeft < 0) {
        //   window.alert("Please choose a date in the future");
          Notiflix.Notify.warning("Please choose a date in the future");
          startBtnEl.setAttribute('disabled', 'true');
          return;
      }
      startBtnEl.removeAttribute('disabled');
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