// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const promiseForm = document.querySelector('.form');
iziToast.settings({
  messageColor: 'white',
  messageSize: '18',
  theme: 'light',
  position: 'topCenter',
  close: false,
  progressBar: false,
});
promiseForm.addEventListener('submit', event => {
  event.preventDefault();
  const delay = promiseForm.elements.delay.value;
  const state = promiseForm.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(value =>
      iziToast.show({
        message: value,
        backgroundColor: '#329932',
      })
    )
    .catch(error =>
      iziToast.show({
        message: error,
        backgroundColor: '#ff7373',
      })
    );
  promiseForm.reset();
});
