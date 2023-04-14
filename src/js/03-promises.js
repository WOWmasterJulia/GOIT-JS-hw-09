import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '130px',
  opacity: 1,
  // ...
});




const formEl = document.querySelector('.form');
formEl.addEventListener('submit', genPromise);

function genPromise(evt) {
  evt.preventDefault();
  let delay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amount = Number(evt.currentTarget.elements.amount.value);
  
  for (let i = 1; i <= amount; i += 1) {
    // 
    
    // Надо вызывать ф-ю createPromise:
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay = delay + step;
  }
  // evt.currentTarget.reset();
  // console.log(delay, step, amount);
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
};

