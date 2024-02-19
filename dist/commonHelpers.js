import '../assets/modulepreload-polyfill-3cfb730f.js';
import { f, i as c } from '../assets/vendor-77e16229.js';
let d;
const i = document.querySelector('#datetime-picker'),
  s = document.querySelector('[data-start]'),
  y = document.querySelector('[data-days]'),
  p = document.querySelector('[data-hours]'),
  S = document.querySelector('[data-minutes]'),
  g = document.querySelector('[data-seconds]'),
  T = {
    enableTime: !0,
    time_24hr: !0,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(e) {
      e[0] <= new Date().getTime()
        ? (c.error({
            title: 'Error',
            message: 'Please choose a date in the future',
            position: 'topRight',
          }),
          (s.disabled = !1))
        : (d = e[0]);
    },
  };
f('#datetime-picker', T);
const n = e => String(e).padStart(2, '0'),
  C = e => {
    const u = Math.floor(e / 864e5),
      l = Math.floor((e % 864e5) / 36e5),
      m = Math.floor(((e % 864e5) % 36e5) / 6e4),
      h = Math.floor((((e % 864e5) % 36e5) % 6e4) / 1e3);
    return { days: u, hours: l, minutes: m, seconds: h };
  },
  D = e => {
    const { days: o, hours: t, minutes: r, seconds: a } = C(e);
    (y.textContent = n(o)),
      (p.textContent = n(t)),
      (S.textContent = n(r)),
      (g.textContent = n(a));
  },
  b = e => {
    setInterval(() => {
      const o = new Date().getTime(),
        t = e - o;
      t <= 0
        ? (c.success({
            title: 'CountDown Complete',
            message: 'The countdown has reached zero',
            position: 'topRight',
          }),
          (s.disabled = !1),
          (i.disabled = !1))
        : D(t);
    }, 1e3);
  };
s.addEventListener('click', () => {
  (s.disabled = !0), (i.disabled = !0), b(d);
});
//# sourceMappingURL=commonHelpers.js.map
