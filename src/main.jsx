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

const nav = ['Home', 'About', 'What Matters', 'Your Voice', 'Events', 'Voting Info', 'Volunteer', 'Donate', 'Contact'];
const featuredVideoUrl =
      "https://www.facebook.com/reel/1364207198371468/";
function anchor(name) {
  return '#' + name.toLowerCase().replaceAll(' ', '-');
}

function VotingBanner() {
  return (
    <a className="votingBanner" href="#voting-info">
      <span>
        CITY OF NORTH VANCOUVER VOTING INFO • ADVANCE VOTING OCT. 7, 10, 13, 14 & 15 • GENERAL VOTING DAY OCT. 17, 8 AM–8 PM • CLICK FOR TIMES & LOCATIONS
      </span>
    </a>
  );
}

const campaignEvents = [
  {
    date: 'Sunday, October 4, 2026',
    title: 'Day of Action',
    location: '15th & Lonsdale (East Side)',
    address: 'Near McNews, 1460 Lonsdale Ave, North Vancouver, BC V7M 2J1',
    plusCode: '8WCH+Q4R North Vancouver, British Columbia',
    time: '1:00 PM – 3:00 PM',
    mapUrl: 'https://maps.app.goo.gl/vCUjUWYnUzLRWxNdA?g_st=ac'
  },
  {
    date: 'Saturday, October 10, 2026',
    title: 'Day of Action',
    location: 'Waterfront Park',
    address: 'Block, 200 Esplanade W, North Vancouver, BC V7L 2P7',
    plusCode: '8W67+PJ North Vancouver, British Columbia',
    time: '1:00 PM – 3:00 PM',
    mapUrl: 'https://maps.app.goo.gl/6ffgYbfy8XPYxmsc6?g_st=ac'
  },
  {
    date: 'Sunday, October 11, 2026',
    title: 'Day of Action',
    location: '15th & Lonsdale (East Side)',
    address: 'Near McNews, 1460 Lonsdale Ave, North Vancouver, BC V7M 2J1',
    plusCode: '8WCH+Q4R North Vancouver, British Columbia',
    time: '1:00 PM – 3:00 PM',
    mapUrl: 'https://maps.app.goo.gl/vCUjUWYnUzLRWxNdA?g_st=ac'
  }
];

