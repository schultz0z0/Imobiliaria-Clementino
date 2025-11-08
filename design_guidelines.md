# Design Guidelines - Imobiliária Clementino

## Design Approach
**Reference-Based**: Drawing inspiration from premium real estate platforms (Zillow, Realtor.com) combined with modern SaaS aesthetics (Linear, Notion) to create a sophisticated yet accessible experience for both luxury and affordable property markets.

## Brand Identity (User-Specified)

### Color Palette
- **Primary**: Azul Profundo Premium `#0A2463` (trust, professionalism)
- **Secondary**: Azul Médio Elegante `#3E60A3` (accessibility, modernity)  
- **Accent**: Dourado Refinado `#D4AF37` (luxury, premium highlights)
- **Neutrals**: Cinza Platinum `#F5F7FA`, Cinza Escuro `#2C3E50`, Branco Puro `#FFFFFF`
- **Status**: Verde Sucesso `#10B981`, Laranja Destaque `#F59E0B`

### Typography
- **Primary**: Outfit (headings, display text, CTAs)
- **Secondary**: Inter (body copy, UI elements)
- **Hierarchy**: Display (48-64px) → H1 (36-42px) → H2 (28-32px) → H3 (20-24px) → Body (16-18px) → Caption (14px)
- **Weights**: Bold (700) for headings, Semibold (600) for subheadings, Regular (400) for body, Medium (500) for UI elements

## Layout System

### Spacing Scale
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Tight spacing: `p-2, gap-4` (cards, forms)
- Standard: `p-6, py-8` (sections, containers)
- Generous: `py-16, py-20, py-24` (hero sections, major dividers)

### Grid System
- **Desktop**: 12-column grid, max-width `7xl` (1280px)
- **Property Cards**: 3-column grid (`lg:grid-cols-3`) on desktop, 2-column on tablet (`md:grid-cols-2`), single column mobile
- **Blog Grid**: 2-column (`lg:grid-cols-2`) for featured articles, 3-column for article archive
- **CMS Dashboard**: Flexible grid with sidebar navigation (240px fixed width)

## Component Library

### Navigation
- **Main Header**: Sticky navigation with logo (left), menu items (center), CTA button in Dourado Refinado (right)
- **CMS Sidebar**: Fixed left sidebar (240px) with icon + label navigation, collapsible sections for Site/Imobiliária/IA divisions
- **Mobile**: Hamburger menu with slide-in drawer

### Property Cards
- **Structure**: Image carousel (4:3 ratio), overlay badges (Destaque, Venda, Aluguel), property title (Outfit Semibold), price (large, Azul Profundo), location + specs (beds, baths, area), hover state reveals "Ver Detalhes" button
- **Badge Style**: Small rounded pills with semi-transparent backgrounds, white text
- **Image Treatment**: Subtle zoom on hover (scale 1.05), 300ms transition

### Forms
- **Style**: Clean inputs with 1px borders (Cinza Escuro 20% opacity), focus state with Azul Médio border + subtle glow
- **Labels**: Above inputs, Outfit Medium 14px
- **Buttons**: Primary (Azul Profundo), Secondary (outlined Azul Médio), Accent CTAs (Dourado Refinado with subtle shine effect)
- **Lead Capture**: Multi-step with progress indicator, generous spacing between fields

### Blog Components
- **Article Cards**: Featured image (16:9), category tag (Dourado pill), title, excerpt, author + date, read time
- **Article Layout**: Hero image (full-width), centered content (max-w-prose), pull quotes in Azul Médio, related articles grid at bottom

### Dashboard Widgets
- **Stat Cards**: White background, rounded corners (lg), icon (colored background circle), large number (Outfit Bold), label + trend indicator
- **Charts**: Clean line/bar charts using Chart.js with brand color palette
- **Tables**: Striped rows (subtle Cinza Platinum), sortable headers, action buttons (icon-only)

### CMS Property Manager
- **Image Upload**: Drag-and-drop zone with preview grid, reorderable thumbnails, set featured image
- **Status Badges**: Color-coded (Verde for active, Laranja for pending, gray for draft)

## Images

### Hero Section (Homepage)
Large full-width hero image (1920x800px) showcasing modern property with city skyline or elegant interior. Overlay gradient (Azul Profundo 60% to transparent) with white headline text and CTAs with blurred backgrounds.

### Property Listings
High-quality property photos (1200x900px minimum), multiple angles per property. Professional photography showcasing best features.

### About Page
Team photos in office setting, professional headshots in circular frames, company timeline with milestone images.

### Blog
Featured images (1200x630px) for article headers, inline images for content illustration.

## Animation Guidelines
**Minimal & Purposeful**: 
- Subtle fade-ins on scroll (100-200ms delay)
- Smooth transitions for interactive elements (200-300ms)
- Property card hover effects (image zoom, button reveal)
- NO heavy scroll-triggered animations or parallax effects
- Focus: Performance and professional feel over flashy effects

## Accessibility
- WCAG AA minimum contrast ratios
- Focus states visible on all interactive elements (2px Azul Médio outline)
- Form inputs with clear labels and error states (text + border in red)
- Alt text for all images
- Semantic HTML structure

## Page-Specific Layouts

### Homepage
1. Hero with search bar (property type, location, price range)
2. Featured properties (3-column grid)
3. Services overview (4-column icon grid)
4. Why Choose Us (2-column: image + benefits list)
5. Latest Blog Posts (3-column)
6. Newsletter signup + Contact CTA

### Property Detail Page
Full-width image gallery, sticky sidebar with price/contact form, tabbed content (Details, Location Map, Documents), similar properties carousel

### CMS Dashboard
Left sidebar navigation, top bar with user profile + notifications, main content area with page title + action buttons, data tables/grids with filters

This design creates a premium, trustworthy real estate platform balancing sophistication with usability across all user touchpoints.