# Garibook — Frontend Technical Assessment

A responsive frontend recreation of the **Garibook** homepage, built as part of a Frontend Developer technical assessment.

The project focuses on creating a clean, modern, responsive travel and car-rental experience inspired by the original Garibook website, with reusable React components, responsive layouts, and GSAP-powered animations.

## 🔗 Project Links

* **Live Website:** https://garibook.netlify.app
* **GitHub Repository:** https://github.com/Afsana-Jannat/garibook
* **Original Website:** https://garibook.com/

---

## ✨ Features

* Responsive homepage design
* Desktop, tablet and mobile support
* Component-based React architecture
* Modern travel/car-rental UI
* Hero section with animated content
* Service and feature sections
* Image-based travel cards
* Featured news section
* Passenger/testimonial section
* Smart Driver section
* Scroll-based animations using GSAP
* Smooth reveal animations
* Reusable and maintainable components
* Responsive typography and spacing
* Hover interactions on visual elements

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **CSS3**
* **GSAP**
* **GSAP ScrollTrigger**
* **Vite**
* **Git & GitHub**

---

## 🎨 Design & Development

The homepage was recreated with a strong focus on:

* Visual similarity
* Clean spacing and typography
* Responsive behavior
* Reusable components
* Smooth animations
* Maintainable CSS
* User-friendly interactions

The original Garibook website provides services such as intercity rental, airport pickup and drop-off, hourly rental and other travel-related services.

---

## 🎬 GSAP Animations

GSAP and ScrollTrigger are used to create meaningful scroll-based animations throughout the page.

### Animated Sections

* Hero section
* Freedom in Every Journey
* More Than Miles — We Bring People Together
* From Booking to Arrival
* Be a Smart Driver
* We Featured by Top News Platforms
* Our Passengers Speak For Us

### Animation Behavior

The sections use:

* Bottom-to-top reveal
* Staggered animations
* Heading-first animation
* ScrollTrigger
* Re-entry animations
* Smooth easing
* Independent component animations

The animations are designed to enhance the page without affecting usability or performance.

---

## 📁 Project Structure

```text
src/
│
├── assets/
│   ├── images
│   ├── icons
│   └── other media
│
├── components/
│   ├── Hero.jsx
│   ├── FreedomSection.jsx
│   ├── TogetherSection.jsx
│   ├── BookingArrival.jsx
│   ├── SmartDriver.jsx
│   ├── FeaturedNews.jsx
│   └── PassengersSection.jsx
│
├── App.jsx
├── main.jsx
│
└── index.css
```

The project is organized into separate components so that each homepage section can be developed and maintained independently.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd your-project-folder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run locally using the Vite development server.

---

## 📦 Main Dependencies

```bash
npm install react react-dom gsap
```

If the project was created with Vite, the existing Vite configuration can be used.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes:

### Desktop

* Large typography
* Multi-column layouts
* Large visual cards
* Full-width sections

### Tablet

* Adjusted spacing
* Responsive grids
* Reduced typography
* Flexible card layouts

### Mobile

* Single-column layouts
* Smaller typography
* Touch-friendly elements
* Responsive images
* Optimized spacing

---

## 🧩 Component Architecture

Each major section of the homepage is implemented as an independent React component.

For example:

```jsx
<Hero />

<FreedomSection />

<TogetherSection />

<BookingArrival />

<SmartDriver />

<FeaturedNews />

<PassengersSection />
```

This approach keeps the code organized and makes individual sections easier to modify or reuse.

---

## ⚡ Performance Considerations

The implementation focuses on keeping the frontend lightweight by:

* Reusing components
* Optimizing image rendering
* Avoiding unnecessary dependencies
* Keeping animations scoped to their sections
* Using GSAP ScrollTrigger instead of continuous scroll calculations
* Using responsive CSS instead of excessive JavaScript-based layout logic

---

## 🎯 Technical Decisions

### Why React?

React was used to create a component-based structure where each section can be developed independently.

### Why GSAP?

GSAP provides precise control over animation timing, easing, sequencing and scroll-triggered interactions.

### Why ScrollTrigger?

ScrollTrigger allows animations to start when sections enter the viewport and provides smooth control over scroll-based animation behavior.

### Why Vite?

Vite provides a fast development environment and quick build times for modern React applications.

---

## 🧠 Challenges & Solutions

### 1. Recreating the visual layout

One of the main challenges was matching the spacing, typography, card dimensions and responsive behavior of the reference website.

**Solution:**
Each section was developed independently with responsive CSS and carefully adjusted spacing across different breakpoints.

### 2. Creating smooth scroll animations

The page contains multiple animated sections, so animations needed to feel consistent without becoming distracting.

**Solution:**
GSAP ScrollTrigger was used with reusable animation patterns and staggered transitions.

### 3. Maintaining responsive layouts

Some sections use different layouts on desktop and mobile.

**Solution:**
CSS Grid, Flexbox and media queries were used to adapt the layout according to screen size.

---

## 🔐 Environment Variables

This project does not require any sensitive API keys or private credentials for the frontend assessment.

If environment variables are added in the future, they should be stored in a `.env` file and should **not** be committed to GitHub.

Example:

```env
VITE_API_URL=your_api_url
```

Make sure `.env` is included in `.gitignore`.

---

## 🚫 Files Not Included in Git

The following files and folders should not be committed:

```text
node_modules/
dist/
.env
.env.local
```

---

## 📸 Screenshots

Add screenshots of the completed homepage here.

Example:

```text
screenshots/
├── desktop.png
├── tablet.png
└── mobile.png
```

You can then add them to this README:

```md
![Desktop Preview](./screenshots/desktop.png)
```

---

## 🎥 Assessment Walkthrough

A short screen recording can be used to demonstrate:

1. Homepage overview
2. Responsive design
3. Component structure
4. GSAP animations
5. One technical challenge and its solution

---

## 👩‍💻 Developer

**Afsana Jannat**

Frontend / Full Stack Developer

* GitHub: Add your GitHub profile
* LinkedIn: Add your LinkedIn profile
* Portfolio: Add your portfolio URL

---

## 📄 Disclaimer

This project was created for **educational and technical assessment purposes**.

The design and brand identity belong to their respective owner, Garibook. This project is not an official Garibook product.

---

## ⭐ Acknowledgement

Special thanks to the Garibook team for providing the frontend technical assessment and reference website.