function Header() {
  return (
    <header className="header">
      <a className="brandLogo headerBrandGroup" href="#home">
        <img
          className="headerMark"
          src="/assets/sean-cnv-logo.svg"
          alt="Sean for North Vancouver City Council"
        />

        <img
          className="headerSignature"
          src="/assets/sean-header-signature.svg"
          alt="Sean Alexander"
        />
      </a>

      <nav className="headerNav">
        {nav.map((n) => (
          <a key={n} href={anchor(n)}>
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
<div className="heroSocials">
  <a href="https://www.facebook.com/seanfornorthvan" target="_blank" rel="noopener noreferrer">f</a>
 <a
  href="https://www.instagram.com/seanfornorthvan/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </svg>
</a>
  <a href="https://www.linkedin.com/in/sean-alexander-365bba413/" target="_blank" rel="noopener noreferrer">in</a>
  <a href="mailto:sda.cnv.2026@gmail.com"><Mail /></a>
</div>
    </section>
  );
}

function FeaturedVideo() {
  const featuredVideoUrl =
    "https://www.facebook.com/reel/1364207198371468/";

  return (
    <section className="section featuredVideo">
      <div className="featuredVideoIntro">
        <p className="eyebrow center">
          Featured Campaign Video
        </p>

        <h2 className="center">
          Hear Directly From Sean
        </h2>

        <p className="center narrow">
          Watch Sean discuss his campaign and his vision for a stronger,
          more connected North Vancouver.
        </p>
      </div>

      <div className="featuredVideoFrame">
  <video controls playsInline preload="metadata">
    <source
      src="/assets/featured-video.mp4"
      type="video/mp4"
    />
    Your browser does not support this video.
  </video>
</div>

      <div className="featuredVideoActions">
        <a
          className="btn primary"
          href={featuredVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on Facebook
          <ExternalLink />
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
          Share the concern, idea, or neighbourhood issue you want Sean to hear, make it part of his Platform!
        </p>

        <ul className="checks green">
          <li><MessageSquare /> Traffic, public safety, livability, housing, and other local concerns</li>
          <li><Users /> Built for listening sessions, canvassing follow-up, and community input</li>
          <li><Mail /> Helps turn resident feedback into Sean's campaign priorities</li>
        </ul>
      </div>

    <form
  className="form"
  action="https://seanfornorthvan.us8.list-manage.com/subscribe/post?u=587e49d15286ad474e259a7f5&id=bda6bce462&f_id=008569e1f0"
  method="post"
  target="_blank"
>
<input
  type="text"
  name="FULLNAME"
  placeholder="Full Name"
  required
/>

<input
  type="email"
  name="EMAIL"
  placeholder="Email Address"
  required
/>

<input
  type="text"
  name="POSTCODE"
  placeholder="Postal Code"
  required
/>

<select
  name="MMERGE6"
  required
>
  <option value="">Select an Issue</option>
  <option value="Traffic & Mobility">Traffic & Mobility</option>
  <option value="Public Safety">Public Safety</option>
  <option value="Cost Fairness">Cost Fairness</option>
  <option value="Community Livability">Community Livability</option>
  <option value="Transparency & Accountability">
    Transparency & Accountability
  </option>
  <option value="Other">Other</option>
</select>

<textarea
  name="ISSUETEXT"
  placeholder="Share your concern or idea"
  required
/>

  <p className="formDisclaimer">
    You can unsubscribe at any time by emailing sda.cnv.2026@gmail.com.
  </p>

 <button type="submit" className="btn primary">
  Share Your Voice
</button>
</form>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="section eventsSection">
      <div className="eventsIntro">
        <p className="eyebrow center">Campaign Events</p>
        <h2 className="center">Join Sean Across North Vancouver.</h2>
        <p className="center narrow">
          Meet Sean, volunteer with the campaign, ask questions, share your vision,
          and help build a stronger North Vancouver.
        </p>
      </div>

      <div className="eventsGrid">
        {campaignEvents.map((event) => (
          <article className="eventListCard" key={`${event.date}-${event.location}`}>
            <p className="eventType">{event.title}</p>
            <h3>{event.date}</h3>
            <p className="eventTime"><Calendar size={18} /> {event.time}</p>
            <p className="eventLocation">
              <MapPin size={18} />
              <span>
                <strong>{event.location}</strong><br />
                {event.address}<br />
                <small>{event.plusCode}</small>
              </span>
            </p>
            <a className="btn primary" href={event.mapUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </article>
        ))}
      </div>

      <div className="eventsInvite">
        <a
          className="btn white"
          href="mailto:sda.cnv.2026@gmail.com?subject=Invite%20Sean%20to%20an%20Event&body=Event%20Name:%0D%0AEvent%20Date:%0D%0ALocation:%0D%0AExpected%20Attendance:%0D%0AAdditional%20Details:"
        >
          Invite Sean to an event
        </a>
      </div>
    </section>
  );
}

const generalVotingLocations = [
  {
    name: 'Larson Elementary School',
    room: 'Gym',
    address: '2605 Larson Rd',
    curbside: true,
    mapUrl: 'https://www.google.com/maps/place/Larson+Elementary+School/@49.3333788,-123.0874032,17z/data=!3m1!4b1!4m5!3m4!1s0x548670243bc1bcb3:0x61ad417397c50bba!8m2!3d49.3333796!4d-123.0848766'
  },
  {
    name: 'Carson Graham Secondary School',
    room: 'Small Gym',
    address: '2145 Jones Ave',
    curbside: true,
    mapUrl: 'https://www.google.com/maps/place/Carson+Graham+Secondary+School/@49.3290149,-123.083973,17z/data=!3m1!4b1!4m5!3m4!1s0x5486703ab64882a1:0xfe90a54740b2e4f2!8m2!3d49.3290127!4d-123.0817945'
  },
  {
    name: 'Westview Elementary School',
    room: 'Gym',
    address: '641 West 17th St',
    curbside: true,
    mapUrl: 'https://www.google.com/maps/place/Westview+Elementary+School/@49.3238414,-123.0916625,17z/data=!3m1!4b1!4m5!3m4!1s0x54867033ce40b619:0xc7289bc94aa40f9b!8m2!3d49.3239649!4d-123.0895584'
  },
  {
    name: 'Queen Mary Elementary School',
    room: 'Gym',
    address: '230 W Keith Rd',
    curbside: true,
    mapUrl: 'https://goo.gl/maps/WwKoYUWK1aswZbEZ7'
  },
  {
    name: 'Ridgeway Elementary School',
    room: 'Gym',
    address: '420 East 8th St',
    curbside: true,
    mapUrl: 'https://maps.app.goo.gl/w43U411jFpFdFc3Y7'
  },
  {
    name: 'Sutherland Secondary School',
    room: 'Gym',
    address: '1860 Sutherland Ave',
    curbside: true,
    mapUrl: 'https://www.google.com/maps/place/Sutherland+Secondary+School/@49.3259414,-123.0551626,17z/data=!3m1!4b1!4m5!3m4!1s0x5486706b426f99df:0xe19ecb0e0282cedb!8m2!3d49.3259496!4d-123.0531856'
  },
  {
    name: 'Harry Jerome Community Recreation Centre',
    room: '',
    address: '130 East 23rd St',
    curbside: false,
    mapUrl: 'https://www.google.com/maps/place/130+E+23+St,+North+Vancouver,+BC+V7L+3E2/@49.3302733,-123.073301,17z/data=!3m1!4b1!4m5!3m4!1s0x5486703da2a7e623:0xe43ce227dd29ace8!8m2!3d49.3302733!4d-123.0707261?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'John Braithwaite Community Centre',
    room: 'Shoreline Room',
    address: '145 West 1st St',
    curbside: false,
    mapUrl: 'https://maps.app.goo.gl/VHFx9o2nzE7WUywp9'
  },
  {
    name: 'Pipe Shop',
    room: '',
    address: '115 Victory Ship Way',
    curbside: false,
    mapUrl: 'https://www.google.com/maps/place/The+Pipe+Shop/@49.3103509,-123.0815279,17z/data=!3m1!4b1!4m5!3m4!1s0x5486704d23d10cbb:0x8c8a18f5c7c15915!8m2!3d49.3103583!4d-123.0793318'
  }
];

const voterGuides = [
  ['French', 'https://www.cnv.org/-/media/City-of-North-Vancouver/Documents/Election/2026/voter_guide_french.pdf'],
  ['简体中文 / Simplified Chinese', 'https://www.cnv.org/-/media/City-of-North-Vancouver/Documents/Election/2026/voter_guide_simplified_chinese.pdf'],
  ['繁體中文 / Traditional Chinese', 'https://www.cnv.org/-/media/City-of-North-Vancouver/Documents/Election/2026/voter_guide_traditional_chinese.pdf'],
  ['فارسی / Farsi', 'https://www.cnv.org/-/media/City-of-North-Vancouver/Documents/Election/2026/voter_guide_farsi.pdf'],
  ['한국어 / Korean', 'https://www.cnv.org/-/media/City-of-North-Vancouver/Documents/Election/2026/voter_guide_korean.pdf'],
  ['ਪੰਜਾਬੀ / Punjabi', 'https://www.cnv.org/-/media/City-of-North-Vancouver/Documents/Election/2026/voter_guide_punjabi.pdf']
];

function VotingInfo() {
  return (
    <section id="voting-info" className="section votingInfoSection">
      <div className="votingInfoIntro">
        <p className="eyebrow center">2026 City of North Vancouver Municipal Election</p>
        <h2 className="center">Make Your Plan to Vote</h2>
        <p className="center narrow">
          City of North Vancouver voters can vote in advance on October 7, 10, 13, 14 or 15,
          or on General Voting Day on Saturday, October 17, 2026.
        </p>
        <p className="votingSourceNote">
          Voting information below is reproduced for convenience from the City of North Vancouver.
          Please check the City’s official election page for the latest official information.
        </p>
        <a
          className="btn primary votingOfficialButton"
          href="https://www.cnv.org/City-Hall/General-Local-Election/2026-General-Local-Election"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official City Election Information <ExternalLink />
        </a>
      </div>

      <div className="votingHighlightGrid">
        <article className="votingCard votingCardAdvance">
          <div className="votingCardIcon"><Calendar /></div>
          <p className="votingKicker">Advance Voting</p>
          <h3>City Hall</h3>
          <p className="votingAddress"><MapPin /> 141 West 14th St, North Vancouver</p>

          <div className="votingDates">
            <div><strong>Wednesday, Oct. 7</strong><span>8:00 a.m. – 8:00 p.m.</span></div>
            <div><strong>Saturday, Oct. 10</strong><span>10:00 a.m. – 4:00 p.m.</span></div>
            <div><strong>Tuesday, Oct. 13</strong><span>10:00 a.m. – 7:00 p.m.</span></div>
            <div><strong>Wednesday, Oct. 14</strong><span>8:00 a.m. – 8:00 p.m.</span></div>
            <div><strong>Thursday, Oct. 15</strong><span>10:00 a.m. – 6:00 p.m.</span></div>
          </div>

          <div className="votingNotice">
            <strong>Curbside voting:</strong> Available for advance polls on 13th Street in front of City Hall.
          </div>
        </article>

        <article className="votingCard votingCardElectionDay">
          <div className="votingCardIcon"><MapPin /></div>
          <p className="votingKicker">General Voting Day</p>
          <h3>Saturday, October 17, 2026</h3>
          <div className="electionDayTime">8:00 a.m. – 8:00 p.m.</div>
          <p>
            Eligible voters can cast their ballot at any of the nine City of North Vancouver
            voting locations listed below.
          </p>
          <a className="btn primary" href="#general-voting-locations">
            See Voting Locations <ArrowRight />
          </a>
        </article>
      </div>

      <div id="general-voting-locations" className="votingSubsection">
        <p className="eyebrow center">General Voting Day Locations</p>
        <h2 className="center">Choose the location that works for you.</h2>
        <p className="center narrow">
          Saturday, October 17, 2026 • 8:00 a.m. – 8:00 p.m.
        </p>

        <div className="pollingGrid">
          {generalVotingLocations.map((location) => (
            <article className="pollingCard" key={location.name}>
              <MapPin />
              <div>
                <h3>{location.name}</h3>
                {location.room && <p className="pollingRoom">{location.room}</p>}
                <p>{location.address}</p>
                {location.curbside && (
                  <span className="curbsideBadge">Curbside voting available</span>
                )}
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                  Open Map <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="votingNotice votingNoticeWide">
          <strong>Curbside voting on General Voting Day:</strong> Available at the school-gym
          polling locations marked above. Look for the curbside voting sign in the designated
          parking spots near the voting location and call the number on the sign. An election
          official will come out to assist you.
        </div>
      </div>

      <div className="votingLowerGrid">
        <article className="votingInfoBox">
          <p className="votingKicker">Special Voting for Patients</p>
          <h3>Healthcare Facilities</h3>
          <p>
            <strong>Lions Gate Hospital &amp; Hope Centre</strong><br />
            October 10, 2026 • 9:00 a.m. – 4:00 p.m.
          </p>
          <p>
            <strong>Evergreen House &amp; Northshore Hospice</strong><br />
            October 13, 2026 • 9:30 a.m. – 2:30 p.m.
          </p>
        </article>

        <article className="votingInfoBox">
          <p className="votingKicker">Key Dates</p>
          <h3>2026 Election Timeline</h3>
          <ul className="votingTimeline">
            <li><strong>October 7:</strong> Start of Advance Voting</li>
            <li><strong>October 15:</strong> End of Advance Voting</li>
            <li><strong>October 17:</strong> General Voting Day</li>
            <li><strong>October 17:</strong> Preliminary Election Results announced</li>
            <li><strong>October 21:</strong> Last day for declaration of official election results by voting</li>
          </ul>
        </article>
      </div>
      
<div className="votingHelpBox">
  <div className="votingHelpIcon">
    <Mail />
  </div>

  <div className="votingHelpContent">
    <p className="votingKicker">Need Assistance?</p>
    <h3>Having difficulties voting?</h3>

    <p className="votingHelpIntro">
      Contact us and we’ll be happy to help you find the voting information you need.
    </p>

    <div className="votingHelpContacts">
      <a href="mailto:sda.cnv.2026@gmail.com">
        <Mail />
        <span>
          <small>E-mail</small>
          <strong>sda.cnv.2026@gmail.com</strong>
        </span>
      </a>

      <a href="tel:+12368893500">
        <span className="votingPhoneIcon">☎</span>
        <span>
          <small>Tel</small>
          <strong>236-889-3500</strong>
        </span>
      </a>
    </div>
  </div>
</div>
      
      <div className="languageGuides">
        <p className="eyebrow center">Voting Information in Other Languages</p>
        <h2 className="center">Voter Guides</h2>
        <p className="center narrow">
          Open the City of North Vancouver voter guide in the language you prefer.
        </p>

        <div className="languageGuideGrid">
          {voterGuides.map(([language, url]) => (
            <a
              className="languageGuideLink"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={language}
            >
              <span>{language}</span>
              <ExternalLink />
            </a>
          ))}
        </div>
      </div>
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

      <form
        className="form volunteerForm"
        action="https://seanfornorthvan.us8.list-manage.com/subscribe/post?u=587e49d15286ad474e259a7f5&id=bda6bce462&f_id=008669e1f0"
        method="post"
        target="_blank"
      >
        <input type="text" name="FNAME" placeholder="First Name" required />
        <input type="text" name="LNAME" placeholder="Last Name" required />
        <input type="email" name="EMAIL" placeholder="Email Address" required />
        <input type="tel" name="PHONE" placeholder="Cell Number" />

                <label className="checkOption">
          <input type="checkbox" name="group[302520][2]" value="1" />
          Join Mailing List / Keep Updated
        </label>
        
        <label className="checkOption">
          <input type="checkbox" name="group[302520][4]" value="1" />
          Sean's Campaign Team - Volunteer
        </label>

        <label className="checkOption">
          <input type="checkbox" name="group[302520][1]" value="1" />
          Canvass Door to Door
        </label>

        <label className="checkOption">
  <input type="checkbox" name="group[302520][16]" value="1" />
  Take a Lawn Sign
</label>
        
        <input
          type="text"
          name="b_587e49d15286ad474e259a7f5_bda6bce462"
          tabIndex="-1"
          value=""
          readOnly
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        />

        <p className="formDisclaimer">
          You can unsubscribe at any time by emailing sda.cnv.2026@gmail.com.
        </p>

        <button className="btn primary" type="submit">
          Sign Up
        </button>
      </form>
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

          <ul className="donation-options">
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
      <p className="eyebrow center">Media &amp; Campaign Materials</p>

      <h2 className="center">
        Campaign resources for residents, volunteers, and media.
      </h2>

      <p className="center narrow mediaIntro">
        Explore Sean’s platform, approved media resources, campaign photos,
        and printable materials.
      </p>

      <div className="campaignResourceGrid">
        {/* Campaign Resources */}
        <article className="campaignResourceCard">
          <div className="campaignResourceHeader">
            <div className="campaignResourceIcon">
              <Newspaper />
            </div>

            <div>
              <p className="campaignResourceLabel">Documents</p>
              <h3>Campaign Resources</h3>
            </div>
          </div>

          <p className="campaignResourceDescription">
            Read Sean’s platform, campaign statements, letters, and public
            commentary.
          </p>

          <div className="campaignResourceLinks">
            <a
              className="campaignResourceLink primaryResource"
              href="/assets/Platform & Core Pillars.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Platform &amp; Core Pillars</span>
              <small>Open PDF</small>
            </a>
 <a
  className="campaignResourceLink"
  href="/assets/why-im-running.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="resourceTitleWithBadge">
    <span className="newBadge">New</span>
    <span>Why I&apos;m Running</span>
  </span>

  <small>Open PDF</small>
</a>
            <a
              className="campaignResourceLink"
              href="/assets/motion-metro-sewage-plant-inquiry.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                Letter to the Editor:
                <br />
                Metro Sewage Plant Inquiry Motion
              </span>
              <small>Open PDF</small>
            </a>
          </div>
        </article>

        {/* Photos and Media Kit */}
        <article className="campaignResourceCard">
          <div className="campaignResourceHeader">
            <div className="campaignResourceIcon">
              <UserRound />
            </div>

            <div>
              <p className="campaignResourceLabel">Media Kit</p>
              <h3>Photos &amp; Biography</h3>
            </div>
          </div>

          <p className="campaignResourceDescription">
            Download Sean’s approved biography, media handout, and official
            campaign photography.
          </p>

          <div className="campaignResourceLinks">
            <a
              className="campaignResourceLink primaryResource"
              href="/assets/sean-alexander-media-handout.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Media Handout</span>
              <small>Open PDF</small>
            </a>

            <a
              className="campaignResourceLink"
              href="/assets/sean-alexander-campaign-bio.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Campaign Biography</span>
              <small>Open PDF</small>
            </a>

            <a
              className="campaignResourceLink"
              href="/assets/sean-official-portrait-waterfront.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Official Portrait</span>
              <small>Open Photo</small>
            </a>

            <a
              className="campaignResourceLink"
              href="/assets/sean-professional-portrait-clipboard.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Professional Portrait</span>
              <small>Open Photo</small>
            </a>

            <a
              className="campaignResourceLink"
              href="/assets/sean-city-hall.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>City Hall Photo</span>
              <small>Open Photo</small>
            </a>

            <a
              className="campaignResourceLink"
              href="/assets/sean-community-waterfront.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Community Waterfront Photo</span>
              <small>Open Photo</small>
            </a>

            <a
              className="campaignResourceLink"
              href="/assets/sean-labour-support.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Community Support Photo</span>
              <small>Open Photo</small>
            </a>
          </div>
        </article>

        {/* Campaign Materials */}
        <article className="campaignResourceCard campaignMaterialsCard">
          <div className="campaignResourceHeader">
            <div className="campaignResourceIcon">
              <ExternalLink />
            </div>

            <div>
              <p className="campaignResourceLabel">Downloads</p>
              <h3>Campaign Materials</h3>
            </div>
          </div>

          <p className="campaignResourceDescription">
            Download campaign materials to share with neighbours, volunteers,
            and community supporters.
          </p>

          <div className="campaignQRWrap">
            <img
              src="/assets/sean-website-qr.png"
              alt="QR code for Sean Alexander’s campaign website"
              className="campaignResourceQR"
            />

            <p>
              Scan to visit
              <br />
              <strong>seanfornorthvan.ca</strong>
            </p>
          </div>

          <div className="campaignResourceLinks">
            <a
              className="campaignResourceLink primaryResource"
              href="/assets/sean-rack-card.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Campaign Rack Card</span>
              <small>Open PDF</small>
            </a>

            <a
              className="campaignResourceLink"
              href="/assets/sean-website-qr.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Campaign QR Code</span>
              <small>Open Image</small>
            </a>
          </div>
        </article>
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
     <p className="footerContact">
  <Mail size={16} />
  <span>sda.cnv.2026@gmail.com</span>

  <span className="footerDivider">|</span>

  📞
  <span>236-889-3500</span>

  <span className="footerDivider">|</span>

  🌐
  <span>seanfornorthvan.ca</span>
</p>
<div className="footerSocials">
  <a href="https://www.facebook.com/seanfornorthvan" target="_blank" rel="noopener noreferrer">f</a>
<a
  href="https://www.instagram.com/seanfornorthvan/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </svg>
</a>
  <a href="https://www.linkedin.com/in/sean-alexander-365bba413/" target="_blank" rel="noopener noreferrer">in</a>
  <a href="mailto:sda.cnv.2026@gmail.com"><Mail /></a>
</div>
      <p className="auth"> Paid for and authorized by the Official Agent for Sean Alexander 236-889-3500 </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <VotingBanner />
      <Header />
      <Hero />
      <FeaturedVideo />
      <Intro />
      <About />
      <WhatMatters />
      <Voice />
      <Events />
      <VotingInfo />
      <Volunteer />
      <Donate />
      <Media />
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
