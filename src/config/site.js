// ─────────────────────────────────────────────────────────────
//  Prakruti — single source of truth for business / contact data
//  Edit these values before going live. They feed the whole site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Prakruti Plant Nursery',
  domain: 'https://prakruti.in', // ← set to your real production URL

  // Primary WhatsApp number in international format, digits only (no +, spaces, dashes)
  whatsapp: '919130161130', // TODO: replace with real WhatsApp business number

  // Phone numbers as displayed to users
  phones: ['+91 9103161130'], // TODO: replace with real numbers

  // Contact emails
  emails: ['prakrutifarmandnursery2025@gmail.com'], // TODO: replace with real inboxes

  address: {
    lines: ['8V37+RH, Varve Bk.', 'Pune — 411045', 'Maharashtra, India'],
    short: '8V37+RH, Varve Bk. Pune — 411045',
    mapUrl: 'https://www.google.com/maps/dir//Prakruti+Farm+%26+Nursery,+8V37%2BRH,+Varve+Bk.,+Maharashtra+412205/@18.4719759,73.8536679,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2ed00480d431f:0x7725c3c39e520804!2m2!1d73.8639298!2d18.3045741?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D', // TODO: replace with exact Google Maps link
  },

  hours: ['Mon–Sat: 8:00 AM – 7:00 PM', 'Sunday: 9:00 AM – 5:00 PM'],

  // Social profiles
  social: {
    instagram: 'https://instagram.com/prakruti_farm_nursery',
    facebook: '#', // TODO: replace with real page
    youtube: '#', // TODO: replace with real channel
  },
};

// Helper: build a wa.me link with an optional prefilled message
export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
