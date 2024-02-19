import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = Number(form.delay.value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.state.value === 'fulfilled') {
        resolve('fulfilled');
      } else {
        reject('reject');
      }
    }, delay);
  })
    .then(() =>
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      })
    )
    .catch(() => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
