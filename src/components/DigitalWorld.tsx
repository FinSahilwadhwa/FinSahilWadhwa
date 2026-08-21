"use client";

import { useState } from "react";

const moments = [
  [
    "Mar 2024 — Present",
    "Accounts & Tax Associate / Smita Patni Associates",
    "Working across accounting, taxation and compliance for multiple clients: day-to-day bookkeeping, GST, TDS and ROC compliance, e-invoicing, e-way bills, reconciliations, financial reporting, Income Tax return documentation and regular client coordination. Also assisted with ROC work for a large automobile company and internal-audit assignments for a listed company, including vouching and reconciliations.",
  ],
  [
    "May 2022 — Mar 2024",
    "Accounts & Compliance Executive / Sahil & Associates",
    "Managed accounting and bookkeeping for clients; handled GST and TDS compliance; prepared reconciliations and supporting schedules; assisted with ROC and Income Tax related work; and used accounting software and Excel for regular financial operations and day-to-day client requirements.",
  ],
];

export default function DigitalWorld() {
  const [open, setOpen] = useState<number | null>(null);

  return <main className="site">
    <div className="grain" />
    <nav className="nav"><a href="#top">SAHIL / 01</a><div className="nav-links"><a href="#build">TaxBro</a><a href="#world">Elsewhere</a><a href="#contact">Hire me</a></div></nav>

    <section id="top" className="hero">
      <div className="hero-intro"><div className="eyebrow">Finance by profession. Curious by nature.</div><h1><span><i>Hi, I’m</i></span><span><i>Sahil.</i></span></h1><p className="hero-copy">I work in accounting, tax and compliance. Outside work, I enjoy building little things, exploring technology and following ideas far enough to see where they go.</p><button className="magnetic" onClick={() => document.querySelector("#identity")?.scrollIntoView({ behavior: "smooth" })}>get to know me <b>↓</b></button></div>
      <div className="hero-machine"><div className="machine-top"><span>SAHIL.OS</span><span>LIVE / NOW</span></div><div className="machine-main"><div className="portrait-window portrait-abstract"><span>signal / active</span></div><div className="machine-copy"><p>FINANCE.<br />CURIOSITY.</p><small>work, ideas, and a few<br />tabs open at once</small></div></div><div className="machine-stream"><div className="machine-stream-track"><span>BUILDING</span><span>LEARNING</span><span>TRYING IDEAS</span><span>BUILDING</span><span>LEARNING</span><span>TRYING IDEAS</span></div></div><div className="machine-bottom"><span>01 / WORK</span><span>02 / TAXBRO</span><span>03 / EXPERIMENTS</span></div></div><div className="scroll-mark">SCROLL TO ENTER</div>
    </section>

    <section id="identity" className="section identity"><div><div className="index">01 / a little about me</div><h2>Work keeps me<br />grounded. Curiosity<br />keeps me moving.</h2><p className="identity-copy">My background is in accounting, taxation and compliance. Outside work, I enjoy experimenting with websites, AI and different ideas. I’m not a hardcore developer — I simply enjoy learning by building things myself.</p><div className="identity-stamp">STILL LEARNING.<br />STILL TRYING.</div></div><div className="identity-menu">{[["01", "Accounting", "the numbers and the details"], ["02", "Tax & compliance", "GST, TDS, ROC and related work"], ["03", "Building", "small websites, tools and experiments"], ["04", "Curiosity", "ideas worth trying out"]].map(([number, title, sub], index) => <button className={`identity-row row-${index}`} key={number}><span>{number}</span><strong>{title}</strong><span>{sub} ↗</span></button>)}</div></section>

    <section id="build" className="section tax"><div className="tax-grid"><div><div className="index">02 / one thing I built</div><h2>TaxBro,<br />simply useful.</h2><div className="tax-copy"><p>TaxBro started from my experience with tax and compliance, and my interest in making useful information easier to access. It’s a small project I keep improving as I learn.</p><ul className="feature-list"><li>HSN / SAC lookup</li><li>MCA codes</li><li>GST information</li><li>Finance-related resources</li></ul></div></div><div className="browser"><div className="chrome"><i /><i /><i /><div className="address">taxbro.in / lookup</div></div><div className="product"><aside className="side"><b>TaxBro</b>Lookup<br />MCA<br />GST<br />Resources</aside><div className="dash"><h3>HSN Code Lookup</h3><div className="search">⌕ &nbsp; smartphone</div><div className="result"><div><span className="pill">MATCH FOUND</span><div className="code">85171200</div><small>Telephones for cellular networks.</small></div><div className="bars"><small>QUERY SNAPSHOT</small><i /><i /><i /></div></div></div></div></div></div></section>

    <section className="section"><div className="section-head"><div><div className="index">03 / work experience</div><h2>Where I’ve<br />learned the work.</h2></div><span className="index">tap a role</span></div><div className="timeline">{moments.map(([date, title, text], index) => <article className={`moment ${open === index ? "open" : ""}`} key={date}><button onClick={() => setOpen(open === index ? null : index)}><time>{date}</time><h3>{title} <span>↘</span></h3><p>{text}</p></button></article>)}</div></section>

    <section id="world" className="section playground"><div className="world">ELSEWHERE</div><div className="thought one">AI &amp; ideas</div><div className="thought two">still learning</div><div className="thought three">web experiments</div><div className="thought four">interesting things</div><p className="world-copy">This is the person behind the work: things I enjoy, things I’m curious about, random experiments and ideas that might become something later.</p></section>

    <section id="contact" className="section contact"><div><div className="index">04 / hire me</div><h2>Let’s talk.</h2><p>I’m currently looking for my next opportunity. If my accounting, tax and compliance experience could be useful to your team, let’s talk. I also take on some freelance work for specific requirements.</p><div className="flex gap-3 justify-center flex-wrap"><a className="magnetic" href="mailto:sahilwadhwa520@gmail.com">hire me ↗</a><a className="magnetic" href="mailto:sahilwadhwa520@gmail.com">let’s talk ↗</a><a className="magnetic" href="/cv">view CV ↗</a><a className="magnetic" href="https://www.linkedin.com/in/sahil-wadhwa2004?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
    <footer className="footer"><span>© {new Date().getFullYear()} SAHIL WADHWA</span><span>MADE WITH CURIOSITY</span></footer>
  </main>;
}
