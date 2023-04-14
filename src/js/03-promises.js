import Notiflix from 'notiflix';

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// const formEl = document.querySelector('.form');
// // const  input= document.querySelector('.form delay');

// const createPromise = (position, delay) => {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
  
//     if (shouldResolve) {
//       resolve("Yes");
//     } else {
//       reject("No");
//     }
//     return
//   });
// }

// createPromise()
//   .then(value => console.log(value))
//   .catch(error => console.log(error));



function El(first, delay, amount) {
return new Promise((resolve, reject) => {
const param = createPromise(2, 1500)
});
}
El(3, 500, 4)
  .then(value => console.log(value))
  .catch(error => console.log(error));

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });