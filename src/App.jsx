import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Menu, MoveUpRight, X } from 'lucide-react'
import './App.css'

const images = {
  hero: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=2200&q=85',
  story: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=85',
  wedding: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85',
  private: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85',
  corporate: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85',
}

const eventTypes = [
  ['01', 'Weddings', 'A bar experience as considered as every other detail.', images.wedding],
  ['02', 'Private parties', 'Cocktails, conversation, and a room worth staying in.', images.private],
  ['03', 'Corporate events', 'Polished hospitality for launches, dinners, and milestones.', images.corporate],
  ['04', 'Milestones', 'Birthdays, graduations, and the nights you will talk about later.', images.hero],
]

const services = [
  ['01', 'Bartending service', 'A composed, capable presence behind the bar from the first pour to the final toast.'],
  ['02', 'The mobile bar', 'We bring the bar, the tools, the glassware, and the details that make it feel like it has always been there.'],
  ['03', 'Cocktail direction', 'A concise, custom menu shaped around your taste, your guests, and the rhythm of your event.'],
  ['04', 'Beer & wine service', 'Thoughtful pours and seamless service for guests who prefer something classic.'],
  ['05', 'Setup & cleanup', 'Everything arrives quietly and leaves even more quietly, so you can stay in the moment.'],
  ['06', 'The finishing touch', 'Ice, garnish, glassware, and all the small things guests remember without knowing why.'],
]

const faqs = [
  ['What types of events do you serve?', 'Weddings, private parties, corporate gatherings, birthdays, graduations, and intimate celebrations of all kinds.'],
  ['Do you travel to the event location?', 'Always. NOIR & NEAT is a mobile service, so we bring the experience to your venue, home, or chosen setting.'],
  ['Do I provide the alcohol?', 'Yes. We help you plan the right quantities and selections, then take care of the service.'],
  ['How far do you travel?', 'We serve the greater metro area and surrounding destinations. Share your location in the inquiry and we will confirm availability.'],
  ['What does bartending service include?', 'Planning guidance, professional bartending, bar setup, cocktail preparation, service, and a complete breakdown.'],
  ['Can you create custom cocktails?', 'That is our favorite part. We can build a small menu around your story, your menu, or a particular mood.'],
]

