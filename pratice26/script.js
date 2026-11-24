'use strict';

/* ---------- Data ---------- */
const CATS = [
  { id: 'dairy',  name: 'Dairy, Bread & Eggs',  e: '🥛' },
  { id: 'snacks', name: 'Snacks & Munchies',    e: '🍟' },
  { id: 'drinks', name: 'Cold Drinks & Juices', e: '🥤' },
  { id: 'staples',name: 'Atta, Rice & Oil',     e: '🌾' },
  { id: 'instant',name: 'Instant & Frozen',     e: '🍜' },
  { id: 'choc',   name: 'Sweet Tooth',          e: '🍫' },
  { id: 'tea',    name: 'Tea, Coffee & More',   e: '☕' },
  { id: 'care',   name: 'Personal Care',        e: '🧴' },
  { id: 'clean',  name: 'Cleaning Essentials',  e: '🧺' },
  { id: 'fresh',  name: 'Fruits & Vegetables',  e: '🍌' }
];

// Add a real image by setting `img: 'https://…'`; if it fails to load, the emoji (e) shows instead.
const PRODUCTS = [
  { id: 1,  name: 'Amul Taaza Toned Milk',          unit: '500 ml', price: 29,  mrp: 31,  cat: 'dairy',  sub: 'Milk',          e: '🥛' },
  { id: 2,  name: 'Amul Gold Full Cream Milk',      unit: '1 L',    price: 68,  mrp: 72,  cat: 'dairy',  sub: 'Milk',          e: '🥛' },
  { id: 3,  name: 'Harvest Gold White Bread',       unit: '400 g',  price: 45,  mrp: 50,  cat: 'dairy',  sub: 'Bread',         e: '🍞' },
  { id: 4,  name: 'Britannia Brown Bread',          unit: '400 g',  price: 55,  mrp: 60,  cat: 'dairy',  sub: 'Bread',         e: '🍞' },
  { id: 5,  name: 'Farm Fresh Eggs',                unit: '6 pcs',  price: 54,  mrp: 60,  cat: 'dairy',  sub: 'Eggs',          e: '🥚' },
  { id: 6,  name: 'Amul Butter Pasteurised',        unit: '100 g',  price: 58,  mrp: 60,  cat: 'dairy',  sub: 'Butter & Cheese', e: '🧈' },
  { id: 7,  name: 'Amul Processed Cheese Slices',   unit: '200 g',  price: 135, mrp: 150, cat: 'dairy',  sub: 'Butter & Cheese', e: '🧀' },
  { id: 8,  name: "Lay's Magic Masala Chips",       unit: '52 g',   price: 20,  mrp: 20,  cat: 'snacks', sub: 'Chips',         e: '🥔' },
  { id: 9,  name: 'Kurkure Masala Munch',           unit: '90 g',   price: 20,  mrp: 20,  cat: 'snacks', sub: 'Chips',         e: '🌽' },
  { id: 10, name: 'Bingo Mad Angles Achaari',       unit: '66 g',   price: 20,  mrp: 22,  cat: 'snacks', sub: 'Chips',         e: '🔺' },
  { id: 11, name: "Haldiram's Aloo Bhujia",         unit: '200 g',  price: 55,  mrp: 62,  cat: 'snacks', sub: 'Namkeen',       e: '🥨' },
  { id: 12, name: "Haldiram's Moong Dal",           unit: '200 g',  price: 58,  mrp: 65,  cat: 'snacks', sub: 'Namkeen',       e: '🥜' },
  { id: 13, name: 'Coca-Cola Soft Drink',           unit: '750 ml', price: 40,  mrp: 45,  cat: 'drinks', sub: 'Soft Drinks',   e: '🥤' },
  { id: 14, name: 'Thums Up Soft Drink',            unit: '750 ml', price: 40,  mrp: 45,  cat: 'drinks', sub: 'Soft Drinks',   e: '🥤' },
  { id: 15, name: 'Real Fruit Power Mixed Fruit',   unit: '1 L',    price: 110, mrp: 125, cat: 'drinks', sub: 'Juices',        e: '🧃' },
  { id: 16, name: 'Tropicana Orange Delight',       unit: '1 L',    price: 115, mrp: 130, cat: 'drinks', sub: 'Juices',        e: '🍊' },
  { id: 17, name: 'Aashirvaad Shudh Chakki Atta',   unit: '5 kg',   price: 265, mrp: 310, cat: 'staples',sub: 'Atta & Rice',   e: '🌾' },
  { id: 18, name: 'India Gate Basmati Rice',        unit: '1 kg',   price: 128, mrp: 155, cat: 'staples',sub: 'Atta & Rice',   e: '🍚' },
  { id: 19, name: 'Tata Salt Vacuum Evaporated',    unit: '1 kg',   price: 28,  mrp: 30,  cat: 'staples',sub: 'Salt & Oil',    e: '🧂' },
  { id: 20, name: 'Fortune Sunlite Refined Oil',    unit: '1 L',    price: 135, mrp: 155, cat: 'staples',sub: 'Salt & Oil',    e: '🛢️' },
  { id: 21, name: 'Maggi 2-Minute Masala Noodles',  unit: '280 g',  price: 56,  mrp: 60,  cat: 'instant',sub: 'Noodles',       e: '🍜' },
  { id: 22, name: 'Sunfeast Yippee Magic Masala',   unit: '240 g',  price: 50,  mrp: 55,  cat: 'instant',sub: 'Noodles',       e: '🍝' },
  { id: 23, name: 'McCain French Fries',            unit: '420 g',  price: 125, mrp: 160, cat: 'instant',sub: 'Frozen',        e: '🍟' },
  { id: 24, name: 'Cadbury Dairy Milk Silk',        unit: '60 g',   price: 80,  mrp: 90,  cat: 'choc',   sub: 'Chocolates',    e: '🍫' },
  { id: 25, name: 'Kinder Joy',                     unit: '20 g',   price: 40,  mrp: 40,  cat: 'choc',   sub: 'Chocolates',    e: '🥚' },
  { id: 26, name: 'Tata Tea Gold',                  unit: '500 g',  price: 310, mrp: 345, cat: 'tea',    sub: 'Tea',           e: '🍵' },
  { id: 27, name: 'Nescafé Classic Instant Coffee', unit: '100 g',  price: 330, mrp: 380, cat: 'tea',    sub: 'Coffee',        e: '☕' },
  { id: 28, name: 'Dettol Liquid Handwash Refill',  unit: '750 ml', price: 99,  mrp: 120, cat: 'care',   sub: 'Hygiene',       e: '🧴' },
  { id: 29, name: 'Surf Excel Matic Liquid',        unit: '1 L',    price: 220, mrp: 260, cat: 'clean',  sub: 'Laundry',       e: '🧺' },
  { id: 30, name: 'Banana Robusta',                 unit: '6 pcs',  price: 42,  mrp: 50,  cat: 'fresh',  sub: 'Fruits',        e: '🍌' },
  { id: 31, name: 'Onion',                          unit: '1 kg',   price: 38,  mrp: 45,  cat: 'fresh',  sub: 'Vegetables',    e: '🧅' }
];

