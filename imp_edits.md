# Frosts Dental Practice - Implementation Plan (Phase 3: Reality & Refinement)

**Objective:** Increase site authenticity by dialing back "perfect" ratings, fixing UI visibility at the top of the page, and expanding interactive elements.

## 1. Smile Quiz Expansion
- **Component:** `SmileQuiz.tsx`
- **Action:** Add a 4th option to questions for "Outcome" and "Timeline" to balance the 4-column grid layout.
- **Steps to Add:**
  - **Outcome:** Add "Other/Professional Advice Needed" or similar.
  - **Timeline:** Add "Flexibile / Planning for next year".

## 2. Hero & Branding Updates
- **Title:** Retitle to "Frosts Dental Practice" for a more grounded, established feel.
- **Authenticity Tuning:** 
  - Change "5 Stars" in the Hero badge to **4.5 Stars**.
  - Change "4.9/5" in Social Proof to **4.4/5** (matching user's request for authenticity).
- **Header Visibility:** Add a subtle white semi-transparent "ledge" or gradient at the very top of the hero section to ensure black header text is legible over the navy/teal background.

## 3. Logo Redesign
- **Component:** `Header.tsx` & `Footer.tsx`
- **Action:** Replace the current generic icon with a more "Dental Practice" specific silhouette (e.g., a stylized molar or minimalist studio icon).

## 4. Patient Proof & Media
- **Real Imagery:** Replace placeholder icons in `SocialProof.tsx` and `PatientTransformations.tsx` with high-quality generated imagery (using `generate_image` tool or Unsplash).
- **Cleanup:** 
  - Remove "View All Patient Transformations" link.
  - Fix the "Get Your Smile Assessment" button in the Featured Case section to scroll to `#quiz`.

## 5. Cross-Page Navigation Refinement
- **Requirement:** Ensure Header links (Treatments, FAQs, Testimonials) work when navigating from the Contact page back to the Home page.
- **Approach:** Update `Header.tsx` to detect the current path. If not on home, prefix hash links with `/`.

---

## Implementation Checklist
- [x] Create `imp_edits.md` (Self-documenting)
- [x] Update `SmileQuiz.tsx` (4 options per step)
- [x] Polish `HeroSection.tsx` (Title, 4.5 stars, 4.4 rating updates)
- [x] UI Fix: Header background/text contrast
- [x] Logo Replacement
- [x] Social Proof: Add images, fix ratings, and cleanup
- [x] PatientTransformations: Fix button & imagery
- [x] Header.tsx: Fix cross-page navigation logic
