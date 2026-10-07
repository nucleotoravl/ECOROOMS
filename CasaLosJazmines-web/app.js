/* ==========================================================
   CONFIGURACIÓN: cambia aquí el número de WhatsApp del negocio
   Formato internacional sin "+" ni espacios. Ej. Perú: 51987654321
   ========================================================== */
const CONFIG = {
  whatsapp: '51921295031', // 921 295 031, teléfono de la ficha de Google
  saludo: 'Hola, Casa Los Jazmines 👋',
};

/* Experiencias: textos tomados de la descripción de los dueños.
   Para cambiar fotos, edita las listas "photos" (carpeta img/). */
const ROOMS = [
  {
    id: 'deluxe',
    name: 'Experiencia De Luxe',
    room: 'Habitación 105',
    badge: 'La más amplia',
    tags: ['familia', 'fiesta'],
    size: 33,
    beds: 'Cama matrimonial + 2 sofás cama',
    highlights: [['i-mic', 'Karaoke'], ['i-light', 'Luces LED'], ['i-tv', 'TV con control de voz']],
    desc: 'Monoambiente de 33 m² con espejo de pared a pared, mesa de maquillaje (vanity) que también sirve de escritorio y sonido para la fiesta.',
    amenities: ['Baño privado', 'Cama matrimonial', '2 sofás cama', 'Comedor', 'Espejo de pared a pared', 'Vanity / escritorio', 'Frigobar', 'Microondas', 'TV con control de voz', 'Soundbar', 'Karaoke', 'Parlante', 'Luces LED'],
    photos: [
      ['deluxe-sofa.jpg', 'Cama, sofá cama y espejo con luces'],
      ['deluxe-cama.jpg', 'Cama matrimonial y vanity'],
      ['deluxe-terraza.jpg', 'Vista hacia la terraza'],
      ['deluxe-noche.jpg', 'De noche, con luces LED'],
      ['deluxe-sofacama.jpg', 'Sofá cama y zona de descanso'],
      ['deluxe-bano.jpg', 'Baño privado'],
    ],
  },
  {
    id: 'premium',
    name: 'Experiencia Premium',
    room: 'Habitación 101',
    badge: 'Con terraza y parrilla',
    tags: ['descanso', 'familia'],
    size: 30,
    beds: 'Cama matrimonial',
    highlights: [['i-tv', 'TV gigante'], ['i-mic', 'Karaoke'], ['i-fire', 'Área de parrilla']],
    desc: 'Monoambiente de 30 m² con clóset, comedor y salida a terraza con área de parrilla. Ideal para quedarse varios días.',
    amenities: ['Baño privado', 'Comedor', 'Clóset', 'Terraza', 'Área de parrilla', 'TV gigante', 'Karaoke', 'Luces LED', 'Microondas', 'Hervidor', 'Té, mates y café', 'Tazas, copas y utensilios'],
    photos: [
      ['premium-amplia.jpg', 'Vista general de la habitación'],
      ['premium-tv.jpg', 'Cama y TV'],
      ['premium-mesa.jpg', 'Comedor para dos'],
      ['premium-cama.jpg', 'Cama matrimonial'],
      ['premium-cafe.jpg', 'Estación de café y té'],
      ['premium-te.jpg', 'Hervidor y tazas'],
      ['premium-bano.jpg', 'Baño privado'],
    ],
  },
  {
    id: 'redvelvet',
    name: 'Experiencia Red Velvet',
    room: 'Romántica',
    badge: 'Para parejas',
    tags: ['romance'],
    size: 24,
    beds: 'Cama + sofá cama',
    highlights: [['i-fire', 'TV chimenea'], ['i-mic', 'Karaoke'], ['i-light', 'Luces neón']],
    desc: 'Monoambiente de 24 m² en tonos rojos, con TV gigante en modo chimenea, mesa para dos y terraza. Pensada para aniversarios y escapadas.',
    amenities: ['Baño privado', 'Sofá cama', 'Comedor', 'Terraza', 'TV gigante', 'Karaoke', 'Soundbar', 'Luces neón', 'Hervidor', 'Té, mates y café', 'Tazas, copas y utensilios'],
    photos: [
      ['redvelvet-chimenea.jpg', 'Mesa para dos frente a la TV chimenea'],
      ['redvelvet-mesa.jpg', 'Detalle de la mesa con rosas'],
      ['redvelvet-luces.jpg', 'Ambiente con luces'],
      ['redvelvet-vanity.jpg', 'Vanity con luces y cama'],
    ],
  },
  {
    id: 'party',
    name: 'Experiencia Party',
    room: 'Para celebrar',
    badge: 'Modo fiesta',
    tags: ['fiesta'],
    size: 24,
    beds: 'Cama + sofá cama',
    highlights: [['i-light', 'Luces LED y neón'], ['i-mic', 'Karaoke'], ['i-tv', 'TV y parlante']],
    desc: 'Monoambiente de 24 m² que se convierte en pista de baile: luces LED y neón, karaoke y parlante para cumpleaños o una noche con amigos.',
    amenities: ['Baño privado', 'Agua caliente', 'Sofá cama', 'Cómoda', 'Comedor', 'Frigobar', 'Microondas', 'Hervidor', 'Plancha', 'Secadora', 'TV', 'Karaoke', 'Parlante', 'Luces LED y neón', 'Copas y tazas', 'Té, mates y café'],
    photos: [
      ['party-karaoke.jpg', 'Karaoke en la TV con luces de fiesta'],
      ['party-2.jpg', 'La habitación en modo fiesta'],
      ['party-1.jpg', 'Luces LED sobre la cama'],
      ['microondas.jpg', 'Microondas y toallas'],
    ],
  },
  {
    id: 'h104',
    name: 'Habitación 104',
    room: 'Confort',
    badge: 'Tranquila y luminosa',
    tags: ['descanso'],
    size: null,
    beds: 'Cama matrimonial + sofá cama',
    highlights: [['i-tv', 'Smart TV'], ['i-wifi', 'WiFi'], ['i-cup', 'Café y té']],
    desc: 'Luminosa, en tonos azules, con área de estar, mesa para dos y carrito de café. Para descansar después de recorrer el valle del Mantaro.',
    amenities: ['Baño privado', 'Agua caliente', 'Cama matrimonial', 'Sofá cama', 'Área de estar', 'Smart TV', 'WiFi', 'Frigobar', 'Microondas', 'Café y té', 'Toallas'],
    photos: [
      ['h104-cama2.jpg', 'Habitación 104'],
      ['h104-cama.jpg', 'Cama matrimonial'],
      ['h104-sala.jpg', 'Área de estar y TV'],
      ['h104-cafe.jpg', 'Café y amenidades'],
      ['h104-bano.jpg', 'Baño privado'],
    ],
  },
];

