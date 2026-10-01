import { useState } from 'react'

type Category = 'All' | 'Bread' | 'Pastry' | 'Drinks'

type MenuItem = {
  name: string
  description: string
  price: string
  category: Exclude<Category, 'All'>
  accent: string
  icon: 'loaf' | 'croissant' | 'bun' | 'mug' | 'cake' | 'cookie'
}

const menuItems: MenuItem[] = [
  { name: 'Country sourdough', description: 'A crackly crust, open crumb, and a little rye tang.', price: '$8', category: 'Bread', accent: 'wheat', icon: 'loaf' },
  { name: 'Morning bun', description: 'Laminated pastry, orange zest, and cinnamon sugar.', price: '$5', category: 'Pastry', accent: 'peach', icon: 'bun' },
  { name: 'Sesame rye', description: 'Our deeply nutty loaf, finished with toasted sesame.', price: '$9', category: 'Bread', accent: 'sage', icon: 'loaf' },
  { name: 'Cardamom knot', description: 'Buttery brioche, green cardamom, and pearl sugar.', price: '$5', category: 'Pastry', accent: 'rose', icon: 'croissant' },
  { name: 'Baker’s coffee', description: 'A bright, chocolatey house blend from Counter Culture.', price: '$4', category: 'Drinks', accent: 'sky', icon: 'mug' },
  { name: 'Salted chocolate cookie', description: 'Chewy center, crisp edge, and a flaky salt finish.', price: '$4', category: 'Pastry', accent: 'cocoa', icon: 'cookie' },
]

const categories: Category[] = ['All', 'Bread', 'Pastry', 'Drinks']

function MarkIcon({ kind }: { kind: MenuItem['icon'] }) {
  if (kind === 'mug') {
    return <svg aria-hidden="true" viewBox="0 0 48 48" className="menu-icon"><path d="M11 17h22v12a8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8V17Z" /><path d="M33 21h3a6 6 0 0 1 0 12h-4M15 12h14M19 8v4M25 8v4" /></svg>
  }
  if (kind === 'croissant' || kind === 'bun') {
    return <svg aria-hidden="true" viewBox="0 0 48 48" className="menu-icon"><path d="M7 31c3-11 11-17 22-17 7 0 11 3 12 8-3 9-11 14-21 14-5 0-9-2-13-5Z" /><path d="M16 22c1 6 5 10 11 12M24 16c0 7 4 12 10 15M32 16c-1 5 1 9 5 12" /></svg>
  }
  if (kind === 'cookie') {
    return <svg aria-hidden="true" viewBox="0 0 48 48" className="menu-icon"><path d="M34 12a7 7 0 0 0 7 7 15 15 0 1 1-14-14 7 7 0 0 0 7 7Z" /><circle cx="18" cy="28" r="2" fill="currentColor" stroke="none" /><circle cx="27" cy="34" r="2" fill="currentColor" stroke="none" /><circle cx="29" cy="23" r="2" fill="currentColor" stroke="none" /><circle cx="20" cy="19" r="2" fill="currentColor" stroke="none" /></svg>
  }
  return <svg aria-hidden="true" viewBox="0 0 48 48" className="menu-icon"><path d="M7 29c1-11 8-17 18-17s16 5 17 14c-3 6-9 9-17 9-8 0-14-2-18-6Z" /><path d="M12 29c6-2 12-2 18 0M18 16c-1 6 0 11 4 16M27 13c-1 7 1 12 5 17" /></svg>
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon"><path d="M3 10h13M11 5l5 5-5 5" /></svg>
}

function App() {
  const [category, setCategory] = useState<Category>('All')
  const visibleItems = category === 'All' ? menuItems : menuItems.filter((item) => item.category === category)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rye & Rise home">
          <span className="wordmark-mark" aria-hidden="true">R</span>
          <span>Rye <i>&amp;</i> Rise</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
          <a className="nav-call" href="tel:+14155550148">Call us <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> Baked daily in the neighborhood</p>
            <h1 id="hero-title">Good bread,<br /><em>good mornings.</em></h1>
            <p className="hero-intro">Slow-fermented loaves, flaky pastries, and coffee worth lingering over. Find us on Linden Street, every day but Monday.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#menu">See today’s menu <ArrowIcon /></a>
              <a className="text-link" href="#visit">Plan your visit <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of a loaf of bread on a bakery counter" role="img">
            <div className="sun-disc" aria-hidden="true" />
            <div className="grain grain-one" aria-hidden="true" />
            <div className="grain grain-two" aria-hidden="true" />
            <div className="loaf-shadow" aria-hidden="true" />
            <div className="hero-loaf" aria-hidden="true"><span /><span /><span /></div>
            <div className="art-caption"><span>Since 2019</span><span className="caption-rule" /><span>Made by hand</span></div>
          </div>
        </section>

        <section className="marquee" aria-label="Bakery values">
          <div className="marquee-track"><span>Long fermentation</span><b>✳</b><span>Local grain</span><b>✳</b><span>Warm welcome</span><b>✳</b><span>Long fermentation</span><b>✳</b><span>Local grain</span><b>✳</b><span>Warm welcome</span></div>
        </section>

        <section className="menu-section" id="menu" aria-labelledby="menu-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From the counter</p>
              <h2 id="menu-title">Today’s menu</h2>
            </div>
            <p className="section-note">Everything is baked in small batches. When it’s gone, it’s gone.</p>
          </div>
          <div className="filter-row" role="group" aria-label="Filter menu by category">
            {categories.map((item) => <button key={item} className={`filter-button ${category === item ? 'is-active' : ''}`} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <p className="sr-only" role="status" aria-live="polite">Showing {visibleItems.length} {category === 'All' ? 'menu items' : `${category.toLowerCase()} items`}</p>
          <div className="menu-grid">
            {visibleItems.map((item) => <article className="menu-card" key={item.name}>
              <div className={`menu-art ${item.accent}`}><MarkIcon kind={item.icon} /></div>
              <div className="menu-card-body"><div className="menu-card-top"><h3>{item.name}</h3><span className="price">{item.price}</span></div><p>{item.description}</p></div>
            </article>)}
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="visit-panel">
            <div className="visit-copy">
              <p className="eyebrow">Come by</p>
              <h2 id="visit-title">A little room<br /><em>for everyone.</em></h2>
              <p>Pull up a chair, take a loaf home, or meet us at the window for your morning coffee.</p>
              <a className="button button-light" href="https://maps.google.com/?q=184+Linden+Street,+San+Francisco,+CA+94110" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a>
            </div>
            <div className="visit-details">
              <div className="detail-block"><span className="detail-label">Find us</span><address>184 Linden Street<br />San Francisco, CA 94110</address></div>
              <div className="detail-block"><span className="detail-label">Hours</span><p>Tue–Fri <strong>7am–3pm</strong><br />Sat–Sun <strong>8am–3pm</strong><br /><span className="muted">Closed Mondays</span></p></div>
              <div className="detail-block"><span className="detail-label">Questions?</span><a className="phone-link" href="tel:+14155550148">(415) 555-0148</a><p className="muted">Call or text, we’re here.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#top"><span className="wordmark-mark" aria-hidden="true">R</span><span>Rye <i>&amp;</i> Rise</span></a>
        <p>Made with patience on Linden Street.</p>
        <a href="#top" className="back-top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  )
}

export default App
