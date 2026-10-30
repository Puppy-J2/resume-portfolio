const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const yearElement = document.getElementById('year');
const revealNodes = document.querySelectorAll('.reveal');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeLightboxButton = document.querySelector('.lightbox-close');
const galleryImages = document.querySelectorAll('.gallery-item img');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealNodes.forEach((node) => revealObserver.observe(node));

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formEndpoint = 'https://formsubmit.co/ajax/mbattungjoshua@gmail.com';

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      setFormStatus('Please complete all fields before submitting.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setFormStatus('Please enter a valid email address.', 'error');
      return;
    }

    if (submitButton.disabled) return;

    if (window.location.protocol === 'file:') {
      setFormStatus(
        'Opening FormSubmit to send your message. This local preview will leave the portfolio page.',
        'success'
      );
      HTMLFormElement.prototype.submit.call(contactForm);
      return;
    }

    submitButton.disabled = true;
    contactForm.setAttribute('aria-busy', 'true');
    setFormStatus('Sending your message...', 'success');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: 'New message from your resume portfolio',
          _template: 'table',
          _honey: String(formData.get('_honey') || ''),
        }),
      });

      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('The email service did not accept the message.');
      }

      setFormStatus(
        'Your message was submitted. If this is your first submission, confirm the FormSubmit activation email sent to mbattungjoshua@gmail.com to enable delivery.',
        'success'
      );
      contactForm.reset();
    } catch {
      setFormStatus(
        'Your message could not be sent. Please try again or email mbattungjoshua@gmail.com directly.',
        'error'
      );
    } finally {
      submitButton.disabled = false;
      contactForm.removeAttribute('aria-busy');
    }
  });
}

function setFormStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.remove('success', 'error');
  formStatus.classList.add(type);
}

if (lightbox && closeLightboxButton) {
  closeLightboxButton.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
}

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});