const GALLERIES = {
  garden: [
    ['jardin-sol.jpg', 'Jardín principal'],
    ['jardin-flores.jpg', 'Pasillo de flores'],
    ['jardin-columpio.jpg', 'Columpio en el patio'],
    ['parrilla.jpg', 'Zona de parrilla'],
    ['jardin-pasillo.jpg', 'Pasillo techado con plantas'],
    ['jardin-arbol.jpg', 'Árbol y macetas'],
  ],
  lounge: [
    ['sala-comun-2.jpg', 'Sala de estar'],
    ['sala-comun.jpg', 'Sala de estar con TV'],
    ['sala-comun-3.jpg', 'Sala de estar'],
    ['fachada-pasillo.jpg', 'Patio de ingreso'],
  ],
};
ROOMS.forEach(r => (GALLERIES[r.id] = r.photos));

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const icon = id => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}
function roomInquiry(room) {
  return `${CONFIG.saludo}\nQuisiera consultar disponibilidad y tarifa de la ${room.name}${room.room ? ' (' + room.room + ')' : ''}.`;
}

/* ---------- Tarjetas de experiencias ---------- */
function renderRooms() {
  $('#rooms').innerHTML = ROOMS.map(r => `
    <article class="room" id="exp-${r.id}" data-tags="${r.tags.join(' ')}">
      <div class="room__media">
        <button class="room__cover" data-gallery="${r.id}" data-index="0" aria-label="Ver fotos de ${r.name}">
          <img src="img/${r.photos[0][0]}" alt="${r.photos[0][1]}" loading="lazy">
        </button>
        <span class="room__badge">${r.badge}</span>
        <span class="room__count">${icon('i-photo')} ${r.photos.length}</span>
        <div class="room__thumbs">
          ${r.photos.slice(1, 4).map((p, i) => `<button data-gallery="${r.id}" data-index="${i + 1}" aria-label="${p[1]}"><img src="img/${p[0]}" alt="" loading="lazy"></button>`).join('')}
        </div>
      </div>
      <div class="room__body">
        <p class="room__kicker">${r.room}</p>
        <h3>${r.name}</h3>
        <div class="room__meta">
          ${r.size ? `<span>${icon('i-area')} ${r.size} m²</span>` : ''}
          <span>${icon('i-bed')} ${r.beds}</span>
          <span>${icon('i-bath')} Baño privado</span>
        </div>
        <p class="room__desc">${r.desc}</p>
        <ul class="room__hl">${r.highlights.map(h => `<li>${icon(h[0])}${h[1]}</li>`).join('')}</ul>
        <details class="room__more">
          <summary>Todo lo que incluye</summary>
          <ul>${r.amenities.map(a => `<li>${a}</li>`).join('')}</ul>
        </details>
        <div class="room__foot">
          <div class="room__price"><small>Tarifa</small><b>Consultar</b><span class="room__pay">Yape · Plin · Visa · Efectivo</span></div>
          <a class="btn btn--gold" href="${waLink(roomInquiry(r))}" target="_blank" rel="noopener" data-book="${r.id}">Reservar ahora</a>
        </div>
      </div>
    </article>`).join('');

  $('#fRoom').innerHTML = `<option value="">Cualquiera</option>` +
    ROOMS.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
  $('#footerRooms').innerHTML = ROOMS.map(r => `<li><a href="#exp-${r.id}">${r.name}</a></li>`).join('');
}