const ADDRESSES = ['Sector 14, Karnal, Haryana', 'Model Town, Karnal, Haryana', 'Sector 8, Panipat, Haryana', 'Koramangala, Bengaluru, Karnataka'];
const PLACEHOLDERS = ['Search "milk"', 'Search "chips"', 'Search "bread"', 'Search "atta"', 'Search "chocolate"'];

/* ---------- State & storage ---------- */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } }
};
const state = {
  cart: store.get('blinkit_cart', {}),
  address: store.get('blinkit_addr', ADDRESSES[0]),
  user: store.get('blinkit_user', null),
  view: 'home', cat: null, sub: 'All', sort: 'default', q: ''
};

const $ = (s, r = document) => r.querySelector(s);
const byId = id => PRODUCTS.find(p => p.id === +id);
const inr = n => '₹' + n.toLocaleString('en-IN');

/* ---------- Templates ---------- */
const imgTag = p => `<img src="${p.img || ''}" alt="" loading="lazy" onerror="this.remove()">`;
const thumb = p => `<span class="emo">${p.e}</span>${p.img ? imgTag(p) : ''}`;

function ctl(id) {
  const q = state.cart[id] || 0;
  return q
    ? `<div class="step"><button data-a="dec" data-id="${id}" aria-label="Remove one">−</button><span>${q}</span><button data-a="inc" data-id="${id}" aria-label="Add one">+</button></div>`
    : `<button class="add" data-a="inc" data-id="${id}">ADD</button>`;
}

