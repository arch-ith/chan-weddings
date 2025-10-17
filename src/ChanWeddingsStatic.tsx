import React from "react";
import "./App.css";

interface Feature {
  title: string;
  icon: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    title: "Tooth Fairy Matches",
    icon: "💘",
    desc: "Swipe right on love — curated by someone who knows how to fill cavities (not emotional and dental only).",
  },
  {
    title: "Faint-Proof Filtering",
    icon: "😵",
    desc: "We automatically pause matchmaking when the founder’s BP hits 150/100.",
  },
  {
    title: "Sparkling Conversations",
    icon: "✨",
    desc: "Start your journey with clean puns and fluoride-level charm.",
  },
  {
    title: "Dental Discount for Couples",
    icon: "🦷",
    desc: "Get love and free cleaning — because plaque shouldn’t outlast your marriage.",
  },
  {
    title: "Doctor’s Approval",
    icon: "🩺",
    desc: "All matches are screened for good hygiene, humor, and stable blood pressure.",
  },
  {
    title: "Emergency Support",
    icon: "🚑",
    desc: "If the dentist faints mid-date, our support team will send chocolates (sugar-free).",
  },
];

export default function ChanWeddingsStatic() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <div>
          <h1>Chan-Weddings</h1>
          <p>A Matrimony Site Run by a Dentist AKA Manoj Ganesh.</p>
        </div>
        <div>
          <button className="secondary">Our Story</button>
          <button className="primary">Find Love</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Because Love Shouldn’t Be as Painful as a Root Canal.</h2>
          <p>
            Welcome to Chan-Weddings, India’s first matrimony site founded by a dentist with high BP and a history of fainting. We promise fewer cavities, more chemistry!
          </p>
          <div>
            <button className="primary">Get Matched</button>
            <button className="secondary">Check BP</button>
          </div>
        </div>
        <div className="centered-container">
          <img src="/image.png" alt="chan-weddings" />
          <p>Our founder may faint, but your love story won’t.</p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature-card">
            <span>{f.icon}</span>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Extra Info */}
      <section className="extra-info">
        <div className="extra-card">
          <h4>Meet the Dentist Behind It All</h4>
          <p>
            Dr. Chan once fainted during a tooth extraction — and that’s when she realized she’s better at match making.
          </p>
        </div>
        <div className="extra-card">
          <h4>Love & Hygiene Policy</h4>
          <p>
            We sanitize not just tools, but also our matchmaking process. 100% drama-free, cavity-free connections.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} Chan-Weddings • Founded by Dr. Chan
      </footer>
    </div>
  );
}