const initialForm = { eventType: '', date: '', start: '', end: '', guests: '', address: '', city: '', state: '', zip: '', name: '', email: '', phone: '', details: '' }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(0)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const validStep = step === 1 ? form.eventType && form.date && form.start && form.end && form.guests : form.address && form.city && form.state && form.zip && form.name && form.email && form.phone
  const submit = (event) => {
    event.preventDefault()
    if (step < 3 && validStep) setStep(step + 1)
    else if (step === 3) setSubmitted(true)
  }

  const Field = ({ label, name, type = 'text', placeholder, required = true }) => (
    <label className="field">
      <span>{label}{required && <b>*</b>}</span>
      <input name={name} type={type} value={form[name]} onChange={update} placeholder={placeholder} required={required} />
    </label>
  )

  return (
    <div className="app-shell">
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <button className="wordmark" onClick={() => goTo('home')} aria-label="NOIR & NEAT home"><span>NOIR</span><i>&</i><span>NEAT</span></button>
        <nav className="desktop-nav"><button onClick={() => goTo('home')}>Home</button><button onClick={() => goTo('services')}>Services</button><button onClick={() => goTo('about')}>About</button><button onClick={() => goTo('faq')}>FAQ</button><button onClick={() => goTo('contact')}>Contact</button></nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}><button onClick={() => goTo('home')}>Home</button><button onClick={() => goTo('services')}>Services</button><button onClick={() => goTo('about')}>About</button><button onClick={() => goTo('faq')}>FAQ</button><button onClick={() => goTo('contact')}>Contact</button></nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <img className="hero-image" src={images.hero} alt="Cocktail being served at an intimate event" />
          <div className="hero-overlay" />
          <div className="hero-content reveal"><p className="eyebrow">Mobile bartending · Est. 2018</p><h1>Elevate<br /><em>your event.</em></h1><p className="hero-copy">Professional bartending, thoughtfully brought to your door. For the moments worth gathering over.</p><button className="gold-button" onClick={() => goTo('booking')}>Book your event <ArrowUpRight size={17} /></button></div>
        </section>

        <section className="intro section-pad"><div className="intro-mark">NN<span>+</span></div><div><p className="eyebrow">The art of a good gathering</p><h2>A little<br /><em>more memorable.</em></h2></div><div className="intro-copy"><p>We believe the best nights are made of small, considered details. NOIR & NEAT brings an exceptional bar experience directly to your event, so you can focus on being there.</p><button className="text-link" onClick={() => goTo('about')}>Our approach <ArrowDownRight size={16} /></button></div></section>

        <section className="events section-pad" id="services"><div className="section-top"><div><p className="eyebrow">Made for the occasion</p><h2>Whatever you’re<br /><em>celebrating.</em></h2></div><span className="section-number">01 / 04</span></div><div className="event-grid">{eventTypes.map(([number, title, description, image]) => <article className="event-card" key={title}><div className="event-img"><img src={image} alt={`${title} event`} /></div><div className="event-details"><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><MoveUpRight size={17} /></div></article>)}</div></section>

        <section className="statement"><div className="statement-inner"><span className="eyebrow">The NOIR & NEAT standard</span><h2>Hospitality that<br /><em>feels effortless.</em></h2><div className="line" /><p>From the first hello to the last pour, every detail is handled with warmth, grace, and a little bit of magic.</p></div></section>

        <section className="services section-pad"><div className="section-top"><div><p className="eyebrow">What we bring</p><h2>A bar,<br /><em>reimagined.</em></h2></div><p className="section-intro">Your event is one of a kind. Our service is designed to meet it there.</p></div><div className="service-list">{services.map(([number, title, description]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight size={17} /></article>)}</div></section>

        <section className="about section-pad" id="about"><div className="about-image"><img src={images.story} alt="Bartender preparing a cocktail" /><span>Behind the bar<br />with intention.</span></div><div className="about-copy"><p className="eyebrow">A note from behind the bar</p><h2>Good drinks.<br /><em>Great company.</em></h2><p>NOIR & NEAT began with a simple idea: your celebration deserves more than a bartender who happens to be available. It deserves someone who notices the room, reads the moment, and cares about every guest.</p><p>We bring a love of craft and an instinct for hospitality to weddings, dinners, and all the beautiful in-betweens.</p><button className="text-link" onClick={() => goTo('contact')}>Start a conversation <ArrowDownRight size={16} /></button></div></section>

        <section className="booking section-pad" id="booking"><div className="section-top"><div><p className="eyebrow">Let’s make a night of it</p><h2>Tell us<br /><em>everything.</em></h2></div><p className="section-intro">A few details is all we need to start imagining your event.</p></div>{submitted ? <div className="confirmation"><div className="check-circle"><Check /></div><p className="eyebrow">Request received</p><h3>Cheers! Your request<br /><em>has been received.</em></h3><p>We’ll be in touch soon, {form.name.split(' ')[0] || 'there'}. This demo does not process a real booking, but your details have been captured for this session.</p><div className="summary"><span>{form.eventType || 'Your event'}</span><span>{form.date || 'Date to be confirmed'}</span><span>{form.guests || 'Guest count'} guests</span></div><button className="text-link" onClick={() => { setSubmitted(false); setStep(1); setForm(initialForm) }}>Send another request <ArrowDownRight size={16} /></button></div> : <form className="booking-form" onSubmit={submit}><div className="steps"><span className={step >= 1 ? 'active' : ''}>01 <i /> Event</span><span className={step >= 2 ? 'active' : ''}>02 <i /> Location</span><span className={step >= 3 ? 'active' : ''}>03 <i /> Contact</span></div>{step === 1 && <div className="form-panel"><h3>First, the essentials.</h3><p>Tell us about the occasion.</p><div className="form-grid"><label className="field"><span>Event type<b>*</b></span><select name="eventType" value={form.eventType} onChange={update} required><option value="">Select an occasion</option><option>Wedding</option><option>Private party</option><option>Corporate event</option><option>Birthday</option><option>Graduation</option><option>Special celebration</option></select></label><Field label="Event date" name="date" type="date" /><Field label="Start time" name="start" type="time" /><Field label="End time" name="end" type="time" /><Field label="Number of guests" name="guests" type="number" placeholder="e.g. 75" /></div></div>}{step === 2 && <div className="form-panel"><h3>Where is it happening?</h3><p>We’ll come to you.</p><div className="form-grid"><Field label="Street address" name="address" placeholder="123 Main Street" /><Field label="City" name="city" placeholder="City" /><Field label="State" name="state" placeholder="State" /><Field label="ZIP code" name="zip" placeholder="00000" /></div></div>}{step === 3 && <div className="form-panel"><h3>And how can we reach you?</h3><p>We’ll follow up personally.</p><div className="form-grid"><Field label="Full name" name="name" placeholder="Your name" /><Field label="Email address" name="email" type="email" placeholder="you@email.com" /><Field label="Phone number" name="phone" type="tel" placeholder="(000) 000-0000" /><label className="field full"><span>Anything else we should know?</span><textarea name="details" value={form.details} onChange={update} placeholder="Tell us about the vibe, the menu, or any special requests..." /></label></div></div>}<div className="form-actions">{step > 1 && <button type="button" className="back-button" onClick={() => setStep(step - 1)}>Back</button>}<button type="submit" className="gold-button">{step === 3 ? 'Request booking' : 'Continue'} <ArrowUpRight size={17} /></button></div></form>}</section>

        <section className="faq section-pad" id="faq"><div className="section-top"><div><p className="eyebrow">Questions, answered</p><h2>Before the<br /><em>first pour.</em></h2></div><p className="section-intro">Still curious? We’re happy to talk through the details.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${faqOpen === index ? 'open' : ''}`} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong>{faqOpen === index ? <ChevronDown className="rotate" /> : <ChevronDown />}</button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section>

        <section className="contact" id="contact"><div className="contact-inner"><p className="eyebrow">Let’s raise a glass</p><h2>Your next<br /><em>great night.</em></h2><div className="contact-details"><span>hello@noirandneat.demo</span><span>Serving your city & beyond</span><span>@noirandneat</span></div></div></section>
      </main>
      <footer><button className="wordmark" onClick={() => goTo('home')}><span>NOIR</span><i>&</i><span>NEAT</span></button><span>© 2026 NOIR & NEAT</span><span>Mobile bartending, thoughtfully made.</span></footer>
    </div>
  )
}

export default App
