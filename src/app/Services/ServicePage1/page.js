"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState("cases");

  const faqTabs = [
    { id: "cases", label: "Cases" },
    { id: "money", label: "Money" },
    { id: "policies", label: "Policies" },
    { id: "resolve", label: "Resolve Cases" },
    { id: "victory", label: "Victory %" },
    { id: "delivery", label: "Delivery" },
  ];

  const faqList = [
    "What should I do if I think the contract has been breached?",
    "How long does dispute resolution take?",
    "Is online dispute resolution legally valid?",
    "Do I need a lawyer?",
    "What happens if the other party refuses?",
  ];

  return (
    <>
      <Header />

      <main className="service-page">

        {/* HERO */}
        <section className="service-hero">
          <div className="hero-content">
            <h1>
              Settle <span className="highlight">Disputes</span> Quickly & Fairly —
              <span className="highlight"> 100% Online</span>
            </h1>

            <p>
              Resolve business, customer, or personal conflicts through a secure,
              transparent online platform.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Start Your Case</button>
              <button className="btn-secondary">How It Works</button>
            </div>
          </div>

          <img
            src="/assets/images/handshake.png"
            alt="Handshake"
            className="hero-image"
          />
        </section>

        {/* SERVICES */}
        <section className="services">
          <h2>Services We Provide</h2>
          <p>
            Resolve business, customer, or personal conflicts through a secure,
            transparent online platform.
          </p>

          <div className="service-section-title">Business Disputes</div>

          <div className="service-grid">
            {[
              "Contract Disputes",
              "Partnership Disputes",
              "Recovery of Money",
              "Construction & Infrastructure Disputes",
              "Employment Disputes",
              "Franchise Agreement Disputes",
              "Real Estate / Commercial Lease Disputes",
              "E-commerce & Platform Disputes",
            ].map((title) => (
              <div className="service-card" key={title}>
                <div className="service-icon"></div>
                <h4>{title}</h4>
                <p>Resolve conflicts through a secure platform.</p>
                <button className="service-btn">
                  Take Action <FaArrowRight />
                </button>
              </div>
            ))}
          </div>

          <div className="service-section-title">Personal Disputes</div>

          <div className="service-grid">
            {[
              "Property Disputes",
              "Rent & Lease Disputes",
              "Family Disputes",
              "Breach of Contract",
              "Loan / Recovery Disputes",
              "Construction / Possession Issues",
              "Employment / Service Matters",
              "Education-related Disputes",
            ].map((title) => (
              <div className="service-card" key={title}>
                <div className="service-icon"></div>
                <h4>{title}</h4>
                <p>Resolve conflicts through a secure platform.</p>
                <button className="service-btn">
                  Take Action <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us">
          <h2>Why Choose Us</h2>
          <p>
            Resolve business, customer, or personal conflicts through a secure,
            transparent online platform.
          </p>

          <div className="why-grid">
            {[
              { icon: "fast-resolution.png", title: "Fast Resolution" },
              { icon: "legacy.png", title: "Legally Compliant" },
              { icon: "secure.png", title: "Secure & Confidential" },
              { icon: "neutral.png", title: "Neutral Experts" },
              { icon: "access.png", title: "24/7 Access" },
            ].map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-icon-circle">
                  <img
                    src={`/assets/icons/${item.icon}`}
                    alt={item.title}
                  />
                </div>
                <h4>{item.title}</h4>
                <p>
                  Resolve business, customer, or personal conflicts through a secure process.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works">
          <img
            src="/assets/images/egg.png"
            alt="How it works"
            className="how-it-works-image"
          />
        </section>

        {/* FEATURES */}
        <section className="features">
          <img
            src="/assets/images/powerfull-features.png"
            alt="Platform Features"
          />
        </section>

        {/* FAQ */}
        <section className="faq">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <p>
            Resolve business, customer, or personal conflicts through a secure,
            transparent online platform.
          </p>

          <div className="faq-tabs">
            {faqTabs.map((tab) => (
              <button
                key={tab.id}
                className={`faq-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {faqList.map((q, index) => (
              <div className="faq-item" key={index}>
                <span>{q}</span>
                <FaArrowRight />
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
