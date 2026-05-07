// ============================================
// DeskaTech — Main Application Script
// ============================================

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
let savedTheme;
try { savedTheme = localStorage.getItem('deska-theme'); } catch(e) { savedTheme = null; }
if (!savedTheme) {
  savedTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('deska-theme', next); } catch(e) {}
});

// ===== PRODUCT DATA =====
const PRODUCTS = [
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    spec: '256GB · Sierra Blue · Unlocked',
    category: 'Phones',
    type: 'buynow',
    price: 599,
    condition: 'Excellent',
    badgeClass: 'badge-excellent',
    rating: 4.8,
    reviews: 142,
    battery: '92%',
    model: 'A2483',
    storage: '256 GB',
    color: 'Sierra Blue',
    seller: 'DeskaTech Workshop',
    svg: `<svg viewBox="0 0 200 280"><rect x="50" y="20" width="100" height="240" rx="20" fill="#5e7a92" stroke="#1A1815" stroke-width="1"/><rect x="56" y="35" width="88" height="210" rx="12" fill="#0d0c0a"/><rect x="80" y="40" width="40" height="6" rx="3" fill="#222"/><rect x="62" y="50" width="76" height="180" rx="6" fill="#1a3a5a" opacity="0.6"/><rect x="118" y="40" width="22" height="35" rx="3" fill="#0d0c0a"/><circle cx="125" cy="50" r="3" fill="#1A1815"/><circle cx="135" cy="50" r="3" fill="#1A1815"/><circle cx="125" cy="60" r="3" fill="#1A1815"/><circle cx="135" cy="60" r="3" fill="#1A1815"/></svg>`
  },
  {
    id: 'macbook-2022',
    name: 'MacBook Air M2',
    spec: '13" · 16GB / 512GB · Midnight',
    category: 'Laptops',
    type: 'auction',
    price: 899,
    bidCount: 14,
    endTime: Date.now() + (2*24*60*60*1000) + (14*60*60*1000),
    condition: 'Like-New',
    badgeClass: 'badge-likenew',
    rating: 4.9,
    reviews: 98,
    battery: '89%',
    model: 'A2681',
    storage: '512 GB',
    color: 'Midnight',
    seller: 'DeskaTech Workshop',
    svg: `<svg viewBox="0 0 240 200"><rect x="20" y="160" width="200" height="10" rx="2" fill="#1A1815" opacity="0.3"/><path d="M30 160L210 160L215 50L25 50Z" fill="#1A1815"/><rect x="35" y="58" width="170" height="95" rx="2" fill="#0d0c0a"/><rect x="40" y="64" width="50" height="2" fill="#C8412B"/><rect x="40" y="70" width="80" height="1.5" fill="white" opacity="0.4"/><rect x="40" y="76" width="60" height="1.5" fill="white" opacity="0.3"/><circle cx="170" cy="100" r="14" fill="none" stroke="white" stroke-width="0.6" opacity="0.3"/></svg>`
  },
  {
    id: 'galaxy-s21',
    name: 'Samsung Galaxy S21',
    spec: '128GB · Phantom Gray',
    category: 'Phones',
    type: 'buynow',
    price: 299,
    condition: 'Fair',
    badgeClass: 'badge-fair',
    rating: 4.4,
    reviews: 67,
    battery: '78%',
    model: 'SM-G991U',
    storage: '128 GB',
    color: 'Phantom Gray',
    seller: 'Verified Reseller',
    svg: `<svg viewBox="0 0 200 280"><rect x="50" y="20" width="100" height="240" rx="18" fill="#3a3a3a" stroke="#1A1815" stroke-width="1"/><rect x="56" y="28" width="88" height="224" rx="12" fill="#0d0c0a"/><rect x="62" y="34" width="76" height="212" rx="6" fill="#222"/><circle cx="100" cy="42" r="3" fill="#0d0c0a"/><rect x="118" y="40" width="20" height="32" rx="2" fill="#1A1815"/><circle cx="124" cy="48" r="3" fill="#444"/><circle cx="132" cy="48" r="3" fill="#444"/><circle cx="124" cy="56" r="3" fill="#444"/></svg>`
  },
  {
    id: 'ipad-pro-11',
    name: 'iPad Pro 11"',
    spec: '256GB · Wi-Fi · Space Gray',
    category: 'Tablets',
    type: 'auction',
    price: 450,
    bidCount: 9,
    endTime: Date.now() + (12*60*60*1000),
    condition: 'Like-New',
    badgeClass: 'badge-likenew',
    rating: 4.7,
    reviews: 53,
    battery: '94%',
    model: 'A2377',
    storage: '256 GB',
    color: 'Space Gray',
    seller: 'DeskaTech Workshop',
    svg: `<svg viewBox="0 0 200 260"><rect x="20" y="20" width="160" height="220" rx="10" fill="#3a3a3a" stroke="#1A1815" stroke-width="1"/><rect x="28" y="28" width="144" height="204" rx="4" fill="#0d0c0a"/><rect x="34" y="34" width="132" height="192" rx="2" fill="#1a3a5a" opacity="0.4"/><rect x="40" y="44" width="40" height="2" fill="#C8412B"/></svg>`
  },
  {
    id: 'airpods-pro',
    name: 'AirPods Pro (2nd Gen)',
    spec: 'USB-C · MagSafe Case',
    category: 'Audio',
    type: 'buynow',
    price: 199,
    condition: 'Excellent',
    badgeClass: 'badge-excellent',
    rating: 4.9,
    reviews: 211,
    battery: 'New cells',
    model: 'A2968',
    storage: '—',
    color: 'White',
    seller: 'DeskaTech Workshop',
    svg: `<svg viewBox="0 0 200 200"><ellipse cx="100" cy="120" rx="60" ry="35" fill="white" stroke="#1A1815" stroke-width="1"/><line x1="100" y1="85" x2="100" y2="155" stroke="#1A1815" stroke-width="0.8" opacity="0.4"/><circle cx="55" cy="60" r="22" fill="white" stroke="#1A1815" stroke-width="1"/><ellipse cx="55" cy="78" rx="6" ry="14" fill="white" stroke="#1A1815" stroke-width="0.8"/><circle cx="145" cy="60" r="22" fill="white" stroke="#1A1815" stroke-width="1"/><ellipse cx="145" cy="78" rx="6" ry="14" fill="white" stroke="#1A1815" stroke-width="0.8"/></svg>`
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    spec: '128GB · Midnight · Unlocked',
    category: 'Phones',
    type: 'buynow',
    price: 519,
    condition: 'Good',
    badgeClass: 'badge-good',
    rating: 4.6,
    reviews: 89,
    battery: '85%',
    model: 'A2649',
    storage: '128 GB',
    color: 'Midnight',
    seller: 'DeskaTech Workshop',
    svg: `<svg viewBox="0 0 200 280"><rect x="50" y="20" width="100" height="240" rx="20" fill="#1a1a1a" stroke="#1A1815" stroke-width="1"/><rect x="56" y="35" width="88" height="210" rx="12" fill="#0d0c0a"/><rect x="80" y="40" width="40" height="6" rx="3" fill="#222"/><rect x="62" y="50" width="76" height="180" rx="6" fill="#2a2a3a" opacity="0.7"/><rect x="118" y="40" width="20" height="20" rx="3" fill="#0d0c0a"/><circle cx="124" cy="50" r="2.5" fill="#444"/><circle cx="132" cy="50" r="2.5" fill="#444"/></svg>`
  },
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    spec: 'M1 Pro · 16GB / 512GB · Silver',
    category: 'Laptops',
    type: 'auction',
    price: 1199,
    bidCount: 22,
    endTime: Date.now() + (5*24*60*60*1000) + (3*60*60*1000),
    condition: 'Excellent',
    badgeClass: 'badge-excellent',
    rating: 4.8,
    reviews: 76,
    battery: '91%',
    model: 'A2442',
    storage: '512 GB',
    color: 'Silver',
    seller: 'Verified Reseller',
    svg: `<svg viewBox="0 0 240 200"><rect x="20" y="160" width="200" height="10" rx="2" fill="#1A1815" opacity="0.3"/><path d="M30 160L210 160L215 50L25 50Z" fill="#c0c0c0" opacity="0.9"/><rect x="35" y="58" width="170" height="95" rx="2" fill="#0d0c0a"/><rect x="40" y="64" width="50" height="2" fill="#C8412B"/><rect x="40" y="70" width="100" height="1.5" fill="white" opacity="0.4"/><rect x="40" y="76" width="70" height="1.5" fill="white" opacity="0.3"/><circle cx="170" cy="100" r="14" fill="none" stroke="white" stroke-width="0.6" opacity="0.3"/></svg>`
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5',
    spec: 'Noise Cancelling · Black',
    category: 'Audio',
    type: 'buynow',
    price: 249,
    condition: 'Excellent',
    badgeClass: 'badge-excellent',
    rating: 4.7,
    reviews: 134,
    battery: 'New cells',
    model: 'WH-1000XM5',
    storage: '—',
    color: 'Black',
    seller: 'DeskaTech Workshop',
    svg: `<svg viewBox="0 0 200 200"><ellipse cx="50" cy="110" rx="22" ry="28" fill="#1a1a1a" stroke="#1A1815" stroke-width="1"/><ellipse cx="50" cy="110" rx="14" ry="20" fill="#0d0c0a"/><ellipse cx="150" cy="110" rx="22" ry="28" fill="#1a1a1a" stroke="#1A1815" stroke-width="1"/><ellipse cx="150" cy="110" rx="14" ry="20" fill="#0d0c0a"/><path d="M50 82Q100 30 150 82" fill="none" stroke="#1a1a1a" stroke-width="8" stroke-linecap="round"/></svg>`
  }
];