/* ---------- Filtros ---------- */
// Con un número impar de tarjetas, la última ocupa todo el ancho (ver .rooms--odd)
function syncOdd() {
  const visible = $$('.room').filter(c => !c.hidden);
  $$('.room').forEach(c => c.classList.remove('is-last'));
  if (visible.length) visible[visible.length - 1].classList.add('is-last');
  $('#rooms').classList.toggle('rooms--odd', visible.length % 2 === 1);
}
function initFilters() {
  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (!b) return;
    $$('.chip').forEach(c => c.classList.toggle('is-active', c === b));
    const f = b.dataset.filter;
    $$('.room').forEach(card => {
      card.hidden = f !== 'all' && !card.dataset.tags.split(' ').includes(f);
    });
    syncOdd();
  });
  // "¿Con quién viajas?" -> preselecciona la experiencia en el buscador y resalta la tarjeta
  $$('.who__card').forEach(a => a.addEventListener('click', () => {
    $$('.chip')[0].click();
    $('#fRoom').value = a.dataset.room;
    const card = $('#exp-' + a.dataset.room);
    card.classList.remove('is-flash'); void card.offsetWidth; card.classList.add('is-flash');
  }));
}

/* ---------- Hero carrusel ---------- */
function initHero() {
  const slides = $$('#heroSlides img');
  const dots = $('#heroDots');
  let i = 0, timer;
  dots.innerHTML = slides.map((s, n) => `<button role="tab" aria-label="Foto ${n + 1}" ${n === 0 ? 'aria-selected="true"' : ''}></button>`).join('');
  const go = n => {
    slides[i].classList.remove('is-active'); dots.children[i].removeAttribute('aria-selected');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('is-active'); dots.children[i].setAttribute('aria-selected', 'true');
  };
  const play = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 5500); };
  dots.addEventListener('click', e => {
    const idx = [...dots.children].indexOf(e.target);
    if (idx > -1) { go(idx); play(); }
  });
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) play();
}

