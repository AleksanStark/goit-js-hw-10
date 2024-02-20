import '../assets/modulepreload-polyfill-3cfb730f.js';
import { f as y, i as d } from '../assets/vendor-77e16229.js';
let i, c;
const u = document.querySelector('#datetime-picker'),
  t = document.querySelector('[data-start]'),
  p = document.querySelector('[data-days]'),
  S = document.querySelector('[data-hours]'),
  b = document.querySelector('[data-minutes]'),
  g = document.querySelector('[data-seconds]');
t.disabled = !0;
const T = {
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
        (t.disabled = !0))
      : ((t.disabled = !1), (i = e[0]));
  },
};
y('#datetime-picker', T);
const s = e => String(e).padStart(2, '0'),
  C = e => {
    const l = Math.floor(e / 864e5),
      m = Math.floor((e % 864e5) / 36e5),
      h = Math.floor(((e % 864e5) % 36e5) / 6e4),
      f = Math.floor((((e % 864e5) % 36e5) % 6e4) / 1e3);
    return { days: l, hours: m, minutes: h, seconds: f };
  },
  D = e => {
    const { days: n, hours: o, minutes: r, seconds: a } = C(e);
    (p.textContent = s(n)),
      (S.textContent = s(o)),
      (b.textContent = s(r)),
      (g.textContent = s(a));
  },
  q = e => {
    c = setInterval(() => {
      const n = new Date().getTime(),
        o = e - n;
      o <= 0
        ? (clearInterval(c),
          d.success({
            title: 'CountDown Complete',
            message: 'The countdown has reached zero',
            position: 'topRight',
          }),
          (t.disabled = !1),
          (u.disabled = !1))
        : D(o);
    }, 1e3);
  };
t.addEventListener('click', () => {
  (t.disabled = !0), (u.disabled = !0), q(i);
});
//# sourceMappingURL=commonHelpers.js.map
