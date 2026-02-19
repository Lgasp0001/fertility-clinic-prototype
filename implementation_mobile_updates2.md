# Implementation Plan: Mobile Layout Updates Phase 2

This plan addresses minor visual flaws in the mobile layout, specifically focusing on button consistency and alignment.

## 1. Equalize Mobile Sticky CTA Buttons
**Issue:** The "Book Now" and "Call Now" buttons in the sticky footer are not the same size. The "Book Now" button (using the `Button` component) is slightly smaller due to default height constraints.
**Solution:** Ensure both buttons have identical structural styling and occupy equal width.

- **File:** `components/layout/MobileStickyCTA.tsx`
- **Changes:**
    - Add `w-full` and `h-auto` or `h-14` to the `Button`.
    - Ensure both have `rounded-lg` and identical vertical padding.
    - Standardize the `font-medium` and `text-base` (or equivalent).

## 2. Center Hero Scroll Indicator
**Issue:** The grey chevron/arrow pointing down in the Hero section is slightly offset to the right.
**Solution:** Correct the centering logic by avoiding CSS `transform` conflicts with Framer Motion animations.

- **File:** `components/home/HeroSection.tsx`
- **Changes:**
    - Remove `transform -translate-x-1/2` from the `className`.
    - Add `style={{ x: '-50%' }}` to the `motion.button` to let Framer Motion handle the horizontal offset correctly alongside the `y` animation.

## 3. Implementation Steps
1. Modify `components/layout/MobileStickyCTA.tsx` to standardize button dimensions.
2. Modify `components/home/HeroSection.tsx` to fix the scroll indicator alignment.
3. Verify changes across mobile viewports.

---
**Created by:** Antigravity AI
