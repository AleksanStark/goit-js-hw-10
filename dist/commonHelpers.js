import '../assets/modulepreload-polyfill-3cfb730f.js';
import { f as y, i as d } from '../assets/vendor-77e16229.js';
let i, c;
const u = document.querySelector('#datetime-picker'),
  o = document.querySelector('[data-start]'),
  p = document.querySelector('[data-days]'),
  S = document.querySelector('[data-hours]'),
  g = document.querySelector('[data-minutes]'),
  T = document.querySelector('[data-seconds]'),
  b = {
    enableTime: !0,
    time_24hr: !0,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(e) {
      e[0] <= new Date().getTime()
        ? (d.error({
            title: 'Error',
            message: 'Please choose a date in the future',
            position: 'topRight',
          }),
          (o.disabled = !0))
        : ((o.disabled = !1), (i = e[0]));
    },
  };
y('#datetime-picker', b);
const s = e => String(e).padStart(2, '0'),
  C = e => {
    const l = Math.floor(e / 864e5),
      m = Math.floor((e % 864e5) / 36e5),
      h = Math.floor(((e % 864e5) % 36e5) / 6e4),
      f = Math.floor((((e % 864e5) % 36e5) % 6e4) / 1e3);
    return { days: l, hours: m, minutes: h, seconds: f };
  },
  D = e => {
    const { days: n, hours: t, minutes: r, seconds: a } = C(e);
    (p.textContent = s(n)),
      (S.textContent = s(t)),
      (g.textContent = s(r)),
      (T.textContent = s(a));
  },
  q = e => {
    c = setInterval(() => {
      const n = new Date().getTime(),
        t = e - n;
      t <= 0
        ? (clearInterval(c),
          d.success({
            title: 'CountDown Complete',
            message: 'The countdown has reached zero',
            position: 'topRight',
          }),
          (o.disabled = !1),
          (u.disabled = !1))
        : D(t);
    }, 1e3);
  };
o.addEventListener('click', () => {
  (o.disabled = !0), (u.disabled = !0), q(i);
});
//# sourceMappingURL=commonHelpers.js.map
