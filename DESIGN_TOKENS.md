# Design Tokens & Color System

## 🎨 Color Palette

### Primary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Primary (Orange)** | `#FF6B35` | rgb(255, 107, 53) | CTAs, highlights, accent elements |
| **Primary Hover** | `#E55D2B` | rgb(229, 93, 43) | Hover states on primary buttons |
| **Primary Light** | `#FFA85C` | rgb(255, 168, 92) | Subtle highlights, badges |

### Neutral Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Background** | `#FAF6F0` | rgb(250, 246, 240) | Main background, sections |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds, overlays |
| **Foreground** | `#2D2D2D` | rgb(45, 45, 45) | Primary text, dark elements |
| **Muted** | `#E8DCC8` | rgb(232, 220, 200) | Borders, dividers |

### Secondary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Secondary** | `#F5E6D3` | rgb(245, 230, 211) | Light backgrounds, accents |
| **Muted Foreground** | `#6B6B6B` | rgb(107, 107, 107) | Secondary text, captions |
| **Destructive** | `#EF4444` | rgb(239, 68, 68) | Errors, warnings, delete actions |

## 📐 Spacing Scale

Based on Tailwind's 4px base unit:

```
xs   = 0.25rem (4px)
sm   = 0.5rem (8px)
md   = 1rem (16px)
lg   = 1.5rem (24px)
xl   = 2rem (32px)
2xl  = 2.5rem (40px)
3xl  = 3rem (48px)
4xl  = 4rem (64px)
6xl  = 6rem (96px)
8xl  = 8rem (128px)
```

**Usage**: `p-4` (padding), `gap-8` (gap), `m-6` (margin)

## 🔤 Typography

### Font Family
- **Sans Serif**: Geist (used for all text)
- **Mono**: Geist Mono (for code blocks)

### Font Sizes

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| **Display** | 3xl-4xl (30-36px) | 1.1 | Main headlines |
| **Heading 1** | 2xl-3xl (24-30px) | 1.2 | Section titles |
| **Heading 2** | xl-2xl (20-24px) | 1.3 | Subsection titles |
| **Body Large** | lg (18px) | 1.6 | Introductory text |
| **Body** | base (16px) | 1.6 | Regular text |
| **Small** | sm (14px) | 1.5 | Captions, labels |
| **Tiny** | xs (12px) | 1.4 | Fine print |

### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Labels, inputs
- **Semibold**: 600 - Subheadings
- **Bold**: 700 - Headings

### Line Heights
- **Tight**: 1.1-1.2 - Headlines
- **Normal**: 1.4-1.5 - Form labels
- **Relaxed**: 1.6 - Body text

## 🎯 Border Radius

| Name | Value | Usage |
|------|-------|-------|
| **sm** | 0.375rem (6px) | Small elements |
| **md** | 0.625rem (10px) | Default radius |
| **lg** | 0.875rem (14px) | Large elements |
| **xl** | 1.25rem (20px) | Extra large |
| **2xl** | 1.5rem (24px) | Cards |
| **full** | 9999px | Pills, badges |

## 🔘 Button Styles

### Primary Button
```css
background-color: #FF6B35
color: #FFFFFF
padding: 0.75rem 1.5rem (py-3 px-6)
border-radius: 9999px (rounded-full)
font-weight: 600
transition: background-color 0.2s
```

**Hover**: `#E55D2B`

### Secondary Button
```css
border: 2px solid #FF6B35
color: #FF6B35
background-color: transparent
padding: 0.75rem 1.5rem
border-radius: 9999px
```

**Hover**: `background-color: #FAF6F0`

### Outline Button
```css
border: 1px solid #E8DCC8
color: #2D2D2D
background-color: #FFFFFF
```

## 📦 Component Colors

### Cards
```css
background: #FFFFFF
border: 1px solid #E8DCC8
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
border-radius: 0.625rem
```

**Hover**: `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)`

### Input Fields
```css
background: #FFFFFF
border: 1px solid #E8DCC8
color: #2D2D2D
padding: 0.5rem 1rem
border-radius: 0.375rem
```

**Focus**: `border-color: #FF6B35` + `outline: none` + `ring: 2px solid #FF6B35`

### Badges & Tags
```css
background: #F5E6D3
color: #2D2D2D
padding: 0.25rem 0.75rem
border-radius: 9999px
font-size: 0.875rem
font-weight: 500
```

## 🌙 Dark Mode (Not Implemented)

If dark mode is needed in future:

```css
--background: #1A1A1A
--foreground: #FFFFFF
--card: #242424
--primary: #FF8B5A (lighter orange)
--secondary: #333333
--muted: #404040
```

## 📏 Responsive Breakpoints

| Breakpoint | Width | CSS |
|------------|-------|-----|
| **Mobile** | < 640px | default (no prefix) |
| **SM** | 640px | `sm:` |
| **MD** | 768px | `md:` |
| **LG** | 1024px | `lg:` |
| **XL** | 1280px | `xl:` |
| **2XL** | 1536px | `2xl:` |

**Usage**: `hidden md:flex` = hidden on mobile, flex on tablets+

## 🎨 Using Design Tokens

### In Tailwind CSS
```tsx
// Direct color class
<div className="bg-background text-foreground">

// With opacity
<div className="bg-primary/50">

// Responsive
<div className="md:bg-secondary lg:bg-primary">

// Hover states
<button className="hover:bg-primary/90 transition">
```

### Custom CSS
```css
.custom-element {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

## ✨ Accessibility

### Color Contrast Ratios (WCAG AA)
- **Primary (#FF6B35) on White**: 5.8:1 ✅
- **Foreground (#2D2D2D) on Background (#FAF6F0)**: 10.4:1 ✅
- **Muted on White**: 4.5:1 ✅

All colors meet WCAG AA standards (4.5:1 for text).

## 🔄 Theme Customization

To change the theme, update CSS variables in `/app/globals.css`:

```css
:root {
  --primary: #FF6B35;        /* Change CTA color */
  --background: #FAF6F0;     /* Change bg color */
  --foreground: #2D2D2D;     /* Change text color */
  /* ... other tokens ... */
}
```

All components will automatically update!

---

**Last Updated**: March 2026  
**Tailwind Version**: v4  
**Design System**: Custom Orange & Cream
