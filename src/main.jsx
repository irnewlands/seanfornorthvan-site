import React from 'react';
import { createRoot } from 'react-dom/client';
import { Calendar, Mail, MapPin, Users, ShieldCheck, Car, Home, Heart, Megaphone, Menu, X } from 'lucide-react';
import './styles.css';

const nav = ['Home','About','What Matters','Events','Your Voice','Volunteer','Contact'];

function Header(){
  const [open,setOpen]=React.useState(false);
  return <header className="header">
    <a className="brand" href="#home"><span>SEAN</span><small>FOR NORTH VAN</small></a>
    <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <nav className={open?'open':''}>{nav.map(n=><a key={n} onClick={()=>setOpen(false)} href={'#'+n.toLowerCase().replaceAll(' ','-')}>{n}</a>)}</nav>
  </header>
}

function Hero(){return <section id="home" className="hero">
  <div className="heroText">
    <p className="eyebrow">North Vancouver City Council • Election 2026</p>
    <h1>Your Voice.<br/>Our City.<br/><span>No More Surprises.</span></h1>
    <p className="lead">Sean Alexander is running to bring residents into the decision-making process before final choices are made — with practical leadership, transparency, and grassroots listening.</p>
    <div className="actions"><a className="btn primary" href="#your-voice">Share Your Concern</a><a className="btn" href="#volunteer">Volunteer</a></div>
  </div>
  <div className="heroPhoto"><img src="/assets/sean-portrait-full.jpg" alt="Sean Alexander"/></div>
</section>}

function About(){return <section id="about" className="section split">
  <div><p className="eyebrow">About Sean</p><h2>A long-time North Vancouver resident committed to listening first.</h2><p>Sean’s path to public service began with a simple belief: leadership starts with listening and rolling up your sleeves. He has been active in grassroots democratic work since 2006, including door knocking, phone calling, community mobilization, and campaign organizing.</p><p>Sean moved to North Vancouver in 2011 and fell in love with the city, its lifestyle, and its people. He believes public service is not a resume checkbox — it is a daily lifestyle of showing up, helping neighbours, and doing the work.</p></div>
  <div className="card quote"><h3>Leadership starts with listening.</h3><p>Sean is committed to personally answering messages, questions, and concerns sent to the campaign within 48 hours.</p></div>
</section>}

const issues=[['Traffic & Livability',Car,'Residents are asking for practical action to reduce congestion, improve daily life, and make streets safer.'],['Smart Growth',Home,'Balanced development must protect livability, infrastructure, neighbourhood character, and long-term sustainability.'],['Public Safety',ShieldCheck,'Safe public spaces, proactive prevention, and community-focused solutions matter to families and residents.'],['Cost Fairness',Megaphone,'North Vancouver residents deserve transparency, accountability, and fair funding for infrastructure costs.']];
function WhatMatters(){return <section id="what-matters" className="section light"><p className="eyebrow center">What Matters to North Vancouver</p><h2 className="center">A living platform built through conversations with residents.</h2><div className="grid">{issues.map(([t,Icon,d])=><div className="issue" key={t}><Icon/><h3>{t}</h3><p>{d}</p></div>)}</div></section>}

function Events(){return <section id="events" className="section event"><div><p className="eyebrow">Campaign Event</p><h2>Let’s talk about the future of North Vancouver.</h2><p>Join fellow residents for an open-air conversation about the City of North Vancouver and the kind of city we are building together.</p><ul className="checks"><li><Calendar/> June 6 • 11 AM, 2 PM, 5 PM</li><li><MapPin/> Sam Walker Park • 8th & St. Andrews</li><li><Users/> Free parking. Bring a chair and your questions.</li></ul></div><img src="/assets/event-instagram.png" alt="Campaign event poster"/></section>}

function Voice(){return <section id="your-voice" className="section split"><div><p className="eyebrow">Your Voice Portal</p><h2>Tell Sean what City Council needs to hear.</h2><p>Sean’s campaign is built around listening before decisions are made. This section can later connect to a Google Form, MailerLite form, or custom database.</p></div><form className="form"><input placeholder="Name"/><input placeholder="Email"/><select><option>What issue matters most?</option><option>Traffic</option><option>Housing</option><option>Public Safety</option><option>Cost Fairness</option><option>Other</option></select><textarea placeholder="Share your concern or idea"/><button className="btn primary" type="button">Submit Concern</button></form></section>}

function Volunteer(){return <section id="volunteer" className="section dark"><p className="eyebrow center">Get Involved</p><h2 className="center">Help build a stronger, safer, more livable North Vancouver.</h2><div className="grid two"><div className="darkCard"><Heart/><h3>Volunteer</h3><p>Door knocking, phone calls, events, sign delivery, social media, and community outreach.</p></div><div className="darkCard"><Mail/><h3>Contact</h3><p>Email: sda.cnv.2026@gmail.com<br/>Website: seanfornorthvan.ca</p></div></div></section>}

function Contact(){return <footer id="contact"><h2>Sean Alexander</h2><p>For North Vancouver City Council</p><p>Authorized by Sean for North Van | Financial Agent: __________</p></footer>}

function App(){return <><Header/><Hero/><About/><WhatMatters/><Events/><Voice/><Volunteer/><Contact/></>}
createRoot(document.getElementById('root')).render(<App/>);
