import '../assets/modulepreload-polyfill-3cfb730f.js';
import { i } from '../assets/vendor-77e16229.js';
const t = document.querySelector('.form');
t.addEventListener('submit', function (s) {
  s.preventDefault();
  const e = Number(t.delay.value);
  return new Promise((o, r) => {
    setTimeout(() => {
      t.state.value === 'fulfilled' ? o('fulfilled') : r('reject');
    }, e);
  })
    .then(() =>
      i.success({
        message: `✅ Fulfilled promise in ${e}ms`,
        position: 'topRight',
      })
    )
    .catch(() => {
      i.error({
        message: `❌ Rejected promise in ${e}ms`,
        position: 'topRight',
      });
    });
});
//# sourceMappingURL=commonHelpers2.js.map
