import React from "react";
import fullLogo from "./assets/Full Logo.png";
import shinersName from "./assets/Shiners Name.jpeg";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="ts-header">
        <div className="ts-header-inner">
          {/* Left: Shiners Name logo */}
          <button className="ts-logo ts-logo-image">
            <img src={shinersName} alt="Texas Shiners" />
          </button>

          {/* Center: nav links */}
          <nav className="ts-nav ts-nav-main">
            <button>Home</button>
            <button>Baits</button>
            <button>About</button>
            <button>Contact</button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero section with big transparent background logo */}
        <section className="ts-section ts-hero">
          <div className="ts-hero-bg-logo">
            <img
              src={fullLogo}
              alt="Texas Shiners full logo"
              className="ts-hero-bg-logo-img"
            />
          </div>

          <div className="ts-container">
            <p className="ts-eyebrow">
              Hand-poured soft plastics for pressured Texas water
            </p>
            <h1>Swimbaits built to stand out on bright, high-sun days.</h1>
            <p>
              Texas Shiners is a small-batch soft plastic lure company based in
              Houston, Texas. Every bait is poured by hand using custom molds
              and a unique process to maximize flash, durability, and action.
            </p>
            <button className="ts-primary-btn">View bait lineup</button>
          </div>
        </section>

        {/* Products section */}
        <section className="ts-section ts-products">
          <div className="ts-container">
            <h2>Current bait lineup</h2>
            <p>
              Designed to throw light, get noticed, and trigger reaction bites
              when fish are tracking flash.
            </p>

            <div className="ts-product-grid">
              <article className="ts-product-card">
                <h3>Trophy Hunter</h3>
                <p className="ts-product-tagline">
                  4.5&quot; paddletail swimbait for big, aggressive fish.
                </p>
                <p>
                  Individually owned and operated soft plastic lure company
                  crafting highly reflective baits that outshine the competition
                  on bright, sunny days. Texas Shiners uses custom handcrafted
                  molds and a unique lure-making process to create one-of-a-kind
                  soft plastics designed to throw light and get noticed.
                </p>
                <ul>
                  <li>4.5&quot; paddletail profile with a wide, thumping tail.</li>
                  <li>
                    Built to be as reflective as possible for high-sun
                    conditions.
                  </li>
                  <li>
                    Ideal on a 3/8–3/4 oz head for slow-rolling or mid-column
                    retrieves.
                  </li>
                </ul>
              </article>

              <article className="ts-product-card">
                <h3>Claw Tail</h3>
                <p className="ts-product-tagline">
                  3.5&quot; jerkbait with a claw-style tail for darting action.
                </p>
                <p>
                  Compact profile that flashes and darts hard, perfect for
                  schooling fish or fish tracking fast-moving presentations in
                  clear water.
                </p>
                <ul>
                  <li>3.5&quot; jerkbait body with a split, claw-style tail.</li>
                  <li>
                    Designed for sharp, erratic twitches on spinning or casting
                    gear.
                  </li>
                  <li>
                    Shines on bright days when fish are following but not fully
                    committing.
                  </li>
                </ul>
              </article>

              <article className="ts-product-card">
                <h3>Drop Shot Shiner</h3>
                <p className="ts-product-tagline">
                  3&quot; finesse jerkbait tuned for vertical and drop-shot
                  presentations.
                </p>
                <p>
                  Subtle, high-flash bait made for pressured fish that need a
                  smaller, more finesse look but still react to light and
                  movement.
                </p>
                <ul>
                  <li>3&quot; compact profile with a tight shimmy on the fall.</li>
                  <li>
                    Perfect for vertical sonar work or traditional drop-shot
                    rigs.
                  </li>
                  <li>
                    Built to show flash without overpowering pressured fish.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Social proof / testimonials */}
        <section className="ts-section ts-muted">
          <div className="ts-container">
            <h2>Coming soon: on-the-water feedback</h2>
            <p>
              Real feedback from anglers putting Texas Shiners to work on
              Houston-area lakes, rivers, and beyond.
            </p>
            <p>
              If you&apos;re interested in testing early colors or new bait
              designs, reach out and be part of the first wave of Texas Shiners
              anglers.
            </p>
          </div>
        </section>

        {/* Retail / availability */}
        <section className="ts-section">
          <div className="ts-container">
            <h2>Where to find Texas Shiners</h2>
            <p>
              Coming soon: find Texas Shiners at local tackle shops near you.
              Until then, reach out directly for orders, custom color work, and
              limited runs.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ts-footer">
        <div className="ts-footer-inner ts-container">
          <p>© {new Date().getFullYear()} Texas Shiners. All rights reserved.</p>
          <div className="ts-footer-links">
            <a href="#">Facebook</a>
            <a href="#">Etsy</a>
            <a href="mailto:texasshinersbaits@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