function card(p) {
  const off = Math.round((p.mrp - p.price) / p.mrp * 100);
  return `<article class="card">
    <div class="pimg">${off > 0 ? `<span class="badge">${off}% OFF</span>` : ''}${thumb(p)}</div>
    <span class="eta">⏱ 8 MINS</span>
    <h3 class="ptitle">${p.name}</h3>
    <span class="unit">${p.unit}</span>
    <div class="prow">
      <div class="price">${inr(p.price)}${p.mrp > p.price ? `<s>${inr(p.mrp)}</s>` : ''}</div>
      <div data-ctl="${p.id}">${ctl(p.id)}</div>
    </div></article>`;
}

const shelf = c => `<section class="sec">
  <div class="sec-head"><h2>${c.name}</h2><button class="see-all" data-a="cat" data-cat="${c.id}">see all</button></div>
  <div class="shelf">
    <button class="arrow l" data-a="scroll" data-dir="-1" aria-label="Scroll left">‹</button>
    <div class="track">${PRODUCTS.filter(p => p.cat === c.id).map(card).join('')}</div>
    <button class="arrow r" data-a="scroll" data-dir="1" aria-label="Scroll right">›</button>
  </div></section>`;

/* ---------- Views ---------- */
function renderMain() {
  const m = $('#main');
  if (state.q) {
    const q = state.q.toLowerCase();
    const res = PRODUCTS.filter(p => (p.name + ' ' + p.sub + ' ' + p.cat).toLowerCase().includes(q));
    m.innerHTML = `<div class="bar"><h2>${res.length} result${res.length === 1 ? '' : 's'} for "${state.q.replace(/</g, '&lt;')}"</h2></div>` +
      (res.length ? `<div class="grid">${res.map(card).join('')}</div>`
        : `<div class="empty"><b>🔍</b>Nothing matches that search. Try "milk" or "chips".</div>`);
    return;
  }
  if (state.view === 'cat') return renderCategory(m);
  m.innerHTML = `
    <section class="hero"><div><h1>Fresh Groceries in 8 Mins</h1><p>Milk, snacks, atta and more, at your door.</p>
      <button class="btn" data-a="cat" data-cat="dairy">Shop Now</button></div><div class="big" aria-hidden="true">🛒</div></section>
    <section class="promos">
      <button class="promo p1" data-a="soon"><b>Pharmacy at your doorstep</b><i>💊</i></button>
      <button class="promo p2" data-a="soon"><b>Pet Care supplies</b><i>🐶</i></button>
      <button class="promo p3" data-a="soon"><b>Baby Care</b><i>🍼</i></button>
    </section>
    <section class="sec"><div class="sec-head"><h2>Shop by category</h2></div>
      <div class="cats">${CATS.map(c => `<button class="cat" data-a="cat" data-cat="${c.id}"><span class="tile">${c.e}</span>${c.name}</button>`).join('')}</div></section>
    ${['dairy', 'snacks', 'drinks'].map(id => shelf(CATS.find(c => c.id === id))).join('')}`;
}

function renderCategory(m) {
  const c = CATS.find(x => x.id === state.cat);
  const all = PRODUCTS.filter(p => p.cat === c.id);
  const subs = ['All', ...new Set(all.map(p => p.sub))];
  let list = state.sub === 'All' ? all : all.filter(p => p.sub === state.sub);
  if (state.sort === 'asc') list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === 'desc') list = [...list].sort((a, b) => b.price - a.price);
  m.innerHTML = `<div class="crumb"><button data-a="home">Home</button> / ${c.name}</div>
    <div class="split">
      <nav class="side" aria-label="Sub-categories">${subs.map(s => `<button class="${s === state.sub ? 'on' : ''}" data-a="sub" data-sub="${s}">${s}</button>`).join('')}</nav>
      <div><div class="bar"><h2>${state.sub === 'All' ? c.name : state.sub}</h2>
        <select id="sort" aria-label="Sort products">
          <option value="default" ${state.sort === 'default' ? 'selected' : ''}>Sort: Relevance</option>
          <option value="asc" ${state.sort === 'asc' ? 'selected' : ''}>Price: Low to High</option>
          <option value="desc" ${state.sort === 'desc' ? 'selected' : ''}>Price: High to Low</option></select></div>
        <div class="grid">${list.map(card).join('')}</div></div>
    </div>`;
}

