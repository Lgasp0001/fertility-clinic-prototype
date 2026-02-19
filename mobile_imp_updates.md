# Implementation Plan: Mobile Layout & Component Updates

This plan outlines the fixes for mobile layout issues, testimonial list refinement, and interactive enhancements.

## 1. Fix Mobile Layout Arrow Issue
**Issue:** The "Back to Top" arrow button overlaps with the floating "Book Now" CTA bar on mobile devices.
**Solution:** Adjust the positioning of the `BackToTop` component to sit above the mobile CTA bar on smaller screens.

- **File:** `components/layout/BackToTop.tsx`
- **Change:** Update the `bottom-8` class to a responsive class like `bottom-28 md:bottom-8` to ensure it clears the ~80px height of the `MobileStickyCTA`.
- **Additional Fix:** Hide the arrow if it's too close to the footer or adjust z-index if needed (though z-50 is already high).

## 2. Fix Before and After Slider Expansion
**Issue:** The `ComparisonSlider` component "starts to expand" or displays inconsistently on mobile.
**Solution:** Ensure the aspect ratio is strictly enforced and the container manages sizing correctly.

- **File:** `components/ui/ComparisonSlider.tsx`
- **Change:** 
    - Verify `aspect-[16/10]` behavior. 
    - Consider using a more standard aspect ratio for mobile if needed, or ensuring the container has a defined height/max-height.
    - Check if the background images are causing layout shifts.
    - Update styling to `relative w-full overflow-hidden` and use a padding-bottom hack if `aspect-ratio` is inconsistent across mobile browsers.

## 3. Shorten Testimonial List
**Issue:** The list of 20 testimonials is too long for a good user experience.
**Solution:** Reduce the number of visible testimonials in the carousel to the most impactful 6-8 items.

- **File:** `lib/data/testimonials.ts` or `components/home/TestimonialCarousel.tsx`
- **Change:** Slice the `testimonials` array to only include the first 8 items for the main display.

## 4. Implement Testimonial Swiping/Scrolling
**Issue:** Testimonials only advance via buttons and lack intuitive touch interaction.
**Solution:** Enable left/right swiping for the testimonial carousel on both mobile and desktop.

- **File:** `components/home/TestimonialCarousel.tsx`
- **Change:** 
    - Implement Framer Motion `drag="x"` and `dragConstraints={{ left: 0, right: 0 }}`.
    - Add logic to handle the `onDragEnd` event to trigger `nextTestimonial` or `prevTestimonial` based on drag distance/velocity.
    - Ensure smooth transitions between slides.

---
**Created by:** Antigravity AI
