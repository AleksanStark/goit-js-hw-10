import '../assets/modulepreload-polyfill-3cfb730f.js';
import { i as s } from '../assets/vendor-77e16229.js';
const i = document.querySelector('.form');
i.addEventListener('submit', function (o) {
  o.preventDefault();
  const t = Number(i.delay.value);
  return new Promise((e, r) => {
    setTimeout(() => {
      i.state.value === 'fulfilled' ? e(t) : r(t);
    }, t);
  })
    .then(e =>
      s.success({
        message: `✅ Fulfilled promise in ${e}ms`,
        position: 'topRight',
      })
    )
    .catch(e => {
      s.error({
        message: `❌ Rejected promise in ${e}ms`,
        position: 'topRight',
      });
    });
});
//# sourceMappingURL=commonHelpers2.js.map
