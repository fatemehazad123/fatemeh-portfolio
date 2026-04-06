// ═══════════════════════════════════════
// HERO MEDIA CONFIG
// ═══════════════════════════════════════
//
// HOW TO ADD MEDIA:
//
// 1. Drop your file into one of:
//      /public/images/hero/   ← jpg, jpeg, png
//      /public/videos/hero/   ← mp4
//
// 2. Name it:
//      hero-1.jpg  hero-2.jpg  hero-3.jpg ...
//      hero-1.mp4  hero-2.mp4 ...
//
// 3. Add an entry to HERO_CARDS below.
//    Copy an existing entry and update:
//      - src: the file path
//      - type: 'image' or 'video'
//      - client / title / accent
//      - depth: 'far' | 'mid' | 'near'
//      - position: where on screen
//      - rotate: tilt in degrees
//      - width / height: card size in px
//
// That's it. No other files to change.
// ═══════════════════════════════════════

export type MediaDepth = 'far' | 'mid' | 'near'

export interface HeroCard {
  id: string
  type: 'image' | 'video'
  src: string
  // For video: shows while video loads
  poster?: string
  // Label shown on card
  client: string
  title: string
  // Teal #4FA6A1 / Terra #C96A4A / Sage #BFCFC6
  accent: string
  // far  = very blurry, behind name
  // mid  = slightly blurry
  // near = sharp, overlaps name
  depth: MediaDepth
  // CSS position values
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  // Tilt in degrees. Negative = left lean.
  rotate: number
  // Card size in pixels
  width: number
  height: number
}

// ═══════════════════════════════════════
// YOUR CARDS — edit this array
// ═══════════════════════════════════════

export const HERO_CARDS: HeroCard[] = [

  // ── FAR LAYER ─────────────────────────
  // Very blurry. Small. Behind everything.

  {
    id: 'hero-far-1',
    type: 'image',
    src: '/images/hero/hero-4.jpg',
    client: 'Law Society of Ontario',
    title: 'Institutional Identity',
    accent: '#BFCFC6',
    depth: 'far',
    position: { top: '5%', left: '42%' },
    rotate: 2,
    width: 150,
    height: 106,
  },
  {
    id: 'hero-far-2',
    type: 'image',
    src: '/images/hero/hero-3.jpg',
    client: 'Silk Road Events',
    title: 'Event Identity System',
    accent: '#C96A4A',
    depth: 'far',
    position: { top: '8%', right: '5%' },
    rotate: 6,
    width: 170,
    height: 120,
  },

  // ── MID LAYER ─────────────────────────
  // Slightly blurry. Medium size.

  {
    id: 'hero-mid-1',
    type: 'image',
    src: '/images/hero/hero-1.jpg',
    client: 'TD Bank · 2024',
    title: 'Cybersecurity Report',
    accent: '#4FA6A1',
    depth: 'mid',
    position: { top: '42%', left: '7%' },
    rotate: -4,
    width: 230,
    height: 160,
  },
  {
    id: 'hero-mid-2',
    type: 'image',
    src: '/images/hero/hero-5.jpg',
    client: 'FIRST Insurance',
    title: '11 Years of Systems',
    accent: '#4FA6A1',
    depth: 'mid',
    position: { bottom: '18%', right: '6%' },
    rotate: 5,
    width: 210,
    height: 148,
  },

  // ── NEAR LAYER ────────────────────────
  // Sharp. Full opacity. Overlaps the name.
  // Most impactful — use your best images here.

  {
    id: 'hero-near-1',
    type: 'image',
    src: '/images/hero/hero-2.jpg',
    client: 'City of Toronto · 2025',
    title: 'Little Iran\nCultural District',
    accent: '#C96A4A',
    depth: 'near',
    position: { top: '12%', left: '3%' },
    rotate: -8,
    width: 200,
    height: 140,
  },
  {
    id: 'hero-near-2',
    type: 'image',
    src: '/images/hero/hero-1.jpg',
    client: 'TD Bank · 2024',
    title: 'Cybersecurity\nState of the Nation',
    accent: '#4FA6A1',
    depth: 'near',
    position: { top: '25%', left: '16%' },
    rotate: -3,
    width: 200,
    height: 140,
  },

  // ── VIDEO CARD ────────────────────────
  // Autoplay, muted, looping.
  // Add your .mp4 to /public/videos/hero/
  // then set type: 'video' and update src.
  // Currently uses poster image as fallback.

  {
    id: 'hero-video-1',
    type: 'video',
    src: '/videos/hero/hero-1.mp4',
    poster: '/images/portrait.jpg',
    client: 'Fatemeh Azadbakht',
    title: 'Senior Designer\nToronto',
    accent: '#4FA6A1',
    depth: 'near',
    position: { bottom: '22%', right: '14%' },
    rotate: 4,
    width: 190,
    height: 134,
  },

]

// ═══════════════════════════════════════
// DEPTH VISUAL CONFIG
// Tweak these to adjust the look.
// ═══════════════════════════════════════

export const DEPTH = {
  far: {
    blur: 6,
    brightness: 0.4,
    opacity: 0.38,
    scale: 0.78,
    // How much the card moves with mouse
    parallax: { x: 16, y: 12 },
    // How much it floats up and down
    float: { amp: 6, speed: 0.9 },
    zIndex: 2,
  },
  mid: {
    blur: 2.5,
    brightness: 0.62,
    opacity: 0.62,
    scale: 0.91,
    parallax: { x: 10, y: 8 },
    float: { amp: 5, speed: 0.7 },
    zIndex: 4,
  },
  near: {
    blur: 0,
    brightness: 0.85,
    opacity: 0.75,
    scale: 1,
    parallax: { x: 5, y: 4 },
    float: { amp: 4, speed: 0.55 },
    zIndex: 8,
  },
}
