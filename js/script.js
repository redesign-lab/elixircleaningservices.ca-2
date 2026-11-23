/* Elixir Cleaning Services — Interactions
   Mobile nav · FAQ accordion · Quote form (mailto) · Marquee · Sticky header */
'use strict';

/* ── Sticky header shadow ─────────────────────────────────── */
const header = document.querySelector('.header');
const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Mobile menu ──────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
  if (!hamburger || !mobileMenu) return;
  hamburger.setAttribute('aria-expanded', String(open));
  mobileMenu.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    setMenu(hamburger.getAttribute('aria-expanded') !== 'true');
  });
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', (e) => {
    if (!mobileMenu.hidden && !e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
      setMenu(false);
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1100) setMenu(false);
  });
}

/* ── Marquee: duplicate track for seamless loop ───────────── */
const track = document.getElementById('marqueeTrack');
if (track) track.innerHTML += track.innerHTML;

/* ── FAQ accordion ────────────────────────────────────────── */
const FAQS = [
  {
    q: 'How much does an Airbnb turnover cost?',
    a: 'Turnovers start at $50 for a studio and increase based on bedrooms, bathrooms and the level of service you choose — Essential, Full-Service or Luxury. Every package is fully customizable and quoted transparently before we start, so there are never surprise charges.'
  },
  {
    q: 'Do you restock supplies and amenities?',
    a: 'Yes. We can restock shampoo, conditioner, hand soap, dish soap, toilet paper, coffee, tea and filtered water — and even set out welcome gifts or notes matched to your guest experience. Inventory is tracked and reported back to you after every turnover.'
  },
  {
    q: 'Are you available last-minute or same-day?',
    a: 'Absolutely. We are available 24/7, 365 days a year. Our organization and scheduling system is built for the fast pace of short-term rentals — last-minute bookings, same-day check-ins and unexpected emergencies are our specialty. Call 226-337-1945 any time.'
  },
  {
    q: 'Are you insured and what products do you use?',
    a: 'We are fully insured and take every precaution to protect your property. We use Health Canada approved disinfectants effective against COVID-19 and other viruses, adhering to specified application times — plus eco-friendly, scented or unscented options based on your preference.'
  },
  {
    q: 'Which areas do you serve?',
    a: 'We serve Elora, Fergus, Guelph and Kitchener–Waterloo, along with surrounding Wellington County communities. Not sure whether we cover your listing? Call 226-337-1945 — we are happy to confirm.'
  },
  {
    q: 'Can you handle laundry and linen changes?',
    a: 'Yes — washing and drying all laundry at the highest setting, making beds with fresh linens styled to your space, and storing everything before completing the turnover. Towels are refreshed and replaced every single stay.'
  }
];

const faqList = document.getElementById('faqList');
if (faqList) {
  const plus = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  FAQS.forEach((item, i) => {
    const id = 'faq-panel-' + i;
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML =
      '<button class="faq-item__btn" aria-expanded="false" aria-controls="' + id + '" id="faq-btn-' + i + '">' +
        '<span>' + item.q + '</span>' +
        '<span class="faq-item__icon">' + plus + '</span>' +
      '</button>' +
      '<div class="faq-item__panel" id="' + id + '" role="region" aria-labelledby="faq-btn-' + i + '">' +
        '<div class="faq-item__panel-inner">' + item.a + '</div>' +
      '</div>';
    faqList.appendChild(el);
  });

  const buttons = faqList.querySelectorAll('.faq-item__btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      buttons.forEach((b) => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.faq-item').querySelector('.faq-item__panel').style.maxHeight = null;
      });
      // Open the clicked one if it was closed
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        const panel = btn.closest('.faq-item').querySelector('.faq-item__panel');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
  // Open the first question by default
  if (buttons.length) buttons[0].click();
}

/* ── Quote form → opens the visitor’s email app ─────────────
   Note: this is a static site with no backend. Submitting composes
   a pre-filled email to Elixir Cleaning Services instead of faking
   a server-side submission. */
const quoteForm = document.getElementById('quoteForm');
const formNote = document.getElementById('formNote');

if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = quoteForm.elements['name'];
    const phone = quoteForm.elements['phone'];
    const email = quoteForm.elements['email'];
    const service = quoteForm.elements['service'];
    const message = quoteForm.elements['message'];

    let valid = true;
    [name, phone, email].forEach((field) => {
      const bad = !field.value.trim() || (field.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.value));
      field.classList.toggle('is-invalid', bad);
      if (bad) valid = false;
    });

    if (!valid) {
      if (formNote) formNote.textContent = 'Please complete the highlighted fields so we can reach you.';
      return;
    }

    const subject = encodeURIComponent('Free Quote Request — ' + service.value + ' (' + name.value.trim() + ')');
    const body = encodeURIComponent(
      'Hi Elixir Cleaning Services,\n\n' +
      'Name: ' + name.value.trim() + '\n' +
      'Phone: ' + phone.value.trim() + '\n' +
      'Email: ' + email.value.trim() + '\n' +
      'Service: ' + service.value + '\n\n' +
      'About the property:\n' + (message.value.trim() || '—') + '\n'
    );
    window.location.href = 'mailto:elixircleaning519@gmail.com?subject=' + subject + '&body=' + body;

    if (formNote) {
      formNote.innerHTML = 'Your email app should now open with the request pre-filled. Prefer to talk? Call <a href="tel:+12263371945">226-337-1945</a>.';
    }
  });
}

/* ── Current year in footer ───────────────────────────────── */
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