/* ---------- Cart ---------- */
function totals() {
  let items = 0, total = 0, mrp = 0;
  for (const [id, q] of Object.entries(state.cart)) {
    const p = byId(id); if (!p) continue;
    items += q; total += p.price * q; mrp += p.mrp * q;
  }
  const delivery = !items ? 0 : total > 199 ? 0 : 25;
  const handling = items ? 2 : 0;
  return { items, total, savings: mrp - total, delivery, handling, grand: total + delivery + handling };
}

function updateHeader() {
  const t = totals();
  $('#cartLabel').innerHTML = t.items ? `<b>${t.items} item${t.items > 1 ? 's' : ''}</b><b>${inr(t.total)}</b>` : 'My Cart';
  $('#loginBtn').textContent = state.user ? `Hi, +91 ${state.user.slice(0, 2)}••••••${state.user.slice(-2)}` : 'Login';
  $('#addr').textContent = state.address;
}

function renderDrawer() {
  const t = totals(), body = $('#drawerBody'), foot = $('#drawerFoot');
  if (!t.items) {
    body.innerHTML = `<div class="empty"><b>🛒</b>Your cart is empty.<br>Add items to get delivery in 8 minutes.</div>`;
    foot.innerHTML = ''; return;
  }
  const lines = Object.entries(state.cart).map(([id, q]) => {
    const p = byId(id);
    return `<div class="line"><div class="th"><span>${p.e}</span>${p.img ? imgTag(p) : ''}</div>
      <div class="info">${p.name}<small>${p.unit}</small><div class="step" style="display:inline-flex">
        <button data-a="dec" data-id="${id}" aria-label="Remove one">−</button><span>${q}</span><button data-a="inc" data-id="${id}" aria-label="Add one">+</button></div></div>
      <div class="lp">${inr(p.price * q)}</div></div>`;
  }).join('');
  body.innerHTML = `<div class="box">${lines}</div>
    <div class="box"><h3>Bill details</h3>
      <div class="row"><span>Items total</span><span>${inr(t.total)}</span></div>
      <div class="row"><span>Delivery charge</span>${t.delivery ? `<span>${inr(t.delivery)}</span>` : '<span class="free">FREE</span>'}</div>
      <div class="row"><span>Handling charge</span><span>${inr(t.handling)}</span></div>
      <div class="row tot"><span>Grand total</span><span>${inr(t.grand)}</span></div>
      ${t.savings ? `<div class="save">You saved ${inr(t.savings)} on MRP</div>` : ''}
      ${t.delivery ? `<div class="unit" style="margin-top:8px">Add ${inr(200 - t.total)} more for free delivery</div>` : ''}</div>`;
  foot.innerHTML = `<button class="pay" data-a="pay"><span>${inr(t.grand)}<small style="display:block;font-weight:500;font-size:11px">TOTAL</small></span><span>Proceed to Pay →</span></button>`;
}

function change(id, d) {
  const q = Math.max(0, (state.cart[id] || 0) + d);
  q ? state.cart[id] = q : delete state.cart[id];
  store.set('blinkit_cart', state.cart);
  document.querySelectorAll(`[data-ctl="${id}"]`).forEach(el => el.innerHTML = ctl(id));
  updateHeader();
  if ($('#drawer').classList.contains('open')) renderDrawer();
}

/* ---------- UI helpers ---------- */
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2200);
}
function openCart() {
  renderDrawer();
  $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false'); $('#backdrop').classList.add('show');
}
function closeAll() {
  $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true');
  $('#backdrop').classList.remove('show'); $('#modal').classList.remove('show');
}
function modal(html) { $('#modalBox').innerHTML = html; $('#modal').classList.add('show'); const f = $('#modalBox input'); if (f) f.focus(); }
function go(view, cat) {
  state.view = view; state.cat = cat || null; state.sub = 'All'; state.sort = 'default'; state.q = '';
  $('#search').value = ''; closeAll(); renderMain(); window.scrollTo({ top: 0 });
}

