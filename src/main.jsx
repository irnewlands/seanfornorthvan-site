import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Calendar,
  Mail,
  MapPin,
  Users,
  ShieldCheck,
  Car,
  Heart,
  Megaphone,
  Menu,
  X,
  Handshake,
  Eye,
  DollarSign,
  Leaf,
  MessageSquare,
  ArrowRight,
  UserRound,
  Newspaper,
  ExternalLink
} from 'lucide-react';
import './styles.css';

const nav = ['Home', 'About', 'What Matters', 'Your Voice', 'Events', 'Volunteer', 'Donate', 'Contact'];

function anchor(name) {
  return '#' + name.toLowerCase().replaceAll(' ', '-');
}

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="header">
      <a className="brandLogo headerBrandGroup" href="#home">
  <img className="headerMark" src="/assets/sean-cnv-logo.svg" alt="Sean for North Vancouver City Council" />
  <img className="headerSignature" src="/assets/sean-header-signature.svg" alt="Sean Alexander" />
</a>

      <button className="menu" aria-label="Open menu" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'open' : ''}>
        {nav.map((n) => (
          <a key={n} onClick={() => setOpen(false)} href={anchor(n)}>
            {n}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroFlag"></div>

      <div className="heroText">
        <img className="heroLogo" src="/assets/sean-cnv-logo.svg" alt="Sean for North Vancouver City Council logo" />

        <p className="eyebrow">North Vancouver City Council • Election 2026</p>

        <h1>
          Your Voice.
          <br />
          Our City.
          <br />
          <span>No More Surprises.</span>
        </h1>

        <p className="lead">
          North Vancouver deserves a City Council that listens before decisions are made — not after.
          Sean Alexander is running to bring residents back into the process and make sure every voice is heard.
        </p>

        <div className="actions">
          <a className="btn primary" href="#your-voice">
            Share Your Voice <ArrowRight />
          </a>
          <a className="btn" href="#about">Meet Sean</a>
        </div>
      </div>
<div className="heroSocials">

  <a
    href="https://www.facebook.com/seanfornorthvan"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <Facebook />
  </a>

  <a
    href="https://www.instagram.com/seanfornorthvan/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <Instagram />
  </a>

  <a
    href="https://www.linkedin.com/in/sean-alexander-365bba413/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <Linkedin />
  </a>

  <a
    href="mailto:sda.cnv.2026@gmail.com"
    aria-label="Email"
  >
    <Mail />
  </a>

</div>
      <div className="heroPhoto">
        <img src="/assets/sean-portrait-full.jpg" alt="Sean Alexander, candidate for North Vancouver City Council" />
      </div>

      <div className="heroCredit">
        Photo by{' '}
        <a href="https://unsplash.com/@randylaybourne" target="_blank" rel="noopener noreferrer">
          Randy Laybourne
        </a>{' '}
        on{' '}
        <a
          href="https://unsplash.com/photos/a-body-of-water-surrounded-by-mountains-and-trees-8sOQrrrKWzI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="section intro split">
      <div>
        <p className="eyebrow">Why Sean is running</p>
        <h2>Residents should hear about major decisions before they feel like a done deal.</h2>
        <p>
          The number one concern Sean hears from residents is that City Hall can feel distant from everyday people.
          Too often, residents find out about decisions affecting traffic, housing, planning, infrastructure, and
          neighbourhood life only after the process feels complete.
        </p>
        <p>
          Sean’s campaign is built around a simple promise: listen first, communicate early, and bring community
          voices directly into City Hall.
        </p>
      </div>

      <div className="promiseCard">
        <h3>The Grassroots Promise</h3>
        <p>
          Sean’s platform is a living framework shaped by public engagement, door knocking, community meetings,
          and everyday conversations with residents.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section aboutGrid">
      <div className="aboutImage">
        <img src="/assets/about-sean-community.jpg" alt="Sean Alexander speaking with a North Vancouver resident" />
      </div>

      <div>
        <p className="eyebrow">About Sean</p>
        <h2>A neighbour first. A candidate second.</h2>
        <p>
          Sean’s path to public service began with a belief that leadership starts with listening and rolling up your
          sleeves. He has been involved in democratic and grassroots work since 2006, from door knocking and phone
          calling to campaign organizing and community mobilization.
        </p>
        <p>
          Sean moved to North Vancouver in 2011 and found a place that felt like home. Since then, he has built his life
          around community service, professional trust, and showing up for neighbours.
        </p>

        <div className="miniStats">
          <div>
            <strong>2006</strong>
            <span>Grassroots involvement began</span>
          </div>
          <div>
            <strong>2011</strong>
            <span>Made North Vancouver home</span>
          </div>
          <div>
            <strong>48 hrs</strong>
            <span>Commitment to respond to residents</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const issues = [
  ['Transparency & Accountability', Eye, 'Citizens should know what is happening before decisions are made — not after. Sean will prioritize clear communication, early engagement, and accountable decision-making.'],
  ['Traffic & Mobility', Car, 'Traffic and traffic calming belong in one practical conversation: congestion, safer streets, transit connections, active transportation, and neighbourhood mobility.'],
  ['Public Safety', ShieldCheck, 'Everyone deserves to feel safe in neighbourhoods, parks, public spaces, and business districts, with prevention-focused and community-minded solutions.'],
  ['Cost Fairness', DollarSign, 'Residents deserve transparency and confidence that public dollars are spent wisely, fairly, and with clear accountability for infrastructure costs.'],
  ['Community Livability', Leaf, 'Protect what makes North Vancouver one of Canada’s best places to live while ensuring seniors, families, renters, homeowners, and future generations can thrive.'],
  ['Community Engagement', Handshake, 'The best solutions come from bringing people together and listening to those most affected before policy choices are finalized.']
];

function WhatMatters() {
  return (
    <section id="what-matters" className="section light">
      <p className="eyebrow center">What Matters to North Vancouver</p>
      <h2 className="center">A living platform built through conversations with residents.</h2>
      <p className="center narrow">
        Sean is not running to impose a rigid platform from behind closed doors. He is running to create a safer forum
        for facts, discussion, and practical solutions.
      </p>

      <div className="grid issuesGrid">
        {issues.map(([title, Icon, description]) => (
          <div className="issue" key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Voice() {
  return (
    <section id="your-voice" className="section voice split">
      <div>
        <p className="eyebrow">Your Voice Portal</p>
        <h2>What would make North Vancouver better?</h2>
        <p>
          Share the concern, idea, or neighbourhood issue you want Sean to hear. This section can connect later to
          Google Forms, MailerLite, Airtable, or a custom campaign database.
        </p>

        <ul className="checks green">
          <li><MessageSquare /> Traffic, public safety, livability, housing, and other local concerns</li>
          <li><Users /> Built for listening sessions, canvassing follow-up, and community input</li>
          <li><Mail /> Helps turn resident feedback into campaign priorities</li>
        </ul>
      </div>

      <form className="form">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Postal code" />
        <select>
          <option>What issue matters most?</option>
          <option>Traffic & Mobility</option>
          <option>Public Safety</option>
          <option>Cost Fairness</option>
          <option>Community Livability</option>
          <option>Transparency & Accountability</option>
          <option>Other</option>
        </select>
        <textarea placeholder="Share your concern or idea" />
        <button className="btn primary" type="button">Submit Concern</button>
      </form>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="section event">
      <div>
        <p className="eyebrow">Campaign Events</p>
        <h2>Let’s talk about the future of North Vancouver.</h2>
        <p>
          Sean’s campaign will centre community conversations, listening sessions, and practical forums where residents
          can raise concerns before decisions are made.
        </p>

        <ul className="checks">
          <li><Calendar /> Featured community conversation</li>
          <li><MapPin /> North Vancouver neighbourhood locations</li>
          <li><Users /> Bring your questions, concerns, and ideas</li>
        </ul>

        <a className="btn white" href="#contact">Invite Sean to an event</a>
      </div>

      <img src="/assets/event-instagram.png" alt="Sean Alexander campaign event poster" />
    </section>
  );
}

function Volunteer() {
  return (
    <section id="volunteer" className="section dark">
      <p className="eyebrow center">Get Involved</p>
      <h2 className="center">This campaign belongs to all of us.</h2>

      <div className="grid two">
        <div className="darkCard">
          <Heart />
          <h3>Volunteer</h3>
          <p>
            Help with door knocking, phone calls, events, signs, social media, fundraising, photography, and community outreach.
          </p>
        </div>

        <div className="darkCard">
          <Megaphone />
          <h3>Spread the Word</h3>
          <p>
            Share campaign content, invite neighbours to events, host a coffee meeting, or help Sean reach more residents.
          </p>
        </div>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section id="donate" className="section donate donateFull">
      <div className="donateIntro">
        <p className="eyebrow">Donate</p>
        <h2>Help Build a More Connected North Vancouver</h2>
        <p>
          This campaign is powered by residents who believe City Hall should listen before decisions are made.
        </p>
        <p>
          Your contribution helps fund community conversations, campaign materials, volunteer outreach, and voter
          engagement across North Vancouver.
        </p>
      </div>

      <div className="donateBox donateBoxWide">
        <DollarSign />
        <h3>Support Sean’s Campaign</h3>
        <p>
          Every contribution helps Sean connect with more residents, host community conversations, print campaign
          materials, and build a stronger North Vancouver.
        </p>

        <div className="grassrootsPitch">
          <h3>Pitch In to Power Sean for North Van!</h3>

          <p>
            I'm running a <strong>100% grassroots campaign for City Council</strong>—powered by residents,
            neighbours, and community supporters, not large corporate interests.
          </p>

          <p>
            To win, I don't need a handful of giant donations. I need hundreds of North Vancouver residents
            to chip in what they can and help build a campaign that listens first and puts people back at the
            centre of City Hall.
          </p>

          <h4>Pick the option that works for you:</h4>

          <ul>
            <li>
              ☕ <strong>$10 – The "Two Cups of Coffee" Donation</strong><br />
              Less than your morning brew, but enough to help print flyers and knock on 20 more doors.
            </li>

            <li>
              🚀 <strong>$30 – The "Three-Pack" Power Boost</strong> <em>(Most Popular)</em><br />
              Helps fund digital outreach to put Sean's message in front of 100 more North Vancouver residents.
            </li>

            <li>
              💥 <strong>Choose Your Own Amount</strong><br />
              Whether it's $50, $100, $250, or any amount you're comfortable with, every contribution helps
              power a stronger grassroots campaign.
            </li>
          </ul>

          <p>
            <strong>
              Every dollar stays local. Every dollar helps us reach more residents. Every dollar helps build a
              more connected North Vancouver.
            </strong>
          </p>
        </div>

        <a
          className="btn primary"
          href="https://donorbox.org/seanfornorthvan?amount=30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Now
        </a>

        <small>Contributions are subject to Elections BC campaign finance rules.</small>
      </div>
    </section>
  );
}

function Media() {
  return (
    <section className="section media">
      <p className="eyebrow center">Media & Campaign Materials</p>
      <h2 className="center">A professional campaign hub for residents, volunteers, and media.</h2>

      <div className="grid three">
        <div className="issue">
          <Newspaper />
          <h3>Press & Updates</h3>
          <p>Campaign statements and media releases will be published here.</p>
        </div>

       <div className="issue">
  <UserRound />

  <h3>Photos & Bio</h3>

  <p>
    Approved candidate photos, biography, media kit, and campaign
    background for journalists, residents, and volunteers.
  </p>

  <div className="downloadButtons">

    <a
      className="btn primary"
      href="/assets/sean-alexander-media-handout.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Media Handout
    </a>

    <a
      className="btn"
      href="/assets/sean-alexander-campaign-bio.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Campaign Biography
    </a>

    <a
      className="btn"
      href="/assets/sean-official-portrait-waterfront.jpeg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Official Portrait
    </a>

    <a
      className="btn"
      href="/assets/sean-professional-portrait-clipboard.jpeg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Professional Portrait
    </a>

    <a
      className="btn"
      href="/assets/sean-city-hall.jpeg"
      target="_blank"
      rel="noopener noreferrer"
    >
      City Hall Photo
    </a>

    <a
      className="btn"
      href="/assets/sean-community-waterfront.jpeg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Community Waterfront Photo
    </a>

    <a
      className="btn"
      href="/assets/sean-labour-support.jpeg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Community Support Photo
    </a>

  </div>
</div>

<div className="issue downloadCard">
  <ExternalLink />

  <h3>Campaign Materials</h3>

  <p>
    Download Sean's campaign rack card, share it with neighbours,
    or scan the QR code to visit the campaign website.
  </p>

  <img
    src="/assets/sean-website-qr.png"
    alt="Sean Alexander Campaign QR Code"
    className="downloadQR"
  />

  <div className="downloadButtons">
    <a
      className="btn primary"
      href="/assets/sean-rack-card.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Rack Card
    </a>

    <a
      className="btn"
      href="/assets/sean-website-qr.png"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download QR Code
    </a>
   </div>
</div>

</div>

</section>
  );
}

function Contact() {
  return (
    <footer id="contact">
      <img className="footerSignature"
  src="/assets/SEAN-ALEXANDER.svg"
  alt="Sean Alexander for North Vancouver City Council"
        />
      <p className="footerTagline">
  Working Together For A Stronger North Vancouver
</p>
      <p>Candidate for North Vancouver City Council</p>
      <p>
        <Mail size={16} /> sda.cnv.2026@gmail.com &nbsp; | &nbsp; seanfornorthvan.ca
      </p>
      <div className="footerSocials">

  <a
    href="https://www.facebook.com/seanfornorthvan"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook />
  </a>

  <a
    href="https://www.instagram.com/seanfornorthvan/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram />
  </a>

  <a
    href="https://www.linkedin.com/in/sean-alexander-365bba413/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin />
  </a>

  <a href="mailto:sda.cnv.2026@gmail.com">
    <Mail />
  </a>

</div>
      <p className="auth"> Authorized by the Financial Agent for Sean Alexander </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <About />
      <WhatMatters />
      <Voice />
      <Events />
      <Volunteer />
      <Donate />
      <Media />
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
