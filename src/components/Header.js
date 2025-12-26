"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <div className="logo-area">
          <img
            src="/assets/images/logo.png"
            alt="RaaziMarzi Logo"
            className="logo"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          {/* SERVICES DROPDOWN */}
          <div className="services-dropdown">
            <span className="services-link">
              Services <span className="arrow">⌄</span>
            </span>

            <div className="dropdown-menu">

              {/* Professional Dispute */}
              <div className="dropdown-item">
                <span>Professional Dispute ➜</span>
                <div className="sub-menu">
                  <Link href="/Services/ContractDisputes">
                    Contract Dispute
                  </Link>
                  <Link href="/Services/PartnershipDisputes">
                    Partnership Dispute
                  </Link>
                </div>
              </div>

              {/* Personal Dispute */}
              <div className="dropdown-item">
                <span>Personal Dispute ➜</span>
                <div className="sub-menu">
                  <Link href="/Services/Property&RentalDisputes">
                    Property & Rental Dispute
                  </Link>
                  <Link href="/Services/ConsumerDisputes">
                    Consumer Dispute
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <Link href="/AboutUs">About Us</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/case-journey">Case Journey</Link>
          <Link href="/ContactUs">Contact Us</Link>
        </nav>

        {/* Request Demo */}
        <div className="demo-btn">
          <Link href="/request-demo">Request Demo</Link>
        </div>

        {/* Mobile Icon */}
        <div
          className="mobile-icon"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </div>
      </div>
    </header>
  );
}
