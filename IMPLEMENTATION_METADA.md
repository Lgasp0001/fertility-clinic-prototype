# Implementation Plan: Website Metadata & Social Branding

This plan outlines the steps to replace generic placeholder previews with a custom, high-quality snapshot of the **Frosts Dental Practice** website and implement a robust metadata system for SEO and social media sharing.

## Phase 1: Asset Preparation

### 1.1 Social Media Preview Image (OG Image)
- **Snapshot Selection**: We have captured a high-resolution screenshot of the hero section that reflects the premium, boutique aesthetic of the brand (teal highlights, dark navy background, luxury typography).
- **Optimization**: Save the snapshot as `public/og-image.png` (1200x630px recommended for optimal sharing).
- **Secondary Asset**: Create `public/twitter-image.png` optimized for Twitter's Summary Large Image format.

### 1.2 Branded Icons
- **Favicon**: Create a `public/favicon.ico` using the stylized "tooth/crown" logo identified in the header.
- **Apple Touch Icon**: Create `public/apple-touch-icon.png` (180px) for iOS bookmarks.

---

## Phase 2: Metadata Implementation (Next.js App Router)

We will update `app/layout.tsx` to include a comprehensive `Metadata` object.

### 2.1 Basic SEO
- **Title**: `Frosts Dental Practice | Premium Boutique Dentistry in Austin, TX`
- **Description**: `Escape the clinical cold. Experience world-class artistry and gentle precision in our South Congress studio. Invisalign, Whitening & Implants.`
- **Keywords**: `Austin Dentist, Boutique Dentistry, South Congress Dental, Invisalign Austin, Cosmetic Dentist Austin`

### 2.2 Open Graph (Facebook, LinkedIn, Discord)
- `og:type`: `website`
- `og:url`: `https://frosts-dental.com` (to be updated with actual domain)
- `og:title`: `Frosts Dental Practice | Premium Boutique Dentistry`
- `og:description`: `Experience dental care redefined. World-class artistry meeting medical precision in Austin, TX.`
- `og:image`: `/og-image.png`
- `og:siteName`: `Frosts Dental Practice`

### 2.3 Twitter Cards
- `twitter:card`: `summary_large_image`
- `twitter:title`: `Frosts Dental Practice | Boutique Austin Dentistry`
- `twitter:description`: `Transform your smile with premium care. 0% finance available.`
- `twitter:image`: `/og-image.png`

---

## Phase 3: Technical Execution Steps

1. **File Placement**:
   - Copy the captured snapshot to `/public/og-image.png`.
   - Ensure the logo icon is exported and placed in `/public/favicon.ico`.

2. **Code Update**:
   - Modify the `metadata` export in `app/layout.tsx`.
   - Add `metadataBase` to ensure relative image paths work correctly in production.

3. **Verification**:
   - Check local meta tags using browser dev tools.
   - Use [Metadata Checkers](https://metatags.io) to simulate social shares.

---

## Phase 4: Future Enhancements
- **Dynamic Metadata**: If sub-pages are added (e.g., /treatments/invisalign), we will implement `generateMetadata` to provide specific titles and images for each service.
- **Microdata/Schema.org**: Add `LocalBusiness` JSON-LD schema to help Google understand the practice's location, hours, and services.
