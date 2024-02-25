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
  const delay = Number(promiseForm.elements.delay.value);
  const state = promiseForm.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(value =>
      iziToast.show({
        message: `✅ Fulfilled promise in ${value}ms`,
        backgroundColor: '#329932',
      })
    )
    .catch(error =>
      iziToast.show({
        message: `❌ Rejected promise in ${error}ms`,
        backgroundColor: '#ff7373',
      })
    );
  promiseForm.reset();
});
