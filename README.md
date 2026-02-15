# AgriVora Landing Page

A modern, mobile-first landing page for AgriVora - an IoT + AI powered crop recommendation mobile app designed for Sri Lankan agriculture.

## 🎨 Design System

### Color Palette

**Primary Colors (Nature Green)**
- `--color-primary: #2D7A3E` - Main brand green
- `--color-primary-dark: #1F5A2C` - Dark green for gradients
- `--color-primary-light: #4A9D5F` - Light green for hover states

**Secondary Colors (Earthy Brown)**
- `--color-secondary: #8B6F47` - Earthy brown accent
- `--color-secondary-dark: #6B5437` - Dark brown
- `--color-secondary-light: #A68A5F` - Light brown

**Neutral Colors**
- `--color-white: #FFFFFF`
- `--color-background: #FAFAF8` - Off-white background
- `--color-text-primary: #1A1A1A` - Main text
- `--color-text-secondary: #4A4A4A` - Secondary text
- `--color-text-muted: #757575` - Muted text

### Typography

**Font Family**: Inter (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

**Font Sizes** (Mobile-first)
- `xs`: 12px - Small labels, badges
- `sm`: 14px - Body text, links
- `base`: 16px - Default body text
- `lg`: 18px - Large body text
- `xl`: 20px - Small headings
- `2xl`: 24px - Medium headings
- `3xl`: 30px - Section titles (mobile)
- `4xl`: 36px - Hero title (tablet)
- `5xl`: 48px - Hero title (desktop)

**Line Heights**
- Tight: 1.25 - Headings
- Normal: 1.5 - Body text
- Relaxed: 1.75 - Long-form content

### Spacing System (8px base)

All spacing uses multiples of 8px for consistency:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px

### Grid System

**12-Column Responsive Grid**
- Mobile: Single column (< 768px)
- Tablet: 2-4 columns (768px - 1023px)
- Desktop: 3-4 columns (1024px+)

**Breakpoints**
- Mobile: < 768px (default)
- Tablet: 768px - 1023px
- Desktop: 1024px - 1199px
- Large Desktop: 1200px+

**Container Max Widths**
- Mobile: 100% with 16px padding
- Tablet: 720px with 24px padding
- Desktop: 960px
- Large Desktop: 1200px

## 📱 Sections

### 1. Navigation Bar
- Fixed position with backdrop blur
- Logo + navigation links
- Primary CTA button
- Mobile hamburger menu

### 2. Hero Section
- Trust badges (Sri Lanka-focused, AI-powered, etc.)
- Main headline and value proposition
- Primary and secondary CTAs
- Animated phone mockup
- Decorative wave divider

### 3. How It Works (4 Steps)
- Step cards with numbers and icons
- Hover animations
- Clear, simple descriptions

### 4. Key Features (9 Features)
- Icon cards in responsive grid
- Soil analysis, pH reading, GPS, crop ranking, etc.
- Hover lift effect

### 5. Screenshots
- 4 app screen mockups
- Soil Scan, pH Reading, Crop Results, Map/Weather
- Responsive grid layout

### 6. Use Cases
- Target user cards: Farmers, Gardeners, Students, Growers
- Icon-based design

### 7. Benefits
- Three main benefits with icons
- Statistics card with animated counters
- Two-column layout on desktop

### 8. FAQ
- Accordion-style expandable questions
- 5 common questions answered
- Smooth expand/collapse animation

### 9. Final CTA
- Green gradient background
- Download and demo buttons
- Centered content

### 10. Footer
- Brand information
- Navigation links
- Social media icons
- Copyright notice

## 🎯 Accessibility Features

- **Semantic HTML5** elements throughout
- **ARIA labels** on interactive elements
- **Keyboard navigation** support
- **High contrast ratios** (WCAG AA compliant)
- **Readable font sizes** (minimum 14px)
- **Focus indicators** on all interactive elements
- **Alt text ready** for images (placeholders included)

## ⚡ Performance Optimizations

- **Mobile-first CSS** - Smaller initial payload
- **Intersection Observer** - Lazy animations
- **Minimal JavaScript** - No heavy frameworks
- **Google Fonts optimization** - Preconnect headers
- **CSS transitions** instead of JavaScript animations
- **Efficient selectors** - No deep nesting

## 🎭 Animations & Interactions

### Hover Effects
- Button lift on hover
- Card elevation on hover
- Link underline animation
- Social icon lift

### Scroll Animations
- Fade-in on scroll (Intersection Observer)
- Staggered card animations
- Counter animations for statistics

### Interactive Elements
- FAQ accordion
- Mobile menu toggle
- Smooth scroll navigation
- Navbar shadow on scroll

## 📐 Component Specifications

### Buttons
- **Primary**: Green gradient, white text, shadow
- **Secondary**: White background, green border and text
- **Large**: Increased padding for CTAs
- **Icons**: Emoji icons for visual interest

### Cards
- **Border radius**: 12px (lg) or 16px (xl)
- **Shadow**: Subtle on default, elevated on hover
- **Padding**: 32px (xl)
- **Background**: White on colored backgrounds

### Badges
- **Shape**: Pill-shaped (full border radius)
- **Size**: Small text (12px)
- **Style**: White background, subtle border

## 🚀 Usage

1. Open `index.html` in a modern web browser
2. All styles are in `styles.css`
3. All interactions are in `script.js`
4. No build process required - pure HTML/CSS/JS

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Stacked buttons
- Hamburger menu
- Larger touch targets
- Hero content centered

### Tablet (768px - 1023px)
- 2-column grids
- Horizontal button groups
- Full navigation visible
- Hero split into 2 columns

### Desktop (1024px+)
- 3-4 column grids
- Maximum content width
- Optimized spacing
- Enhanced hover effects

## 🎨 Brand Guidelines

### Tone of Voice
- Simple and supportive
- Practical, not overly technical
- Friendly and approachable
- Trustworthy and professional

### Visual Style
- Clean and minimal
- Nature-inspired colors
- Modern and trustworthy
- High readability
- Farmer-friendly

### Imagery
- Focus on soil, crops, and technology
- Show real-world agricultural contexts
- Use Sri Lankan landscapes when possible
- Demonstrate app functionality clearly

## 🔧 Customization

To customize the landing page:

1. **Colors**: Edit CSS variables in `:root` selector
2. **Typography**: Change `--font-family` and font sizes
3. **Spacing**: Adjust `--spacing-*` variables
4. **Content**: Edit HTML text directly
5. **Sections**: Add/remove section blocks as needed

## 📄 Files Structure

```
Landing Page/
├── index.html          # Main HTML structure
├── styles.css          # All styles and design system
├── script.js           # Interactivity and animations
└── README.md          # This file
```

## 🌟 Key Features Implemented

✅ Mobile-first responsive design
✅ 12-column grid system
✅ 8px spacing system
✅ Accessible color contrast (WCAG AA)
✅ Modern sans-serif typography (Inter)
✅ Smooth animations and transitions
✅ Interactive FAQ accordion
✅ Scroll-triggered animations
✅ Mobile navigation menu
✅ SEO-optimized markup
✅ Clean, trustworthy green/agri theme
✅ High readability for all users
✅ Farmer and student-friendly design

## 🎯 Target Audience

- **Primary**: Sri Lankan farmers
- **Secondary**: Home gardeners, agricultural students, small-scale growers
- **Language**: Simple, practical English
- **Technical level**: Non-technical, accessible to all

## 📞 Contact & Support

For questions about AgriVora or this landing page design, refer to the contact section in the footer.

---

**Designed for Sri Lankan Agriculture** 🇱🇰🌱
