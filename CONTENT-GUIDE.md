# Content Editing Guide

This guide shows you how to edit your portfolio content directly in `app/page.js`.

---

## Quick Reference

| Content | Location in page.js | Line Numbers |
|---------|---------------------|--------------|
| Your Name | `navItems`, footer | 229, 526 |
| Hero Tagline | `<h1>` in Hero Section | 285-287 |
| Hero Description | `<p>` below headline | 288-291 |
| Proof Points (metrics) | `proofPoints` array | 112-117 |
| Services | `services` array | 119-168 |
| Projects | `projects` array | 170-204 |
| Resources | `resources` array | 206-213 |
| Skills | `skills` object | 215-218 |
| Contact Info | Contact Section | 469-497 |

---

## Editing Each Section

### 1. Your Name & Branding

Find and replace "Your Name" (appears twice):

```javascript
// Line 229 - Navigation
<a href="#home" className="...">
  Your Name  // ← Change this
</a>

// Line 526 - Footer
© 2024 Your Name. All rights reserved.  // ← Change this
```

---

### 2. Hero Section Metrics

Edit the `proofPoints` array (~line 112):

```javascript
const proofPoints = [
  { value: '-18%', label: 'media waste' },      // ← Edit value & label
  { value: '+32%', label: 'conversion lift' },
  { value: '8', label: 'markets managed' },
  { value: '$12M', label: 'budget optimized' },
]
```

---

### 3. Services

Edit the `services` array (~line 119). Each service has:

```javascript
{
  title: 'Digital Transformation Strategy',  // Service name
  timeline: '4-6 weeks',                      // Duration
  description: 'End-to-end digital...',      // Description
  deliverables: [                             // Bullet points
    'Current state assessment & gap analysis',
    'Technology stack recommendations',
    'Implementation roadmap with milestones',
    'Change management framework'
  ],
  successMetric: { value: '+40%', label: 'efficiency gains' }
}
```

To add a new service, copy an existing block and modify it.

---

### 4. Projects / Case Studies

Edit the `projects` array (~line 170). Each project has:

```javascript
{
  title: 'APAC E-commerce Transformation',
  timeline: '2023',                           // Year or date range
  metrics: [
    { value: '+45%', label: 'revenue growth' },
    { value: '-22%', label: 'CAC reduction' },
    { value: '6', label: 'markets launched' }
  ],
  description: 'Led end-to-end digital...',
  tags: ['E-commerce', 'APAC', 'Digital Transformation', 'Shopify']
}
```

**Note:** For negative metrics (like cost reduction), add `positive: false`:
```javascript
{ value: '-22%', label: 'CAC reduction', positive: false }
```

---

### 5. Downloadable Resources

Edit the `resources` array (~line 206):

```javascript
{
  icon: Briefcase,        // Icon from lucide-react
  title: 'Executive Summary',
  description: '2-page overview of key achievements',
  filename: 'executive-summary.pdf'   // File to download
}
```

**Available icons:** `Briefcase`, `BarChart3`, `Target`, `Award`, `Users`, `Globe`

To add actual downloadable files, place PDFs in a `/public` folder.

---

### 6. Skills Matrix

Edit the `skills` object (~line 215):

```javascript
const skills = {
  expert: ['Digital Strategy', 'Data Analytics', 'MarTech', 'E-commerce', 'Stakeholder Management'],
  advanced: ['AI/ML Implementation', 'Agile/Scrum', 'Cloud Architecture', 'Team Leadership', 'Budget Management']
}
```

---

### 7. Contact Information

Update these in the Contact Section (~line 469):

```javascript
// Email
<a href="mailto:hello@example.com">  // ← Your email
  <div className="text-gray-400 text-sm">hello@example.com</div>

// LinkedIn
<a href="https://linkedin.com" target="_blank">  // ← Your LinkedIn URL

// Phone
<a href="tel:+6512345678">  // ← Your phone
  <div className="text-gray-400 text-sm">+65 1234 5678</div>
```

---

### 8. About Section Bio

Find the About Section (~line 375) and edit the paragraphs:

```javascript
<p className="text-gray-300 leading-relaxed mb-6">
  I'm a digital transformation leader with 15+ years...  // ← Edit this
</p>
<p className="text-gray-300 leading-relaxed mb-8">
  Currently, I'm building StudyHub...  // ← Edit this
</p>
```

Also update the stats (~line 389):
```javascript
<div className="text-2xl font-bold text-white">8+</div>
<div className="text-sm text-gray-400">APAC Markets</div>
```

---

## After Making Changes

1. Save the file
2. If dev server is running, changes appear automatically
3. If not, run: `npm run dev`
4. View at http://localhost:3000

---

## Tips

- Keep backup of original `page.js` before major edits
- Test on mobile (resize browser or use DevTools)
- Commit changes to git regularly: `git add . && git commit -m "Update content"`
