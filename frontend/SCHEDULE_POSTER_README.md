# Schedule Poster - Print-Optimized 24x36" Poster

## Overview

The Schedule Poster is a print-optimized version of the "At a Glance" schedule designed for large format printing (24" x 36" portrait orientation). It's designed to be viewed from several feet away with excellent readability and is styled with the REVEL visual identity.

## Routes

The schedule poster is available at the following routes:

- **`/schedule-poster`** — Default (Friday July 3)
- **`/schedule-poster/friday`** — Friday July 3  
- **`/schedule-poster/saturday`** — Saturday July 4
- **`/schedule-poster/sunday`** — Sunday July 5

## Features

✅ **Print-Optimized Layout**
- 24" x 36" portrait page size configured via CSS `@page` rule
- 0.5" margins on all sides
- Designed for exactly one day per page

✅ **Visual Design**
- Dark floral/burgundy/gold/warm ivory REVEL color palette
- High contrast text for readability from distance
- Blurred, darkened background for atmospheric effect
- Clear typography hierarchy

✅ **Content**
- Large title: "REVEL 2026"
- Day and date: "Friday At a Glance" + "July 3"
- Time column (dark burgundy, bold text)
- Venue columns:
  - The Marquee
  - The Hearth
  - The Threshold
  - The Grove
  - Other Locations
- Full-width meal bands (breakfast, lunch, dinner with times and locations)
- Workshop titles and facilitator names
- Footer with "Schedule subject to change" text
- QR code placeholder (labeled "Live Schedule" in lower right)

✅ **Print-Ready CSS**
- `@media print` rules hide screen-only elements (print button)
- `@page` CSS specifies 24x36" size
- Print color adjustments ensure accurate colors
- No sticky elements, animations, or hover effects that don't work in print

✅ **Screen Preview**
- Responsive layout for previewing on smaller screens
- Print button visible on screen only (hidden in print)
- Maintains legibility at all sizes

## How to Use

### On Screen
1. Navigate to `/schedule-poster`, `/schedule-poster/friday`, `/schedule-poster/saturday`, or `/schedule-poster/sunday`
2. Preview the poster layout on screen
3. Click the "🖨️ Print Poster" button to open the print dialog

### Printing to PDF
1. Click "Print Poster" button
2. In the print dialog, choose:
   - **Destination:** "Save as PDF"
   - **Paper size:** "24 x 36 in" (if available; otherwise use the paper size closest to this)
   - **Margins:** "None" or "Default" depending on your setup
   - **Background graphics:** ✅ Enabled
3. Click "Save" and choose a location

### Printing to Physical Poster
1. Send the PDF to a large-format printer (24" x 36" plotter/wide-format printer)
2. Ensure color mode is enabled for best results
3. Use matte or glossy poster paper for durability

## Customization Guide

### Change the QR Code
The QR code placeholder is in [src/pages/SchedulePoster.jsx](src/pages/SchedulePoster.jsx), in the footer section:

```jsx
<div className="qr-box">
  [QR Code]
</div>
```

Replace `[QR Code]` with an actual QR code image:
```jsx
<div className="qr-box">
  <img src="/qr-code-live-schedule.png" alt="Live Schedule" />
</div>
```

### Adjust Colors
Update the CSS variables in [src/styles/SchedulePoster.css](src/styles/SchedulePoster.css):
```css
:root {
  --poster-cream: #f5f1ed;
  --poster-dark-wine: #1a1614;
  --poster-charcoal: #2a2420;
  --poster-copper: #c9a875;
  --poster-rust: #a85c3f;
  --poster-burgundy: #6b2e24;
}
```

### Change Page Size
Modify the `@page` rule in [src/styles/SchedulePoster.css](src/styles/SchedulePoster.css):
```css
@page {
  size: 24in 36in;  /* Change these dimensions */
  margin: 0.5in;
}
```

### Add More Days
To add Thursday or other days:
1. Update the component logic in `SchedulePoster.jsx` to handle the new day abbreviation
2. Add the new route in `App.jsx`:
   ```jsx
   <Route path="/schedule-poster/thursday" element={<SchedulePoster />} />
   ```

### Adjust Text Sizes
All font sizes are configured in the CSS. For example:
- Main title: `font-size: 48px`
- Day name: `font-size: 42px`
- Time label: `font-size: 18px`
- Venue name: `font-size: 12px`
- Event title: `font-size: 11px`

### Background Image
The poster uses the same background image as the web schedule (`/REVEL%20Backdrop%20Horizontal.jpg`). To change:
1. Update the background URL in `.poster-container`
2. Adjust the blur, darkness, and overlay opacity as needed

## File Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Schedule.jsx           (original web schedule - unchanged)
│   │   └── SchedulePoster.jsx     (NEW - print-optimized poster)
│   ├── styles/
│   │   ├── Schedule.css           (original web schedule styles - unchanged)
│   │   └── SchedulePoster.css     (NEW - print-optimized styles)
│   └── App.jsx                    (updated with new routes)
```

## Data Reuse

The poster component reuses existing data sources:
- `src/data/scheduleData.js` — Event times, venues, facilitators
- `src/data/facilitatorData.js` — Facilitator names and details

No schedule data was duplicated or modified, ensuring consistency with the web schedule.

## Browser Support

- ✅ Chrome (recommended for printing to PDF)
- ✅ Safari
- ✅ Firefox
- ⚠️ Edge (should work, but Chrome recommended for print quality)

## Responsive Breakpoints

- **Desktop (>1200px):** Full size poster preview
- **Tablet (768px - 1200px):** Scaled-down preview
- **Mobile (<768px):** Single-column layout for preview

## Print Testing Checklist

- [ ] Colors print accurately (especially burgundy and copper)
- [ ] Text is readable from 5+ feet away
- [ ] No page breaks in the middle of time slots or meals
- [ ] QR code is scannable
- [ ] Footer text and date are visible
- [ ] Venue headers stand out clearly
- [ ] Breakfast, lunch, dinner meals are clearly marked

## Notes

- The existing `/schedule` page is completely unchanged
- This poster page does not affect the mobile-friendly web schedule
- All styling is isolated to prevent conflicts with other pages
- The component handles both event times and meal times automatically
- Facilitator names are properly formatted (e.g., "Name & Name" for pairs)

## Future Enhancements

Potential additions (not included in initial release):
- Interactive QR code that generates the actual URL
- Option to include workshop descriptions or icons
- Color-coded venue sections
- Multiple poster sizes (other print dimensions)
- Export as high-resolution image file
- Day/night mode toggle for printing
- Custom logo placement

---

**Created:** June 25, 2026  
**Component:** SchedulePoster.jsx (React)  
**Styling:** SchedulePoster.css (CSS with @page media queries)  
**Routes:** `/schedule-poster`, `/schedule-poster/[friday|saturday|sunday]`
