import Notiflix from 'notiflix';
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  if (shouldResolve) {
    resolve("Yes");
  } else {
    reject("No");
  }
}

// promise
//   .then(value => console.log(value)) 
//   .catch(error => console.log(error))

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });