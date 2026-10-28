# AURA & OAK - Luxury Interior Design Studio Landing Page

A complete, high-converting, fully functional, and responsive Luxury Interior & Architectural Design Landing Page built for interior clients, design agencies, and turnkey contractors.

---

## 🌟 Key Features

1. **Brand Identity & Aesthetics**:
   - Modern Neoclassical Luxury Aesthetic (Warm Sand, Charcoal, and Champagne Gold color palette).
   - High-end typography with Google Fonts `Cinzel` (regal serif headers) and `Plus Jakarta Sans` (crisp body text).
   - Glassmorphic navigation bar with scroll blur and dynamic mobile slide-out menu.

2. **Interactive Before & After Transformation Slider**:
   - Touch & mouse draggable comparison slider showing a raw bare-shell apartment versus a finished luxury residence.
   - Shows project scope, duration (48 days), area (3,450 sq.ft), and hardware specifications.

3. **Live Interactive Cost & Budget Estimator**:
   - Real-time client budget calculator based on:
     - Property Configuration (1 BHK, 2 BHK, 3 BHK, 4 BHK / Penthouse, Villa, Commercial Office)
     - Scope (Turnkey Full Home, Modular Kitchen Only, Living & Dining, Complete Renovation)
     - Material Palette (Essential Modern, Premium Luxury, Ultra-Luxury Italian)
   - Computes estimated budget range (₹ in Lakhs) dynamically.
   - Computes guaranteed completion timeline (with penalty clause).
   - Dynamically updates what's included in the package.
   - "Lock This Estimate" automatically passes the calculated details to the booking modal!

4. **Filterable Portfolio Gallery with Fullscreen Lightbox**:
   - Categories: All Spaces, Living Rooms, Modular Kitchens, Master Suites, Villas & Penthouses.
   - Lightbox modal displaying high-res photos, project blueprints, client location, and direct "Inquire about this style" CTA.

5. **Curated Services Grid**:
   - Full Turnkey Residential (2BHK, 3BHK, 4BHK)
   - German Engineered Modular Kitchens (Blum, Hafele, Sintered Quartz)
   - Master Suites & Bronze Profile Glass Walk-in Closets
   - Villas & Penthouse Double-Height Architecture
   - Boutique Offices & Retail Spaces
   - Spa-Inspired Bathrooms & Waterproof Remodeling

6. **Lead Generation & High Conversion Optimization**:
   - Hero Instant Callback form.
   - Sticky WhatsApp Floating Button with pulse animation.
   - Dedicated "Book 1-on-1 Consultation" section.
   - Popup Modal for scheduling 3D Virtual Reality walkthroughs.
   - Toast notification feedback with direct WhatsApp transfer prompt.

7. **The 6 Unmatched Client Guarantees**:
   - 45-Day Handover Guarantee (with ₹1,000/day penalty clause).
   - 10-Year Comprehensive Woodwork Warranty.
   - Zero Cost Escalation Guarantee (100% price lock).
   - 150+ Quality Checkpoint Audits.
   - Dedicated Single Point Architect.
   - 0% Interest EMI Financing.

8. **Interactive FAQ Accordion**:
   - Answers top client questions regarding sq.ft costs, brands used, Vastu compliance, and payment milestones.

---

## 🚀 How to Run & View

1. Navigate to the folder:
   ```
   c:\Users\Nikhat\Downloads\luxe-interiors\
   ```
2. Double-click on **`index.html`** to open it immediately in Google Chrome, Microsoft Edge, or any modern web browser.
3. No build step, node modules, or complex setup required! All stylesheets (Tailwind CDN, Lucide Icons, Google Fonts) load automatically over internet.

---

## 🛠️ How to Customize for Your Client

### 1. Update WhatsApp & Phone Number:
Open `index.html` and `app.js` and search for:
- `919876543210` -> Replace with your client's actual 10-digit WhatsApp phone number with country code (e.g. `919820012345`).
- `+91 98765 43210` -> Replace with your client's calling number.

### 2. Update Studio Name & Locations:
- Search for `AURA & OAK` and replace with your client's brand name.
- Update city names in the navbar and footer (currently configured for Delhi NCR, Mumbai, and Bengaluru).

### 3. Update Pricing Rates in Budget Estimator:
Open `app.js` and locate lines 44-64 (`baseRates` and `scopeMultipliers`):
```javascript
const baseRates = {
  '1bhk': { baseSqft: 650, baseLakhs: 4.5, timeDays: 35 },
  '2bhk': { baseSqft: 1050, baseLakhs: 7.5, timeDays: 45 },
  '3bhk': { baseSqft: 1550, baseLakhs: 11.5, timeDays: 55 },
  '4bhk': { baseSqft: 2200, baseLakhs: 16.5, timeDays: 65 },
  'villa': { baseSqft: 3500, baseLakhs: 25.0, timeDays: 75 },
  'commercial': { baseSqft: 1800, baseLakhs: 13.0, timeDays: 50 }
};
```
You can adjust the baseline prices to match your client's local market rates.

---

## 🌐 Free Deployment Options

- **Netlify Drop**: Simply drag and drop the `luxe-interiors` folder into [app.netlify.com/drop](https://app.netlify.com/drop) for an instant live `.netlify.app` website.
- **GitHub Pages**: Push this directory to a GitHub repo and enable Pages in repository settings.
- **Vercel / Hostinger / cPanel**: Upload `index.html`, `styles.css`, and `app.js` directly to the `public_html` or root directory.
