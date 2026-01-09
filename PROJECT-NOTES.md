# Made a Move - Project Reference

## Live Site
- **URL:** https://made-a-move.netlify.app/
- **Repo:** https://github.com/moalali0/Make-A-Move
- **Phone:** 07704 844 827

---

## Quote Calculator Pricing (script.js)

| Item | Price |
|------|-------|
| Minimum quote | £50 |
| Per mile (after 4 free) | £10 |
| Per room | £30 |
| Apartment fee | £40 |
| No elevator base fee | £25 |
| No elevator per floor | £10 |
| Per box/bag | £3 |
| Per large appliance | £10 |
| Per large furniture | £10 |

---

## Meta Pixel Tracking

**Pixel ID:** `2059114434885195`

| Event | Trigger |
|-------|---------|
| PageView | Page load |
| Lead | Quote generated ("See My Quote" click) |
| Contact | Contact form submitted |

---

## Integrations

**Formspree (Contact Form):**
- Endpoint: `https://formspree.io/f/mzdznlpg`
- Sends to your email

**WhatsApp:**
- Number: 447704844827
- Pre-fills message with form data

---

## Key Files

```
/
├── index.html          # Main homepage
├── services.html       # Detailed services page
├── privacy.html        # Privacy policy
├── style.css           # All styles
├── script.js           # Calculator + interactions
├── logo.svg            # Logo (root level, NOT assets/)
├── facebook-cover.svg  # FB cover photo (820x312)
└── PROJECT-NOTES.md    # This file
```

---

## Design System

**Colors:**
- Navy: `#0a192f`
- Navy Light: `#172a45`
- Gold: `#C5A059`
- Gold Hover: `#d4af6a`
- White: `#e6f1ff`
- Text Muted: `#8892b0`

**Font:** Inter (Google Fonts)

---

## Features Implemented

- Premium quote calculator with progressive disclosure
- Stepper buttons for item counts
- Elevator fields appear only when floor > ground
- Contact form (Formspree + WhatsApp)
- Meta Pixel tracking
- Mobile sticky CTA bar
- Scroll fade-in animations
- FAQ accordion
- Testimonials with photos
- Urgency banner

---

*Last updated: January 2025*
