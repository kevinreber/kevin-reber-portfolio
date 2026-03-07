# User Engagement Enhancement Ideas

Enhancement ideas to make the portfolio more engaging and attention-grabbing.

## 1. Scroll-Triggered Animations (High Impact)

Content is currently static on page load. Adding fade-in / slide-up animations as
sections scroll into view using `IntersectionObserver` or `framer-motion` would make
each section feel alive. The existing `transition`, `hidden`, and `show` CSS classes
in `App.css` suggest this was planned but never fully wired up.

**Effort:** Medium | **Impact:** High

## 2. Dark Mode Toggle

The site is currently white-only. A dark mode toggle in the navbar would be a modern
touch and show off CSS/theming skills. The green accent (`#54b78a`) pops even more
against a dark background.

**Effort:** Medium | **Impact:** High

## 3. Typing Animation on the Hero

Replace the static "Hello World, my name is" / "Kevin Reber" text with a typewriter
effect. This is a classic portfolio attention-grabber - the hero section currently has
no text animation besides the waving hand GIF.

**Effort:** Low | **Impact:** High

## 4. Interactive Project Cards with Tilt/Parallax

The project cards already have a nice hover glow effect. Adding a subtle 3D tilt on
mouse move (using something like `react-tilt`) would make them feel more tactile and
premium.

**Effort:** Low | **Impact:** Medium

## 5. Sticky/Active Nav Link Highlighting

The navbar currently has no indication of which section the user is viewing. Adding
scroll-spy behavior that highlights the active nav link would improve navigation and
feel polished.

**Effort:** Low | **Impact:** Medium

## 6. "Currently Building" or Testimonials Section

The site flow is Skills -> Projects -> Contact. Adding a brief "Currently building..."
or testimonials section between Projects and Contact would add social proof and keep
visitors engaged longer.

**Effort:** Medium | **Impact:** Medium

## 7. Animated Skill Bars or Tech Icons

The Skills section is plain text lists. Replacing them with animated progress bars or
using actual tech logos/icons that animate on hover would make the section much more
visually engaging.

**Effort:** Medium | **Impact:** High

## 8. Progressive Web App (PWA)

There's already a `manifest.json` in the project. Turning this into a proper PWA with
a service worker, offline support, and installability would be a nice talking point and
demonstrate full-stack knowledge.

**Effort:** Low | **Impact:** Low

## 9. Blog / Writing Section

Adding a lightweight blog or "thoughts" section (even linking to external posts on
Medium, Dev.to, etc.) would give visitors a reason to return and show depth beyond
project demos.

**Effort:** Medium-High | **Impact:** Medium

## 10. Micro-Interactions on Buttons

The buttons already have a sheen animation. Adding subtle feedback like scale bounce on
click or ripple effects would make CTA buttons ("Say Hello", "View My Work") feel more
responsive and satisfying.

**Effort:** Low | **Impact:** Low

---

## Recommended Priority Order

1. Typing animation on hero (quick win, big visual impact)
2. Scroll-triggered section animations (transforms the feel of the whole site)
3. Dark mode toggle (modern, expected feature)
4. Animated skill icons (makes Skills section stand out)
5. Active nav link highlighting (polish)
6. Project card tilt effect (polish)
7. "Currently building" section (content)
8. Button micro-interactions (polish)
9. Blog section (content strategy)
10. PWA setup (technical depth)