// ===== STATE =====
let cart = [];
let wishlist = new Set();
let currentFilter = 'all';

// ===== UTILITIES =====
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function formatTime(ms) {
  if (ms <= 0) return 'Ended';
  const d = Math.floor(ms / (24*60*60*1000));
  const h = Math.floor((ms % (24*60*60*1000)) / (60*60*1000));
  const m = Math.floor((ms % (60*60*1000)) / (60*1000));
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function showToast(msg) {
  const t = $('#toast');
  $('#toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ===== PRODUCT GRID =====
function renderGrid() {
  const grid = $('#grid');
  grid.innerHTML = '';
  const filtered = PRODUCTS.filter(p => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'auction') return p.type === 'auction';
    if (currentFilter === 'buynow') return p.type === 'buynow';
    return p.category === currentFilter;
  });
  filtered.forEach((p, i) => {
    const isAuction = p.type === 'auction';
    const card = document.createElement('div');
    card.className = 'product reveal';
    card.style.transitionDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <div class="product-badges">
          <span class="badge ${p.badgeClass}">${p.condition}</span>
          ${isAuction ? '<span class="badge badge-auction">Auction</span>' : ''}
        </div>
        <button class="wishlist-btn ${wishlist.has(p.id)?'active':''}" data-id="${p.id}" aria-label="Add to wishlist">
          <svg fill="${wishlist.has(p.id)?'currentColor':'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <div class="product-img">${p.svg}</div>
      </div>
      <div class="product-info">
        <div class="product-meta-top"><span>${p.category}</span><span>★ ${p.rating}</span></div>
        <div class="product-name">${p.name}</div>
        <div class="product-spec">${p.spec}</div>
        <div class="product-price-row">
          <div>
            <span class="product-price-label">${isAuction ? 'Current bid' : 'Buy now'}</span>
            <span class="product-price">$${p.price}</span>
          </div>
          ${isAuction ? `<div class="auction-time"><span class="auction-time-label">Ends</span><span data-end="${p.endTime}">${formatTime(p.endTime-Date.now())}</span></div>` : `<div class="auction-time"><span class="auction-time-label">Free shipping</span></div>`}
        </div>
      </div>`;
    card.addEventListener('click', e => {
      if (e.target.closest('.wishlist-btn')) { e.stopPropagation(); toggleWishlist(p.id, e.target.closest('.wishlist-btn')); return; }
      openProductModal(p.id);
    });
    grid.appendChild(card);
  });
  observeReveals();
}

function toggleWishlist(id, btn) {
  if (wishlist.has(id)) { wishlist.delete(id); btn.classList.remove('active'); btn.querySelector('svg').setAttribute('fill','none'); }
  else { wishlist.add(id); btn.classList.add('active'); btn.querySelector('svg').setAttribute('fill','currentColor'); showToast('Saved to wishlist'); }
}

// ===== FILTERS =====
function filterCategory(cat) {
  currentFilter = cat;
  $$('.pill').forEach(p => p.classList.toggle('active', p.dataset.filter === cat));
  renderGrid();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

$$('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    currentFilter = pill.dataset.filter;
    $$('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    renderGrid();
  });
});

// ===== PRODUCT MODAL =====
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const isAuction = p.type === 'auction';
  $('#pdp-content').innerHTML = `
    <button class="modal-close" onclick="closeProductModal()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
    <div class="pdp-gallery">
      <div class="pdp-main-img">${p.svg}</div>
      <div class="pdp-thumbs">
        <div class="pdp-thumb active">${p.svg}</div>
        <div class="pdp-thumb">${p.svg}</div>
        <div class="pdp-thumb">${p.svg}</div>
        <div class="pdp-thumb">${p.svg}</div>
      </div>
    </div>
    <div class="pdp-info">
      <div class="pdp-meta"><span class="badge ${p.badgeClass}">${p.condition}</span><span>${p.category}</span><span>· Listing #${p.id.slice(-6).toUpperCase()}</span></div>
      <h2 class="pdp-title">${p.name}</h2>
      <div class="pdp-rating"><span class="stars">★★★★★</span><span>${p.rating} · ${p.reviews} reviews</span></div>
      <div class="pdp-price-block">
        <div class="pdp-price ${isAuction?'live':''}">$${p.price}</div>
        <div class="pdp-price-meta">${isAuction?`<span>${p.bidCount} bids</span><span>· Ends in ${formatTime(p.endTime-Date.now())}</span>`:`<span>Free shipping</span><span>· 30-day returns</span>`}</div>
      </div>
      <div class="pdp-specs">
        <div class="pdp-spec"><div class="pdp-spec-label">Model</div><div class="pdp-spec-value">${p.model}</div></div>
        <div class="pdp-spec"><div class="pdp-spec-label">Storage</div><div class="pdp-spec-value">${p.storage}</div></div>
        <div class="pdp-spec"><div class="pdp-spec-label">Battery</div><div class="pdp-spec-value">${p.battery}</div></div>
        <div class="pdp-spec"><div class="pdp-spec-label">Color</div><div class="pdp-spec-value">${p.color}</div></div>
        <div class="pdp-spec"><div class="pdp-spec-label">Seller</div><div class="pdp-spec-value">${p.seller}</div></div>
        <div class="pdp-spec"><div class="pdp-spec-label">Warranty</div><div class="pdp-spec-value">90 days</div></div>
      </div>
      ${isAuction ? `
        <div style="padding:0;">
          <div class="increment-btns"><button class="increment-btn" onclick="adjustBid(5)">+$5</button><button class="increment-btn" onclick="adjustBid(10)">+$10</button><button class="increment-btn" onclick="adjustBid(25)">+$25</button><button class="increment-btn" onclick="adjustBid(50)">+$50</button></div>
          <div class="bid-input-row"><div class="bid-input-wrap"><input type="number" class="bid-input" id="bid-input-pdp" value="${p.price+10}" min="${p.price+5}"></div><button class="btn btn-accent" onclick="placeBid('${p.id}')">Place bid</button></div>
          <div class="bid-history"><div class="bid-history-title">Bid history · ${p.bidCount} bids</div>${generateBidHistory(p.price,p.bidCount).map((b,i)=>`<div class="bid-row ${i===0?'winning':''}"><span class="bidder">${b.bidder}</span><span class="amount">$${b.amount}</span><span class="bidder">${b.time}</span></div>`).join('')}</div>
        </div>
      ` : `
        <div class="pdp-actions">
          <button class="btn btn-primary btn-block" onclick="addToCart('${p.id}')">Add to cart · $${p.price}</button>
          <button class="icon-btn" aria-label="Wishlist"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
          <button class="icon-btn" aria-label="Share"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg></button>
        </div>`}
      <div class="pdp-trust">
        <div class="trust-item"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 5.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><span class="trust-label">Certified</span><span class="trust-sub">Hand-inspected</span></div>
        <div class="trust-item"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span class="trust-label">30-day returns</span><span class="trust-sub">Hassle-free</span></div>
        <div class="trust-item"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7l9 6 9-6"/><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"/></svg><span class="trust-label">Free shipping</span><span class="trust-sub">Insured & tracked</span></div>
      </div>
    </div>`;
  $('#product-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() { $('#product-modal').classList.remove('active'); document.body.style.overflow = ''; }
$('#product-modal').addEventListener('click', e => { if (e.target.id === 'product-modal') closeProductModal(); });

function openBidModal(id) { openProductModal(id); }

function adjustBid(amt) { const input = $('#bid-input-pdp'); if (input) input.value = parseInt(input.value||0)+amt; }

function placeBid(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const input = $('#bid-input-pdp');
  const amt = parseInt(input.value);
  if (amt <= p.price) { showToast('Bid must exceed current bid'); return; }
  p.price = amt;
  p.bidCount += 1;
  showToast(`Bid placed: $${amt}`);
  setTimeout(() => { closeProductModal(); renderGrid(); if (id === 'macbook-2022') $('#fa-bid').textContent = `$${amt}`; }, 800);
}

function generateBidHistory(currentBid, count) {
  const bidders = ['user_2841','bidder_x9','collector_77','tech_buyer','anon_4421','patrick_d','tracy_b'];
  const times = ['2m ago','14m ago','1h ago','3h ago','7h ago','yesterday','2d ago'];
  const history = [];
  let bid = currentBid;
  for (let i = 0; i < Math.min(count, 6); i++) { history.push({ bidder: bidders[i%bidders.length], amount: bid, time: times[i%times.length] }); bid -= Math.floor(Math.random()*20)+5; }
  return history;
}

// ===== CART =====
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty += 1; else cart.push({...p, qty: 1});
  updateCart();
  showToast(`${p.name} added to cart`);
  closeProductModal();
  setTimeout(openCart, 400);
}

function removeFromCart(id) { cart = cart.filter(x => x.id !== id); updateCart(); }

function updateCart() {
  $('#cart-count').textContent = cart.reduce((a,c) => a+c.qty, 0);
  const items = $('#cart-items');
  if (cart.length === 0) {
    items.innerHTML = `<div class="cart-empty"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><div>Your cart is empty.<br>Browse the catalogue to add devices.</div></div>`;
    $('#cart-footer').style.display = 'none'; return;
  }
  $('#cart-footer').style.display = 'block';
  items.innerHTML = cart.map(c => `<div class="cart-item"><div class="cart-item-img">${c.svg}</div><div><div class="cart-item-name">${c.name}</div><div class="cart-item-spec">${c.spec}</div><div class="cart-item-price">$${c.price} ${c.qty>1?`× ${c.qty}`:''}</div></div><button class="cart-remove" onclick="removeFromCart('${c.id}')" aria-label="Remove"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>`).join('');
  const sub = cart.reduce((a,c) => a+(c.price*c.qty), 0);
  const tax = Math.round(sub*0.08);
  $('#cart-subtotal').textContent = `$${sub}`;
  $('#cart-tax').textContent = `$${tax}`;
  $('#cart-total').textContent = `$${sub+tax}`;
}

function openCart() { $('#cart-modal').classList.add('active'); $('#cart-overlay').classList.add('active'); }
function closeCart() { $('#cart-modal').classList.remove('active'); $('#cart-overlay').classList.remove('active'); }
$('#cart-toggle').addEventListener('click', openCart);
$('#cart-overlay').addEventListener('click', closeCart);

function checkout() {
  if (cart.length === 0) return;
  showToast('Demo: redirecting to checkout...');
  setTimeout(() => { cart = []; updateCart(); closeCart(); }, 1500);
}

// ===== TIMERS =====
setInterval(() => {
  $$('[data-end]').forEach(el => {
    const end = parseInt(el.dataset.end);
    const remaining = end - Date.now();
    el.textContent = formatTime(remaining);
    if (remaining < 24*60*60*1000) el.style.color = 'var(--accent)';
  });
  const fa = PRODUCTS.find(p => p.id === 'macbook-2022');
  if (fa) { $('#fa-time').textContent = formatTime(fa.endTime - Date.now()); }
}, 1000);

// ===== SCROLL REVEAL =====
function observeReveals() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  $$('.reveal:not(.in)').forEach(el => obs.observe(el));
}

// ===== INIT =====
renderGrid();
updateCart();
observeReveals();
setTimeout(() => { $$('.hero .reveal').forEach((el,i) => { setTimeout(() => el.classList.add('in'), i*140); }); }, 100);
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeProductModal(); closeCart(); } });