/* ---------- Buscador de reservas -> WhatsApp ---------- */
function initBooker() {
  const fIn = $('#fIn'), fOut = $('#fOut');
  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  const today = new Date();
  fIn.min = iso(today);
  fIn.addEventListener('change', () => {
    if (!fIn.value) return;
    const next = new Date(fIn.value + 'T12:00'); next.setDate(next.getDate() + 1);
    fOut.min = iso(next);
    if (!fOut.value || fOut.value <= fIn.value) fOut.value = iso(next);
  });
  const fmt = v => new Date(v + 'T12:00').toLocaleDateString('es-PE', { weekday: 'short', day: 'numeric', month: 'long' });

  $('#reservar').addEventListener('submit', e => {
    e.preventDefault();
    if (fOut.value <= fIn.value) { fOut.setCustomValidity('La salida debe ser después de la llegada'); fOut.reportValidity(); return; }
    fOut.setCustomValidity('');
    const room = ROOMS.find(r => r.id === $('#fRoom').value);
    const nights = Math.round((new Date(fOut.value) - new Date(fIn.value)) / 864e5);
    const msg = [
      CONFIG.saludo,
      'Quisiera reservar online:',
      `• Llegada: ${fmt(fIn.value)}`,
      `• Salida: ${fmt(fOut.value)} (${nights} noche${nights > 1 ? 's' : ''})`,
      `• Huéspedes: ${$('#fGuests').value}`,
      `• Experiencia: ${room ? room.name : 'la que esté disponible'}`,
      `• Pago: ${$('#fPay').value}`,
    ].join('\n');
    window.open(waLink(msg), '_blank', 'noopener');
  });
  $('#fOut').addEventListener('input', () => fOut.setCustomValidity(''));
}

/* ---------- Enlaces genéricos a WhatsApp ---------- */
function initWa() {
  const href = waLink(`${CONFIG.saludo}\nQuisiera información para hospedarme.`);
  $$('[data-wa]').forEach(a => { a.href = href; a.target = '_blank'; a.rel = 'noopener'; });
}

/* ---------- Visor de fotos ---------- */
function initLightbox() {
  const lb = $('#lightbox'), img = $('#lbImg'), cap = $('#lbCap');
  let list = [], i = 0, lastFocus;
  const show = n => {
    i = (n + list.length) % list.length;
    img.src = 'img/' + list[i][0]; img.alt = list[i][1];
    cap.textContent = `${list[i][1]} · ${i + 1}/${list.length}`;
  };
  const open = (key, n) => {
    list = GALLERIES[key]; if (!list) return;
    lastFocus = document.activeElement;
    lb.hidden = false; document.body.style.overflow = 'hidden';
    show(n); $('#lbClose').focus();
  };
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; lastFocus && lastFocus.focus(); };

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-gallery]');
    if (t) { e.preventDefault(); open(t.dataset.gallery, +t.dataset.index || 0); }
  });
  $('#lbClose').onclick = close;
  $('#lbPrev').onclick = () => show(i - 1);
  $('#lbNext').onclick = () => show(i + 1);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  let x0 = null;
  lb.addEventListener('touchstart', e => (x0 = e.touches[0].clientX), { passive: true });
  lb.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
    x0 = null;
  });
}

/* ---------- Videos: se reproducen al estar en pantalla ---------- */
function initVideos() {
  const vids = $$('.vid video');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    const v = en.target;
    if (en.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
  }), { threshold: 0.4 });
  vids.forEach(v => io.observe(v));
}

/* ---------- Menú móvil, header y animaciones ---------- */
function initChrome() {
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', false); } });

  const bar = $('.topbar');
  const onScroll = () => bar.classList.toggle('is-solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  $('#year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    $$('.section__head, .room, .who__card, .why__item, .collage__item, .shared__card, .vid').forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }
}

renderRooms();
syncOdd();
initFilters();
initHero();
initBooker();
initWa();
initLightbox();
initVideos();
initChrome();
