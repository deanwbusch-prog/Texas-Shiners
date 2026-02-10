function Header() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="ts-header">
      <div className="ts-header-inner">
        <button
          className="ts-logo"
          onClick={() => scrollToId("home")}
        >
          Texas Shiners
        </button>

        <nav className="ts-nav">
          <button onClick={() => scrollToId("home")}>Home</button>
          <button onClick={() => scrollToId("products")}>Trophy Hunter</button>
          <button onClick={() => scrollToId("products")}>Claw Tail</button>
          <button onClick={() => scrollToId("products")}>Drop Shot</button>
          <button onClick={() => scrollToId("store-locator")}>Store Locator</button>
          <button onClick={() => scrollToId("reviews")}>Reviews</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
