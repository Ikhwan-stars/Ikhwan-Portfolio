# Rebuild notes

This is a full style/structure rebuild of the original portfolio. Same stack
(React + Vite + Tailwind v4 + GSAP + Framer Motion + Lenis), same content and
copy — but the visual system, layout, and animation choreography were redone
from scratch to move away from the generic "black background, mono/display
font, spotlight card grid" template look.

## What changed

**Design system**
- New palette: warm off-black (`#0a0a08`) + paper (`#f3f0e8`) + acid-lime accent
  (`#d4ff3f`), used sparingly instead of pure black/white everywhere.
- New type system: Fraunces (serif display) + Space Grotesk (headings) + Inter
  (body) + JetBrains Mono, replacing Syne/Plus Jakarta/Space Mono.
- Custom cursor (dot + lagging ring) and magnetic hover on buttons/nav, both
  driven by `requestAnimationFrame` lerp loops — smooth and cheap, no jank.

**Navigation**
- Replaced the floating pill nav with a fixed vertical index rail on desktop
  (numbered sections, active state via `IntersectionObserver`), and a pill
  bottom-nav on mobile.

**Hero**
- Removed the old "pin hero under About" scroll trick.
- New kinetic per-letter title reveal, oversized ghost numeral background,
  a rotating orbit badge with circular text instead of a static scroll arrow.

**About**
- Clip-path image reveal + subtle parallax on scroll instead of the old
  "fade almost invisible" scrub effect.

**Skills**
- Restyled marquee with accent-colored words woven in.

**Services**
- Rebuilt as a numbered accordion list (click to expand) instead of a 4-up
  icon-card grid — reads more editorial, less templated.

**Projects**
- Rebuilt as a GSAP horizontal-scroll showcase, pinned and scrubbed by the
  page's vertical scroll on desktop; falls back to native horizontal swipe
  on mobile. Bigger imagery, less generic 3-card grid.

**Journey**
- Vertical timeline with an accent progress spine that draws in on scroll,
  category color-coding, same expand/collapse interaction.

**Contact / Footer**
- Restyled to match, magnetic submit/back-to-top buttons, animated
  focus-underline form fields.

## Notes
- No new dependencies were added — everything uses packages already in
  `package.json` (gsap, framer-motion, lenis, react-icons).
- Run `npm install && npm run dev` as usual.
- Replace the placeholder images in `public/images/` with real photos —
  the fallback initials ("IR") will show until you do.
