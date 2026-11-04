// Fixed campaign dates, Vietnam time. Shared by the static site and license server.
export const PROMOTION = Object.freeze({ id: 'launch-2026-11', enabled: false, startsAt: '2026-11-02T00:00:00+07:00', endsAt: '2026-11-09T00:00:00+07:00', price: 599000, regularPrice: 999000 });
export const BASE_PRICES = Object.freeze({ month1: 299000, month3: 599000, month6: 699000, month12: 999000 });
// Fixed international prices (USD), rounded up from the VND reference on 2026-11-02.
export const USD_PRICES = Object.freeze({ month1: 12, month3: 24, month6: 28, month12: 40 });
export const USD_PROMOTION_PRICE = 24;
export const promotionActive = (now = Date.now()) => PROMOTION.enabled && now >= Date.parse(PROMOTION.startsAt) && now < Date.parse(PROMOTION.endsAt);
export function priceFor(plan, now = Date.now(), currency = 'VND') {
 if (!Object.hasOwn(BASE_PRICES,plan)) throw new Error('Unknown plan');
 if (currency !== 'USD' && currency !== 'VND') throw new Error('Unsupported currency');
 const offer = plan === 'month12' && promotionActive(now);
 return currency === 'USD' ? (offer ? USD_PROMOTION_PRICE : USD_PRICES[plan]) : (offer ? PROMOTION.price : BASE_PRICES[plan]);
}
export const promotionNote = (now = Date.now()) => promotionActive(now) ? 'Ưu đãi 7 ngày đầu: 02–08/11/2026, kết thúc lúc 23:59 ngày 08/11 theo giờ Việt Nam. Sau ưu đãi: 999.000đ.' : 'Giá thông thường: 999.000đ. Thanh toán một lần.';
export function watchPricing(render) {
  let timer;
  const update = () => { clearTimeout(timer); render(); const now = Date.now(); const next = [Date.parse(PROMOTION.startsAt), Date.parse(PROMOTION.endsAt)].find(t => t > now); timer = setTimeout(update, next ? Math.min(next - now + 50, 86400000) : 86400000); };
  document.addEventListener('visibilitychange', () => { if (!document.hidden) update(); }); update();
}