/* ---------- Modals ---------- */
const locModal = () => modal(`<h2>Choose delivery location</h2><p>We'll show what can reach you in 8 minutes.</p>
  ${ADDRESSES.map(a => `<button class="addr ${a === state.address ? 'on' : ''}" data-a="set-addr" data-addr="${a}">📍 ${a}</button>`).join('')}`);

const loginModal = () => state.user
  ? modal(`<h2>Hi there 👋</h2><p>Logged in as +91 ${state.user}</p><button class="cta" data-a="logout">Log out</button>`)
  : modal(`<h2>Log in</h2><p>Enter your phone number to get an OTP.</p>
      <input class="field" id="phone" inputmode="numeric" maxlength="10" placeholder="10-digit mobile number">
      <button class="cta" data-a="send-otp">Send OTP</button>`);

function payModal() {
  const t = totals();
  modal(`<div class="center"><div class="tick">✓</div><h2>Order placed!</h2>
    <p>Your ${t.items} item${t.items > 1 ? 's' : ''} (${inr(t.grand)}) will arrive in 8 minutes to ${state.address}.</p>
    <button class="cta" data-a="done">Continue shopping</button></div>`);
}

/* ---------- Event delegation ---------- */
document.addEventListener('click', e => {
  if (e.target.id === 'modal') return closeAll();
  const el = e.target.closest('[data-a]'); if (!el) return;
  const d = el.dataset;
  switch (d.a) {
    case 'inc': change(d.id, 1); break;
    case 'dec': change(d.id, -1); break;
    case 'cat': go('cat', d.cat); break;
    case 'home': e.preventDefault(); go('home'); break;
    case 'sub': state.sub = d.sub; renderMain(); break;
    case 'scroll': { const tr = el.parentElement.querySelector('.track'); tr.scrollBy({ left: d.dir * 600 }); break; }
    case 'open-cart': openCart(); break;
    case 'close-all': closeAll(); break;
    case 'open-loc': locModal(); break;
    case 'set-addr': state.address = d.addr; store.set('blinkit_addr', d.addr); updateHeader(); closeAll(); toast('Location updated'); break;
    case 'open-login': loginModal(); break;
    case 'send-otp': {
      const ph = $('#phone').value.trim();
      if (!/^[6-9]\d{9}$/.test(ph)) return toast('Enter a valid 10-digit mobile number');
      state.pendingPhone = ph;
      modal(`<h2>Enter OTP</h2><p>Sent to +91 ${ph}. Demo: any 4 digits work.</p>
        <input class="field" id="otp" inputmode="numeric" maxlength="4" placeholder="4-digit OTP"><button class="cta" data-a="verify">Verify &amp; log in</button>`);
      break;
    }
    case 'verify':
      if (!/^\d{4}$/.test($('#otp').value)) return toast('Enter the 4-digit OTP');
      state.user = state.pendingPhone; store.set('blinkit_user', state.user); updateHeader(); closeAll(); toast('Logged in'); break;
    case 'logout': state.user = null; store.set('blinkit_user', null); updateHeader(); closeAll(); break;
    case 'pay':
      payModal(); $('#drawer').classList.remove('open'); $('#backdrop').classList.remove('show'); break;
    case 'done':
      state.cart = {}; store.set('blinkit_cart', {}); updateHeader(); closeAll(); renderMain(); break;
    case 'soon': toast('This shelf is coming soon'); break;
  }
});

document.addEventListener('change', e => {
  if (e.target.id === 'sort') { state.sort = e.target.value; renderMain(); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

$('#search').addEventListener('input', e => {
  state.q = e.target.value.trim();
  if (!state.q) state.view = state.view; // falls back to current view
  renderMain();
});

/* ---------- Placeholder cycling ---------- */
let ph = 0;
setInterval(() => {
  const s = $('#search');
  if (document.activeElement === s || s.value) return;
  ph = (ph + 1) % PLACEHOLDERS.length; s.placeholder = PLACEHOLDERS[ph];
}, 2500);

/* ---------- Init ---------- */
updateHeader();
renderMain();